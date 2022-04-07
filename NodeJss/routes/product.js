import { Router } from "express";
import { list, post, read, remove, search, update } from "../controllers/product";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/products', checkAuth, list)
router.get('/products/:id', checkAuth, read)
router.post('/products/:userId', requireSignin, isAuth, isAdmin, post)
router.put('/products/:userId/:id', checkAuth, update)
router.delete('/products/:userId/:id', checkAuth, remove)
router.post("/search", search)
router.param('userId', userById)
export default router;