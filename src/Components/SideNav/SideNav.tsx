import List from '@mui/material/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import Logo from 'Images/logo.png';
import React from 'react';
import {useLocation} from 'react-router-dom';
import sideNavConfig from './sideNavConfig';
import SideNavLink from './SideNavLink';

interface Props {
  isPermanent: boolean;
  open: boolean;
  drawerWidth: number;
  toggleDrawer: any;
  isAppBarFullWidth: boolean;
}

const SideNav: React.FC<Props> = ({isPermanent, drawerWidth, toggleDrawer, open, isAppBarFullWidth}) => {
  const location = useLocation();
  return (
    <SwipeableDrawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant={isPermanent ? 'persistent' : 'temporary'}
      anchor="left"
      open={open}
      ModalProps={{
        onClose: toggleDrawer,
      }}
      onOpen={toggleDrawer}
      onClose={toggleDrawer}
      data-testid="sidenav"
    >
      {(isAppBarFullWidth || !isPermanent) && <Toolbar />}
      <img src={Logo} alt="logo" />
      <List>
        {sideNavConfig.map((sideNavConfigItem, index) => (
          <SideNavLink key={`menu-${index}`} location={location} {...sideNavConfigItem} />
        ))}
      </List>
    </SwipeableDrawer>
  );
};
export default SideNav;
