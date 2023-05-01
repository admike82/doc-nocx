// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Doc NOCx",
  tagline: "Prenez en main l'application de gestion pédagogique NOCx",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://admike82.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/doc-nocx/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "admike82", // Usually your GitHub org/user name.
  projectName: "doc-nocx", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        language: "fr",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Doc NOCx",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/admike82/doc-nocx",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Accueil",
                to: "/docs/category/accueil",
              },
              {
                label: "Planning",
                to: "/docs/category/planning",
              },
              {
                label: "Progressions pédagogiques",
                to: "/docs/category/progressions-pédagogiques",
              },
              {
                label: "Relevé d'heures",
                to: "/docs/category/relevé-dheures",
              },
              {
                label: "Gestion des notes",
                to: "/docs/category/gestion-des-notes",
              },
              {
                label: "Suivis",
                to: "/docs/category/suivis",
              },
              {
                label: "Absences/retards",
                to: "/docs/category/absences--retards",
              },
              {
                label: "Administration",
                to: "/docs/category/administration",
              },
            ],
          },
          {
            title: "Communauté",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/michael-gross-01a75b140/",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/watch?v=xc0mVqEGJL8&list=PLHtYFfuvnVjacNaZIMg2WU-tspXH4WvUz",
              },
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: "Plus",
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: "GitHub",
                href: "https://github.com/admike82/doc-nocx",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Doc NOCx, <a href="http://admike.fr" target="_blank" >Michaël GROSS</a> Built with <a href="https://docusaurus.io/fr/" target="_blank">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
