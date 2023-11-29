import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from 'Components/Button/Button';
import PagePaper from 'Components/PagePaper';
import {useNavigate} from 'react-router-dom';

const Order = () => {
  const DECIMAL_PLACES = 2;
  const navigate = useNavigate();
  function handleCheckOut(amount: number) {
    navigate('/sourceloop/payment/checkout', {state: {amount, type: 'orders'}});
  }

  const dummyDescription =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi,veritatis';

  const productList = [
    {
      name: 'Shoes',
      imageUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg',
      description: dummyDescription,
      price: 2999,
    },
    {
      name: 'Jeans',
      imageUrl: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg',
      description: dummyDescription,
      price: 1999,
    },
    {
      name: 'Shorts',
      imageUrl: 'https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg',
      description: dummyDescription,
      price: 999,
    },
  ];
  /* sonar ignore start */
  return (
    <PagePaper title="Order">
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Our Bestsellers
      </Typography>
      <Grid container spacing={2}>
        {productList.map((product, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={product?.imageUrl}>
              <Card>
                <CardMedia component="img" height="200" image={product?.imageUrl} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product?.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Typography>₹ {product?.price.toFixed(DECIMAL_PLACES)}</Typography>
                  <Button
                    size="small"
                    onClick={() => {
                      handleCheckOut(productList[index]?.price);
                    }}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </PagePaper>
  );
};

export default Order;
/* sonar ignore end */
