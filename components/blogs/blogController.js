export const getBlogs = (req, res, next) => {
  res.send({message: 'Welcome to my blog'});
  next()
}