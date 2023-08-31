import users from "./users.json";

export const getUsers = async (req, res, next) => {
  res.send(users);
  // next()
}

export const getUser = (req, res, next) => {
  const {userId} = req.params;
  const singleUser = users['data'].find(({id}) => id === +userId);

  if (!singleUser) throw new Error('No such user with the provided id');

  res.send({data: singleUser});
  next();
}

