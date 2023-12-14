import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontSize: '20px',
        fontFamily: 'Gruppo',
        color: 'blue.900',
        lineHeight: 'tall',
        fontWeight: '600',
        backgroundColor: 'red.50',
      },
      'a, button': {
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '25px',
        padding: '10px',
        borderRadius: '15px',
        fontWeight: '600',
        '&.active, &:hover': {
          backgroundColor: 'red.300',
        },
      },
      '.icon-home, svg, img': {
        width: '20px',
      },
      'header, header>div, header>div>ul, form': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        '&>ul': {
          width: '600px',
          margin: '0 auto',
          gap: '15px',
        },
      },
      ul: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        listStyle: 'none',
        paddingBottom: '20px',
        '&>li': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
      input: {
        backgroundColor: 'red',
        width: '400px',
      },
      h2: {
        fontSize: '30px',
      },
      p: {
        textAlign: 'center',
        display: 'block',
        width: '600px',
        paddingTop: '30px',
        fontSize: '25px',
      },
      nav: {
        marginTop: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
      },
    },
  },
});
