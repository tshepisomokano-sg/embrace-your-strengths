const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Path to your pages folder
const pagesDir = path.join(__dirname, 'src', 'pages');

// Read all .tsx files in pages
const pageFiles = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.tsx') && file !== 'NotFound.tsx');

// Map pages to sitemap links
const links = pageFiles.map(file => {
  let name = file.replace('.tsx', '');
  if (name.toLowerCase() === 'index') name = ''; // homepage
  return {
    url: `/${name.toLowerCase()}`,
    changefreq: name === '' ? 'daily' : 'weekly',
    priority: name === '' ? 1.0 : 0.7,
  };
});

// Create sitemap stream
const sitemap = new SitemapStream({ hostname: 'https://www.sgbenefits.co.za' });

// Convert links array into readable stream
const stream = Readable.from(links);

// Pipe links to sitemap and write to public/sitemap.xml
streamToPromise(stream.pipe(sitemap))
  .then(data => {
    const publicDir = path.join(__dirname, 'public');
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), data.toString());
    console.log('Sitemap generated!');
  })
  .catch(err => console.error(err));
