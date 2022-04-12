import { Router } from 'express'
import { create, list } from '../controllers/cart'

const router = Router()

router.post('/carts', create)
router.get('/carts', list)
export default router;
