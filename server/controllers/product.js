import Product from "../models/product";
export const list = async(req, res) => {
        try {
            const ListProducts = await Product.find();
            res.json(ListProducts);
        } catch (error) {
            res.status(400).json({
                message: "Không tìm được sản phẩm anh eiii"
            })
        }

    }
    // thêm sản phẩm
export const post = async(req, res) => {
        try {
            const product = await new Product(req.body).save();
            res.json(product);
        } catch (error) {
            res.status(400).json({
                message: "Không thêm được sản phẩm"
            })
        }

    }
    //update 
export const update = async(req, res) => {
        try {
            const UpdateProduct = await Product.findByIdAndUpdate(req.params.id, req.body)
            res.json(UpdateProduct);
        } catch (error) {
            res.status(400).json({
                message: "Không tìm được sản phẩm anh eiii"
            })
        }

    }
    //
export const read = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}
export const remove = async(req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.id)
        res.json(removeProduct);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm anh eiii"
        })
    }

}
export const search = async(req, res) => {
    console.log(req.query);
    const searchString = req.query.q ? req.query.q : "";

    const result = await Product.find({ $text: { $search: searchString } }).exec();
    res.json(result)
}