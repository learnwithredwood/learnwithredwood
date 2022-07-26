/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  // Add custom rules for your project
  // config.module.rules.push(YOUR_RULE)
  config.module.rules.push({
    test: /\.mdx?$/,
    use: [
      {
        loader: '@mdx-js/loader',
        /** @type {import('@mdx-js/loader').Options} */
        options: {},
      },
    ],
  })

  // Add custom plugins for your project
  // config.plugins.push(YOUR_PLUGIN)

  return config
}
