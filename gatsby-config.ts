import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      },
    },
  ],
};

export default config;
