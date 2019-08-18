module.exports = {
  siteMetadata: {
    title: 'Besian\'s Reviews',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "u3za66gsxehx",
        accessToken: "00b365cdfbfa7900ee126592a013a9c40ab2816695e4e3148298f1e5ac81bcf1"
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-identity-widget',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}