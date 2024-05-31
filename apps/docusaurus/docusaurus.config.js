/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const internetProfiles = {
  github: {
    label: 'GitHub',
    href: 'https://github.com/Muath',
  },
  stackoverflow: {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/u/1751946',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/Muath',
  },
  medium: {
    label: 'Medium',
    href: 'https://medium.com/@Muath',
  },
  twitter: {
    label: 'Twitter',
    href: 'https://twitter.com/Muathz',
  },
  facebook: {
    label: 'Facebook',
    href: 'https://facebook.com/Muath',
  },
};

module.exports = {
  title: 'Muath',
  tagline: 'Front End Engineer',
  url: 'https://Muathtay.com',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'Muath',
  projectName: 'Muathtay.com',
  themeConfig: {
    internetProfiles,
    navbar: {
      title: 'Muath',
      items: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'resume', label: 'Resume', position: 'left'},
        {to: 'goals', label: 'Life Goals', position: 'left'},
        {
          href: 'https://github.com/Muath',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {},
        {
          title: 'Professional',
          items: [
            internetProfiles.github,
            internetProfiles.stackoverflow,
            internetProfiles.linkedin,
          ],
        },
        {
          title: 'Social',
          items: [
            internetProfiles.medium,
            internetProfiles.twitter,
            internetProfiles.facebook,
          ],
        },
        {},
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        id: 'universal-analytics',
        trackingID: 'UA-44622716-1',
        anonymizeIP: true,
      },
    ],
  ],
};
