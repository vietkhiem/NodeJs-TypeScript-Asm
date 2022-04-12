import Cart from '../models/cart'
export const create = async (req, res) => {
  try {
    const cart = await new Cart(req.body).save()
    return res.status(200).json(cart)
  } catch (error) {
    return res.status(400).json({
      message: 'Có lỗi xảy ra',
    })
  }
}
export const list = async (req, res) => {
  try {
    const carts = await Cart.find().exec()
    return res.status(200).json(carts)
  } catch (error) {
    return res.status(400).json({
      message: 'Có lỗi xảy ra',
    })
  }
}
