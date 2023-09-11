import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import colorScheme from 'Assets/circle-frame.png';
import leftComponent from 'Assets/component-left.png';
import bannerImage from 'Assets/home-banner.png';
import iconGraphy from 'Assets/iconography.png';
import typography from 'Assets/typography.png';
import widgetImage from 'Assets/widget-img.png';
import DeviceWidthProvider from 'Providers/DeviceWidthProvider';
import {Link} from 'react-router-dom';
const border = '1px solid  #D9D9D9;';

const Home = () => {
  return (
    <Grid container spacing={2} sx={{px: 4}} data-testid="HomePage">
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          height: '425px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: border,
        }}
      >
        <Box>
          <Typography variant="h4">
            <b> ARC by SourceFuse </b>
          </Typography>
          <Typography variant="h4">
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
      <DeviceWidthProvider breakpoint="md">
        <Grid item xs={false} md={7} textAlign="center" sx={{borderBottom: border}}>
          <img src={bannerImage} alt="azure" />
        </Grid>
      </DeviceWidthProvider>
      <Grid item xs={12} sm={6}>
        <Grid container sx={{px: 1, py: 4, border, mb: 2, mt: 1, background: '#F7F7F7', borderRadius: 1}}>
          <Grid item xs={12}>
            <img src={leftComponent} alt="components" width="100%" />
          </Grid>
          <Grid item xs={12} sx={{pl: 2, pr: 2, pt: 3}}>
            <Typography variant="h6">
              <b> Components </b>
            </Typography>
            <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
              The components that are fundamental to RAD are interfaces, objects that implement those interfaces.
            </Typography>
            <Link to="/components">Explore Now</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container sx={{px: 2, py: 4, border, mb: 3, mt: 1, background: '#F7F7F7', borderRadius: 1}}>
          <Grid item xs={12} sx={{py: 1, mt: 1}}>
            <img src={widgetImage} alt="components" width="100%" />
          </Grid>
          <Grid item xs={12} sx={{pl: 1, pr: 2, pt: 1}}>
            <Typography variant="h6">
              <b> Widgets </b>
            </Typography>
            <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
              Widgets are simple, easy-to-use software applications intended for one or more platforms. Widgets can
              easily be embedded into the body of a wesite or app.
            </Typography>
            <Link to="#">Explore Now</Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{pb: 2}}>
        <Grid
          item
          xs={12}
          sx={{
            borderTop: border,
          }}
        >
          <Box sx={{mt: 4, pl: 2}}>
            <Typography variant="h5">
              <b> Foundations</b>
            </Typography>
            <Typography variant="subtitle2" component="div" sx={{mt: 2, color: '#525252'}}>
              The components that are fundamental to RAD are interfaces, objects that implement
            </Typography>
            <Typography variant="subtitle2" component="div">
              those interfaces.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{py: 1}}>
        <Grid item xs={12} sm={4}>
          <Grid
            container
            sx={{
              px: 1,
              py: 4,
              mt: 2,
              mb: 4,
              background: '#F7F7F7',
            }}
          >
            <Grid item xs={12} sx={{pl: 3, pr: 2, pt: 2}}>
              <img src={colorScheme} alt="components" width="100%" />
            </Grid>
            <Grid item xs={12} sx={{px: 2}}>
              <Typography variant="h6">
                <b> Color Scheme </b>
              </Typography>
              <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
                The components that are fundamental to RAD are interfaces,
              </Typography>
              <Link to="#">Explore Now</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} sx={{px: 2}}>
          <Grid
            container
            sx={{
              px: 3,
              py: 4,
              borderBottom: '1px solid #EDEDED',
              mt: 2,
              mb: 4,
              background: '#F7F7F7',
            }}
          >
            <Grid item xs={12} sx={{pl: 3, pr: 2, pt: 1}}>
              <img src={iconGraphy} alt="components" width="100%" />
            </Grid>
            <Grid item xs={12} sx={{px: 2}}>
              <Typography variant="h6">
                <b> Iconography </b>
              </Typography>
              <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
                The components that are fundamental to RAD are interfaces,
              </Typography>
              <Link to="#">Explore Now</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Grid
            container
            sx={{
              px: 1,
              py: 4,
              borderBottom: '1px solid #EDEDED',
              mt: 2,
              mb: 4,
              background: '#F7F7F7',
            }}
          >
            <Grid item xs={12} sx={{pl: 3, pr: 2, pt: 2}}>
              <img src={typography} alt="components" width="100%" />
            </Grid>
            <Grid item xs={12} sx={{px: 2}}>
              <Typography variant="h6">
                <b> Typography </b>
              </Typography>
              <Typography variant="subtitle2" component="div" sx={{my: 2, color: '#525252'}}>
                The components that are fundamental to RAD are interfaces,
              </Typography>
              <Link to="#">Explore Now</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
