import { useState } from "react";

function Form(props) {
    const [product, setProduct] = useState(props.data || { name: "", price: "", category: "" });
    const [submitted, setSubmitted] = useState(false);

    let changeFormData = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    return (
        <div className="form-overlay">
            <form>
                <h4 className="text-center">Add Product</h4>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control mt-2" value={product.name} type="text" name="name"
                        placeholder="Enter Name" onChange={changeFormData} />
                    {submitted && product.name.length < 5 && <span className="text-danger">Product name must be at least 5 characters</span>}
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input className="form-control mt-2" value={product.price} type="number" name="price"
                        placeholder="Enter Price" onChange={changeFormData} />
                    {submitted && product.price === "" && <span className="text-danger">Product price is required</span>}
                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <select className="form-control mt-2" name="category" value={product.category} onChange={changeFormData}>
                        <option value='-1'></option>
                        <option value="mobiles">Mobiles</option>
                        <option value="laptops">Laptops</option>
                        <option value="tv">TVs</option>
                    </select>
                    {submitted && product.category === "" && <span className="text-danger">Product category is required</span>}
                </div>

                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-danger" onClick={(e) => { e.preventDefault(); props.closeForm(); }}>Cancel</button>
                    <button className="btn btn-primary" onClick={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                        if (product.name && product.price && product.category) {
                            props.addProduct(product);
                        }
                    }}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
