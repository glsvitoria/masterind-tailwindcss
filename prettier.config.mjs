/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  overrides: [
    {
      files: '*.tsx',
      options: {
        plugins: ['prettier-plugin-tailwindcss'],
      },
    },
  ],
}

export default config
