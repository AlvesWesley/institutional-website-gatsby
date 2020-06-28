module.exports = {
  siteMetadata: {
    title: `ACME Corporation`,
    description: `Companhia Americana "Faz Tudo"`,
    presentation: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod lacus sit amet massa rhoncus, vitae luctus urna lobortis. Donec feugiat erat et risus ultricies, vel mollis tellus lacinia. Donec egestas viverra dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pretium nisl elit, sit amet porta orci malesuada nec.`,
    author: `@AlvesWesley`,
    siteUrl: 'https://condescending-mccarthy-1d6dd7.netlify.app/',
    menu: [
      {
        name: 'Home',
        path: '/',
        title: 'Home page'
      },
      {
        name: 'Sobre',
        path: '/sobre',
        title: 'Sobre nós'
      },
      {
        name: 'Contato',
        path: '/contato',
        title: 'Contato'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ACME Corporation`,
        short_name: `ACME`,
        start_url: `/`,
        background_color: `#0073ff`,
        theme_color: `#0073ff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Nunito:wght@200;400;900'],
        display: 'swap'
      }
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`
  ]
}
