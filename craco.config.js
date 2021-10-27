module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: false }]
    ],
    assumptions: {
      setPublicClassFields: false
    }
  }
}
