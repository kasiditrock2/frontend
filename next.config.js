const withSass = require("@zeit/next-sass");

module.exports = {
  reactStrictMode: true,
};
// module.exports = withSass({
//   webpack: config => {
//       config.node = {
//           fs: 'empty'
//       }
//       return config
//   }
// })

