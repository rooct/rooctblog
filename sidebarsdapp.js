/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  dapp: [
    {
      type: 'autogenerated',
      dirName: './dapps', // '.' means the current docs folder
    },
  ],
  
  // docs: [
  //   'intro',
  //   {
  //     type: 'category',
  //     label: 'Basic',
  //     collapsed: false,
  //     items: [
  //       'tutorial-basics/create-a-page',
  //       'tutorial-basics/create-a-blog-post',
  //       'tutorial-basics/create-a-document',
  //       'tutorial-basics/deploy-your-site',
  //     ],
  //   },
  //   {
  //     type: 'category',
  //     label: 'Extras',
  //     collapsed: false,
  //     items: [
  //       'tutorial-extras/manage-docs-versions',
  //       'tutorial-extras/translate-your-site',
  //     ],
  //   }
  // ],
  // solidity: [
  //   'introx',
  //   {
  //     type: 'category',
  //     label: 'Basic',
  //     collapsed: false,
  //     items: [
  //       'tutorial-basics/create-a-page',
  //       'tutorial-basics/create-a-blog-post',
  //       'tutorial-basics/create-a-document',
  //       'tutorial-basics/deploy-your-site',
  //     ],
  //   },
  //   {
  //     type: 'category',
  //     label: 'Extras',
  //     collapsed: false,
  //     items: [
  //       'tutorial-extras/manage-docs-versions',
  //       'tutorial-extras/translate-your-site',
  //     ],
  //   }
  // ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
