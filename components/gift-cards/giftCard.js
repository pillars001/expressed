import express from 'express'
import {getGiftCards, getGiftCard} from "./giftCardController";

const router = express.Router();

// Get all Gift Card
router.get('/compressed', (req, res, next) => {
  const payload = 'Faster apps use lesser bandwidth too!!! '
  res.send(`${payload.repeat(1000000)}`)
});
router.get('/gift-cards', getGiftCards);
router.get('/product/:giftCardId', getGiftCard);

export default router;