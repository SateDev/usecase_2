import express from 'express';
import { mintToken } from '../service/car_token';


const router = express.Router({ mergeParams: true });

router.post('/mint', async (req, res, next) => {
  try {
    const { to,tokenURI} = req.body;
    const data = await mintToken(to,tokenURI);
    res.json({
      success: true,
      message: 'minted',
      data
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
});





export default router;