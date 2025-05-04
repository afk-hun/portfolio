import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '1/1': '1 / 1',
        '3/1': '3 / 1',
      },
    },
  },
  //plugins: [require('@tailwindcss/aspect-ratio')],
};

export default config;
