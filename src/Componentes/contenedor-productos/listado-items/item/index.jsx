import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item =({data})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={data.tittle}
        height="240"
        image= {data.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.tittle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            ${data.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mas</Button>
      </CardActions>
    </Card>
  );
}

export default Item;