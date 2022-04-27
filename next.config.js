/** @type {import('next').NextConfig} */

const template = 'default';

const nextConfig = {
  reactStrictMode: true,
  applicationRoot : `src/templates/${template}/`,
  pageExtensions: [
    'page.tsx',
    'api.ts',
  ],
  rootPaths: ['/src/templates/default/pages'],
  pagesDir: `src/templates/${template}/`,
  pages: `src/templates/${template}/`
}

module.exports = nextConfig
