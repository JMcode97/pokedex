import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductsCard } from "../types";

export default function ProductCard ({ id, title, price, img, load }: ProductsCard) {
    
    const api = 'https://e-commerce-api-du7d.onrender.com';

    const navigate = useNavigate();

    const removeProduct = async () => {
        await axios.delete(api + '/products/' + id);
        load();
        toast.success('Product has been deleted successfully');
    }

    return (
        <>
            <div
            className="w-full flex flex-col border border-slate-200 hover:border-slate-400 transition-all cursor-pointer" >
            <img 
            src={img}
            alt='Product' />
            <div
            className="flex justify-between mx-3" >
            <h1
            className="text-center text-2xl uppercase" >
            { title.substring(0, 10) + '...' }
            </h1>
            <span
            className="text-2xl" >
            { price }
            </span>
            </div>
            <button
            onClick={() => navigate('/update-product/' + id)}
            className="m-3 p-2 text-slate-200 bg-teal-500 border border-slate-200 hover:bg-teal-600 hover:scale-[1.03] transition-all" >
            VIEW
            </button>
            <button
            onClick={removeProduct}
            className="mt-0 m-3 p-2 text-slate-200 bg-red-500 border border-slate-200 hover:bg-red-600 hover:scale-[1.03] transition-all" >
            DELETE
            </button>
            </div>
        </>
    )
}