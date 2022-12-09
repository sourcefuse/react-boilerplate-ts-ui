const styles = {
  link: {
    width: '270px',
    height: '30px',
    paddingY: 0.5,
    paddingX: 1,
    textTransform: 'capitalize',
    fontSize: 14,
    '&:hover': {
      backgroundColor: 'primary.main',
      color: '#fff',
      '& .MuiListItemIcon-root, .MuiSvgIcon-root, .MuiListItemText-root': {
        color: '#fff',
      },
    },
  },
  linkListActive: {backgroundColor: '#F7F7F7', color: 'primary.main'},
  linkText: {
    position: 'relative',
    height: '13px',
    left: '10.5%',
    right: '64.5%',

    fontFamily: 'Gotham',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '13px',
    color: '#525252',
  },
  linkTextActive: {
    position: 'relative',
    height: '17px',
    left: '10.6%',
    right: '64.4%',

    fontFamily: 'Gotham',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '17px',

    color: '#000000',
  },
  listItemIcon: {minWidth: 30, position: 'relative', left: '9.56%'},
  linkItemIconActive: {
    position: 'relative',
    left: '9.5%',
    color: `#E81823`,
  },
  divider: {marginTop: 1, marginBottom: 1, height: 2},
  title: {paddingX: 1, textTransform: 'uppercase', fontWeight: 'bold'},
};

export default styles;
