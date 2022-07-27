module.exports = {
  plugins: [
    [
      'prismjs',
      {
        languages: [
          'bash',
          'css',
          'graphql',
          'html',
          'javascript',
          'js',
          'json',
          'jsx',
          'markup',
          'md',
          'regex',
          'sass',
          'scss',
          'shell',
          'ts',
          'tsx',
          'typescript',
        ],
        plugins: ['line-numbers'],
        theme: 'okaidia',
        css: true,
      },
    ],
  ],
}
