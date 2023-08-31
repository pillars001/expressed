import giftCard from "./giftCard.json";

export const getGiftCards = (req, res, next) => {
  res.send(giftCard);
  next()
}

export const getGiftCard = (req, res, next) => {
  const {getGiftCardId} = req.params;
  const singleGiftCard = giftCard['data'].find(({id}) => id === +getGiftCardId);

  if (!singleGiftCard) throw new Error('No Gift Card with the provided id');

  res.send({data: singleGiftCard});
  next();
}

