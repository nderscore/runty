module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
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
              node: 14,
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
              node: 14,
            }
          },
        ]
      ]
    }
  },
};
