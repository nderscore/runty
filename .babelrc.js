module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true
      },
    ],
  ],
  env: {
    cjs: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 8,
            }
          },
        ],
      ],
    },
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 8,
            }
          },
        ]
      ]
    }
  },
};
