import express from 'express';
import bodyParser from "body-parser";
import compression from 'compression'
import blogsRoute from './components/blogs/blog';
import usersRoute from './components/users/user';
import productsRoute from './components/products/products';
import giftCardsRoute from './components/gift-cards/giftCard';

const app = express();
app.use(bodyParser.json());
app.use(compression());

app.use(blogsRoute);
app.use(usersRoute);
app.use(productsRoute);
app.use(giftCardsRoute);

app.all('*', (req, res) => {
  res.status(404).json({message: 'The end of the road!!! 🤪'});
})

export default app;