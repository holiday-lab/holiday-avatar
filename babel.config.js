module.exports = {
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  plugins: [
    [
      '@vue/babel-plugin-jsx',
      {
        optimize: true,
      },
    ],
  ],
};
