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
    <Grid item xs={3}>
      <Link href={link} sx={{color: 'text.primary'}} underline="none">
        <Box sx={(theme) => ({background: '#f1f5f7'})}>
          <Box sx={{height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">All components</Typography>
      </Grid>
      {componentLists.map(({name, imageUrl, variants, link}) => {
        return <ComponentViewItem key={name} name={name} imageUrl={imageUrl} variants={variants} link={link} />;
      })}
    </Grid>
  );
};

export default memo(Components);
