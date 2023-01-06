const styles = {
  container: {
    display: 'inline-block',
    minWidth: '250px',
    paddingLeft: '0px',
    paddingRight: '20px',
    position: 'sticky',
    top: '100px',
    height: 'fit-content',
    maxHeight: '90vh',
    borderLeft: '1px solid #D1D1D1;',
  },
  link: {
    textTransform: 'capitalize',
    fontFamily: 'Gotham',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    paddingLeft: '20px',
    '&:hover': {
      backgroundColor: '#F7F7F7',
      color: 'black',
    },
    '&:visited': {
      textDecoration: 'none',
    },
  },
  activeLink: {
    color: ' #19A5FF',
    fontFamily: 'Gotham',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    '&:hover': {
      color: 'black',
    },
  },
};

export default styles;
