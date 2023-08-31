import products from "./products.json";

export const getProducts = (req, res, next) => {
  res.send(products);
  next()
}

export const getProduct = (req, res, next) => {
  const {productId} = req.params;
  const singleProduct = products['data'].find(({id}) => id === +productId);

  if (!singleProduct) throw new Error('No such user with the provided id');

  res.send({data: singleProduct});
  next();
}

