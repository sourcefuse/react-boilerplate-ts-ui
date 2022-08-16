import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import React from 'react';
import {Link} from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import routes from './breadcrumbConfig';

const styles = {
  breadcrumb: {
    fontSize: 12,
    textTransform: 'capitalize',
  },
  linkBreadcrumb: {
    textDecoration: 'none',
    color: 'primary.main',
    fontWeight: 'bold',
  },
};

export default function Breadcrumb(): JSX.Element {
  const breadcrumbs = useBreadcrumbs(routes, {disableDefaults: true});

  return (
    <MuiBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {breadcrumbs.map(({match, breadcrumb}, index) => (
        <Grid key={index}>
          {breadcrumbs.length - 1 === index ? (
            <Grid
              key={match?.pathname}
              sx={{
                ...styles.breadcrumb,
              }}
            >
              {breadcrumb}
            </Grid>
          ) : (
            <Grid
              component={Link}
              sx={{
                ...styles.breadcrumb,
                ...styles.linkBreadcrumb,
              }}
              to={match?.pathname}
            >
              {breadcrumb}
            </Grid>
          )}
        </Grid>
      ))}
    </MuiBreadcrumbs>
  );
}
