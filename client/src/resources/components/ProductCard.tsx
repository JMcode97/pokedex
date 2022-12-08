import { ProductsCard } from "../types";

export default function ProductCard ({ title, price, img }: ProductsCard) {
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
            className="m-3 p-2 text-slate-200 bg-teal-500 border border-slate-200 hover:bg-teal-600 hover:scale-[1.03] transition-all" >
            ADD TO CART
            </button>
            </div>
        </>
    )
}