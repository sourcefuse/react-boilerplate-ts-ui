import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, {memo} from 'react';
import {Link} from 'react-router-dom';

interface Props {
  title: string;
  items: Array<{name: string; to: string}>;
}

const Category: React.FC<Props> = ({items = [], title}) => (
  <Grid item xs={12} sm={12} md={6} lg={3} sx={{marginTop: 2}}>
    <Typography variant="h6">{title}</Typography>
    <Stack>
      {items.map(({name, to}, index) => (
        <Box
          component={Link}
          key={`${title}-item-${index}`}
          to={to}
          sx={{textDecoration: 'none', color: 'primary.main', fontWeight: 'bold', textTransform: 'capitalize'}}
        >
          {name}
        </Box>
      ))}
    </Stack>
  </Grid>
);

const componentList = [
  {
    title: 'Inputs',
    items: [
      {name: 'Input', to: '/components/input'},
      {name: 'Transfer List', to: '/components/transfer-list'},
      {name: 'Dropdown/Autocomplete', to: '/components/dropdown-autocomplete'},
      {name: 'Radio Button', to: '/components/radio-button'},
      {name: 'Form', to: '/components/form'},
      {name: 'Checkbox', to: '/components/checkbox'},
      {name: 'Button', to: '/components/button'},
      {name: 'Stepper Tab', to: '/components/stepper-tab'},
      {name: 'DatePicker', to: '/components/date-picker'},
    ],
  },
  {
    title: 'Data',
    items: [{name: 'API call', to: '/components/api-call'}],
  },
];

const Components = () => {
  return (
    <Grid container sx={{paddingX: 10}} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">All components</Typography>
      </Grid>
      {componentList.map(({title, items}, index) => (
        <Category title={title} key={`category-${index}`} items={items} />
      ))}
    </Grid>
  );
};

export default memo(Components);
