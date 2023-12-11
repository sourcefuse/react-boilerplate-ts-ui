import StarIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from 'Components/Button/Button';
import PagePaper from 'Components/PagePaper';
import {useNavigate} from 'react-router-dom';

const LIGHT_GREY = 200;
const DARK_GREY = 700;
const tiers = [
  {
    title: 'Free',
    price: 100,
    description: ['10 users included', '2 GB of storage', 'Email support'],
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: 150,
    description: ['20 users included', '10 GB of storage', 'Priority email support'],
  },
  {
    title: 'Enterprise',
    price: 300,
    description: ['50 users included', '30 GB of storage', 'Phone & email support'],
  },
];

function Subscription() {
  const navigate = useNavigate();
  function handleCheckOut(amount: number) {
    navigate('/sourceloop/payment/checkout', {state: {amount, type: 'subscription'}});
  }
  return (
    <PagePaper title="Subscription">
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Our Subscription plans
      </Typography>
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map(tier => (
          <Grid item key={tier.title} xs={12} sm={6} md={4}>
            <Card
              sx={{
                border: theme => (theme.palette.mode === 'light' ? '' : '1px solid'),
              }}
            >
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{align: 'center'}}
                action={tier.title === 'Pro' ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: 'center',
                }}
                sx={{
                  backgroundColor: theme =>
                    theme.palette.mode === 'light' ? theme.palette.grey[LIGHT_GREY] : theme.palette.grey[DARK_GREY],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    ₹ {tier.price}
                  </Typography>
                  <Typography color="text.secondary">/mo</Typography>
                </Box>
                <List dense>
                  {tier.description.map(line => (
                    <ListItem key={line}>
                      <ListItemText sx={{textAlign: 'center'}} primary={line} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleCheckOut(tier.price);
                  }}
                >
                  Subscribe now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </PagePaper>
  );
}

export default Subscription;
