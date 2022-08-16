import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles';
// interface sideNavProps {
//   children: Array<any>;
//   link: string;
//   icon: React.ReactNode;
//   label: string;
//   location: any;
//   type: string;
//   visible: boolean;
// }

// interface NestedNavProps {
//   children: Array<any>;
//   link: string;
//   icon: React.ReactNode;
//   label: string;
//   location: any;
//   isLinkActive: boolean;
// }

const isChildOf = (child, parent) => child.indexOf(parent) === 0;

const NestedNavLink = ({link, children, isLinkActive, icon, label, location}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (children?.length && isChildOf(location.pathname, link)) {
      setIsOpen(true);
    }
  }, [children?.length, link, location.pathname]);

  return (
    <>
      <ListItem
        button
        component="li"
        onClick={toggleCollapse}
        sx={{
          ...styles.link,
        }}
        to={link}
        disableRipple
      >
        {icon && <ListItemIcon sx={styles.listItemIcon}>{icon}</ListItemIcon>}
        <ListItemText primary={label} />
        {isOpen ? <ExpandLessIcon sx={{...(isLinkActive && styles.linkItemIconActive)}} /> : <ExpandMoreIcon />}
      </ListItem>

      {children && (
        <Collapse component="li" in={isOpen} timeout="auto" unmountOnExit sx={{paddingLeft: 3}}>
          <List component="ul" disablePadding>
            {children.map((childrenLink, index) =>
              !childrenLink.visible ? null : <SideNavLink key={index} location={location} {...childrenLink} />,
            )}
          </List>
        </Collapse>
      )}
    </>
  );
};

NestedNavLink.propTypes = {
  children: PropTypes.array,
  link: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  location: PropTypes.object.isRequired,
  isLinkActive: PropTypes.bool,
};

const SideNavLink = (props) => {
  const {link, icon, label, children, location, type, visible} = props;

  if (!visible) return null;

  const isLinkActive = link && (location.pathname === link || isChildOf(location.pathname, link));

  if (type === 'title')
    return (
      <Typography component="li" sx={styles.title}>
        {label}
      </Typography>
    );

  if (type === 'divider') return <Divider component="li" sx={styles.divider} />;

  if (!children)
    return (
      <Grid component="li" sx={{paddingRight: 1}}>
        <ListItem
          button
          component={link && Link}
          to={link}
          sx={{
            ...styles.link,
            ...(isLinkActive && styles.linkListActive),
          }}
          disableRipple
        >
          {icon && (
            <ListItemIcon sx={{...styles.listItemIcon, ...(isLinkActive && styles.linkItemIconActive)}}>
              {icon}
            </ListItemIcon>
          )}
          <ListItemText
            sx={{
              ...(isLinkActive && styles.linkTextActive),
            }}
            disableTypography
            primary={label}
          />
        </ListItem>
      </Grid>
    );

  return <NestedNavLink {...props} />;
};

SideNavLink.propTypes = {
  children: PropTypes.array,
  link: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  location: PropTypes.object.isRequired,
  type: PropTypes.string,
  visible: PropTypes.bool,
};

export default SideNavLink;
