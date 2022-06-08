module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'Arial', 'Helvetica', 'sans'],
      },
      colors: {
        dev: {
          night: '#111123',
          blue: '#251791',
          aqua: '#33FDD8',
          purple: '#45108A',
          violet: '#7A4AFF',
          white: '#FFFFFF',
          gray: {
            10: '#E7E7E9',
            20: '#CFCFD3',
            30: '#9F9FA7',
            40: '#888891',
            50: '#70707B',
            60: '#585865',
            70: '#40404E',
            80: '#282838',
          },
        },
      },
    },
  },
  plugins: [],
};
