import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import colorScheme from 'Images/circle-frame.png';
import leftComponent from 'Images/component-left.png';
import bannerImage from 'Images/home-banner.png';
import iconGraphy from 'Images/iconography.png';
import typography from 'Images/typography.png';
import widgetImage from 'Images/widget-img.png';
import React from 'react';

const Home = () => {
  return (
    <Grid container spacing={2} sx={{px: 4}}>
      <Grid
        item
        xs={6}
        sx={{
          height: '425px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: 1,
          borderColor: 'grey.500',
        }}
      >
        <Box>
          <Typography variant="h4">
            {' '}
            <b> ARC by SourceFuse </b>
          </Typography>
          <Typography variant="h4">
            {' '}
            <b> Rapid Application Development </b>
          </Typography>
          <Typography variant="subtitle2" component="div" sx={{mt: 2}}>
            Reduce Development Time to Market
          </Typography>
          <Typography variant="subtitle2" component="div">
            with Pre-Built Catalog of Services for Large Enterprises
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        textAlign="center"
        sx={{
          borderBottom: 1,
          borderColor: 'grey.500',
        }}
      >
        <img src={bannerImage} alt="azure" />
      </Grid>
      <Grid
        item
        sx={{
          borderBottom: 1,
          borderColor: 'grey.500',
        }}
        xs={6}
      >
        <Grid
          container
          sx={{px: 1, py: 4, border: 1, borderColor: 'grey.500', mt: 2, mb: 4, background: '#F7F7F7', borderRadius: 1}}
        >
          <Grid item xs={7}>
            <img src={leftComponent} alt="components" />
          </Grid>
          <Grid item xs={5} sx={{pl: 3, pr: 2, pt: 5}}>
            <Typography variant="h5">
              {' '}
              <b> Components </b>
            </Typography>
            <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
              The components that are fundamental to RAD are interfaces, objects that implement those interfaces.
            </Typography>
            <Link href="#">Explore Now</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          borderBottom: 1,
          borderColor: 'grey.500',
        }}
        xs={6}
      >
        <Grid
          container
          sx={{px: 1, py: 4, border: 1, borderColor: 'grey.500', mt: 2, mb: 4, background: '#F7F7F7', borderRadius: 1}}
        >
          <Grid item xs={7} sx={{py: 1, mt: 1}}>
            <img src={widgetImage} alt="components" />
          </Grid>
          <Grid item xs={5} sx={{pl: 3, pr: 2, pt: 5}}>
            <Typography variant="h5">
              {' '}
              <b> Widgets </b>
            </Typography>
            <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
              Widgets are simple, easy-to-use software applications intended for one or more platforms. Widgets can
              easily be embedded into the body of a wesite or app.
            </Typography>
            <Link href="#">Explore Now</Link>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{mt: 4, pl: 2}}>
        <Typography variant="h5">
          {' '}
          <b> Foundations</b>
        </Typography>
        <Typography variant="subtitle2" component="div" sx={{mt: 2, color: '#525252'}}>
          The components that are fundamental to RAD are interfaces, objects that implement
        </Typography>
        <Typography variant="subtitle2" component="div">
          those interfaces.
        </Typography>
      </Box>
      <Grid container sx={{py: 1}}>
        <Grid item xs={4}>
          <Grid
            container
            sx={{
              px: 1,
              py: 4,
              border: 1,
              borderColor: 'grey.500',
              mt: 2,
              mb: 4,
              background: '#F7F7F7',
              borderRadius: 1,
            }}
          >
            <Grid item xs={7} sx={{pl: 3, pr: 2}}>
              <Typography variant="h5">
                {' '}
                <b> Color Scheme </b>
              </Typography>
              <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
                The components that are fundamental to RAD are interfaces,
              </Typography>
              <Link href="#">Explore Now</Link>
            </Grid>
            <Grid item xs={5} sx={{pl: 3, pr: 2, pt: 2}}>
              <img src={colorScheme} alt="components" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            sx={{
              px: 1,
              py: 4,
              border: 1,
              borderColor: 'grey.500',
              mt: 2,
              mb: 4,
              background: '#F7F7F7',
              borderRadius: 1,
            }}
          >
            <Grid item xs={7} sx={{pl: 3, pr: 2}}>
              <Typography variant="h5">
                {' '}
                <b> Iconography </b>
              </Typography>
              <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
                The components that are fundamental to RAD are interfaces,
              </Typography>
              <Link href="#">Explore Now</Link>
            </Grid>
            <Grid item xs={5} sx={{pl: 3, pr: 2, pt: 1}}>
              <img src={iconGraphy} alt="components" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            sx={{
              px: 1,
              py: 4,
              border: 1,
              borderColor: 'grey.500',
              mt: 2,
              mb: 4,
              background: '#F7F7F7',
              borderRadius: 1,
            }}
          >
            <Grid item xs={7} sx={{pl: 3, pr: 2}}>
              <Typography variant="h5">
                {' '}
                <b> Typography </b>
              </Typography>
              <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
                The components that are fundamental to RAD are interfaces,
              </Typography>
              <Link href="#">Explore Now</Link>
            </Grid>
            <Grid item xs={5} sx={{pl: 3, pr: 2, pt: 2}}>
              <img src={typography} alt="components" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
