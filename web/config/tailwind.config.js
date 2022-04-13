module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        paperTexture: 'url("./images/bg__paper-texture.jpg")',
        bgNewsletter: 'url("./images/bg__newsletter.jpg")',
        treeStump: 'url("./images/treestump.svg")',
      },
      backgroundSize: {
        '100%': '100%',
      },
      colors: {
        sinopia: '#cf3b08',
        halfSpanishWhite: '#ebdac9',
        gossamer: '#009788',
        cafeRoyale: '#664c22',
        romance: '#88672f',
        rangoonGreen: '#1d1916',
        starkWhite: '#e7d4bd',
        vanilla: '#d0b99a',
        marigold: '#b6893e',
        rustyNail: '#87672f',
        bone: '#e0c9af',
        twine: '#c09a5c',
      },
      fontSize: {
        '5-375rem': '5.375rem',
      },
      minHeight: {
        '44rem': '44rem',
      },
    },
    fontFamily: {
      body: ['Avenir Next', 'Avenir', 'Nunito Sans'],
      script: 'Damion',
      condensed: 'Redwood Regular',
      condensedAlt: 'Redwood Alternative',
      wide: 'Eagle Sight',
    },
  },
  plugins: [],
}
