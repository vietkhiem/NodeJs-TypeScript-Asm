import { Router } from "express";
import { list, post, read, remove, update } from "../controllers/category";
import { userById } from "../controllers/user";
import { checkAuth, isAuth, isAdmin, requireSignin } from "../middlewares/checkAuth";
const router = Router();

router.get('/categorys', checkAuth, list)
router.get('/categorys/:id', checkAuth, read)
router.post('/categorys/:userId', requireSignin, isAuth, isAdmin, post)
router.put('/categorys/:userId/:id', checkAuth, update)
router.delete('/categorys/:userId/:id', checkAuth, remove)
router.param('userId', userById)
export default router;