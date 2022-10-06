module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        paperTexture: 'url("./images/bg__paper-texture.jpg")',
        bgNav: 'url("./images/bg__nav.png")',
        bgNewsletter: 'url("./images/bg__newsletter.jpg")',
        treeStump: 'url("./images/treestump.svg")',
      },
      backgroundSize: {
        '100%': '100%',
      },
      colors: {
        sinopia: '#cf3b08',
        halfSpanishWhite: '#ebdac9',
        harleyDavidsonOrange: '#cb3516',
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
        turquoise: '#61D6C0',
        tealGreen: '#00877a',
        sulu: '#c3eb77', // light green
        sheenGreen: '#98cd00', // green yellow
        blueDiane: '#1b5253', // dark green
        melon: '#ffb5b0', // light pink
        cabSav: '#4d0c20', // maroon
        alpine: '#b28743', // tan
      },
      minHeight: {
        '44rem': '44rem',
      },
      zIndex: {
        nav: 9999,
      },
    },
    fontFamily: {
      body: ['Avenir Next', 'Avenir', 'Nunito Sans'],
      script: 'Damion',
      narrow: 'Sherman',
      condensed: 'Redwood Regular',
      condensedAlt: 'Redwood Alternative',
      wide: 'Eagle Sight',
    },
  },
  plugins: [],
}
