const styles = {
  link: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
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
  linkListActive: {backgroundColor: 'secondary.light', color: 'primary.main'},
  linkTextActive: {
    color: `primary.main`,
    fontWeight: 'bold !important',
  },
  listItemIcon: {minWidth: 30},
  linkItemIconActive: {
    color: `primary.main`,
  },
  divider: {marginTop: 1, marginBottom: 1, height: 2},
  title: {paddingX: 1, textTransform: 'uppercase', fontWeight: 'bold'},
};

export default styles;
