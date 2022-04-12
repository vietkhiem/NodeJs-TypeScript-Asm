import Category from "../models/category";
import Product from "../models/product";
export const list = async(req, res) => {
        try {
            const ListCategory = await Category.find();
            res.json(ListCategory);
        } catch (error) {
            res.status(400).json({
                message: "Không tìm được sản phẩm anh eiii"
            })
        }

    }
    // thêm sản phẩm
export const post = async(req, res) => {
        try {
            const category = await new Category(req.body).save();
            res.json(category);
        } catch (error) {
            res.status(400).json({
                message: "Không thêm được sản phẩm"
            })
        }

    }
    //update 
export const update = async(req, res) => {
        try {
            const UpdateCategory = await Category.findByIdAndUpdate(req.params.id, req.body)
            res.json(UpdateCategory);
        } catch (error) {
            res.status(400).json({
                message: "Không tìm được sản phẩm anh eiii"
            })
        }

    }
    //
export const read = async(req, res) => {
    const condition = { _id: req.params.id }
    try {
        const category = await Category.findOne(condition).exec();
        const products = await Product.find({ category }).select("-category").exec();
        res.json({
            category,
            products
        })
    } catch (error) {

    }
}
export const remove = async(req, res) => {
    try {
        const removeCategory = await Category.findByIdAndDelete(req.params.id)
        res.json(removeCategory);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}