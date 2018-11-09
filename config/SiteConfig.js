module.exports = {
  pathPrefix: 'blog', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'The Blog of J.D. Sandifer', // Navigation and Site Title
  siteTitleAlt: 'My Development Blog - J.D. Sandifer', // Alternative Site title for SEO
  siteUrl: 'https://www.jdsandifer.com/blog', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/social/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'My blog about software development, life, and whatever comes to mind.', // Your site description
  author: 'J.D. Sandifer', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@jdsandifer', // Twitter Username - Optional
  // ogSiteName: '', // Facebook Site Name - Optional
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.js
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',
};
