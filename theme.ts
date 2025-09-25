import { createTheme, MantineColorsTuple } from '@mantine/core';

const rojoBiramex: MantineColorsTuple = [
  '#ffeaea', '#ffc9c9', '#ff9797', '#ff6161', '#ff3a3a', '#ff1e1e', '#ff0a0a', '#e10000', '#c70000', '#ae0000',
];

const verdeBiramex: MantineColorsTuple = [
  '#eaffea', '#c9f7c9', '#97ec97', '#61e061', '#3ad63a', '#1ecb1e', '#09b200', '#009f00', '#008d00', '#007c00',
];

const azulBiramex: MantineColorsTuple = [
  '#e6ecff', '#c5d1f7', '#91a6ea', '#5c79dd', '#2e5abd', '#1c4db2', '#093ea7', '#003797', '#002f87', '#001f70',
];

export const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  headings: {
    fontFamily: 'Playfair Display, serif',
    fontWeight: '700',
  },
  colors: {
    biramexRed: rojoBiramex,
    biramexGreen: verdeBiramex,
    biramexBlue: azulBiramex,
  },
  primaryColor: 'biramexBlue',
  primaryShade: 4,
  components: {
    Button: {
      styles: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});
