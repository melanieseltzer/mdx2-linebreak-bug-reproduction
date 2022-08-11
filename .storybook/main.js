module.exports = {
  framework: '@storybook/react',
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  features: {
    previewMdx2: true
  }
};
