import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router";

export default function AddProduct() {
    const [form , setForm] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stock: "",
    });
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setError("");
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title.trim()) {
            setError("Title is required.");
            return;
        }
        // Strip commas, spaces, /- so formats like "1,49,000/-" work
        const cleanedPrice = String(form.price).replace(/[,\s/-]/g, "");
        if (!cleanedPrice || isNaN(cleanedPrice) || Number(cleanedPrice) <= 0) {
            setError("A valid price is required.");
            return;
        }
        try{
            await api.post("/products/add", { ...form, price: Number(cleanedPrice) });
            alert("Product added successfully!");
            navigate("/admin/products");
        }catch(err){
            console.error("Error adding product:", err);
            setError(err.response?.data?.message || "Failed to add product. Please try again.");
        }
    }

    return(
        <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow rounded">
            <h2 className="text-2xl font-bold mb-6">Add New Product</h2>

            {error && (
                <div className="mb-4 bg-red-50 border border-red-300 text-red-700 text-sm px-4 py-3 rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Price (e.g. 49999)"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded text-gray-700"
                >
                    <option value="">Select Category</option>
                    <option value="Phones">Phones</option>
                    <option value="Laptops">Laptops</option>
                    <option value="TVs">TVs</option>
                    <option value="Tablets">Tablets</option>
                </select>
                <input
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    name="stock"
                    value={form.stock}
                    onChange={handleChange}
                    placeholder="Stock"
                    type="number"
                    min="0"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Add Product
                </button>
            </form>
        </div>
    )
}