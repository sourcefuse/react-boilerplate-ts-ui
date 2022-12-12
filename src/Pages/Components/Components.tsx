import {Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React, {memo} from 'react';
import componentLists from '../Components/ComponentList';

export interface ComponentViewItemInterface {
  imageUrl: string;
  name: string;
  variants: number;
  link: string;
}

const ComponentViewItem: React.FC<ComponentViewItemInterface> = ({link, imageUrl, name, variants}) => {
  return (
    <Grid item xs={3} sx={{my: 1}}>
      <Link href={link} sx={{color: 'text.primary'}} underline="none">
        <Box sx={(theme) => ({background: '#F4F4F4'})}>
          <Box sx={{height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1}}>
            <img src={imageUrl} alt={name} />
          </Box>
        </Box>
        <Typography sx={{fontWeight: 'bold'}}>{name}</Typography>
        <Typography>{variants} Variants</Typography>
      </Link>
    </Grid>
  );
};

const Components = () => {
  return (
    <Grid container spacing={2} sx={{p: 4}}>
      <Grid item xs={6}>
        <Typography variant="h4">
          {' '}
          <b> Components</b>
        </Typography>
        <Typography variant="subtitle2" component="div" sx={{my: 3, color: '#525252'}}>
          The components that are fundamental to RAD are interfaces, objects that implement those interfaces, and the
          namespace in which those objects can be found and operated upon.
        </Typography>
      </Grid>
      <Grid item xs={6} textAlign="center">
        {/* <img src={componentImage} alt="component"> */}
      </Grid>
      {componentLists.map(({name, imageUrl, variants, link}) => {
        return <ComponentViewItem key={name} name={name} imageUrl={imageUrl} variants={variants} link={link} />;
      })}
    </Grid>
  );
};

export default memo(Components);
