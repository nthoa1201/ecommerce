import React from 'react';
import {BsEyeFill, BsPlus} from 'react-icons/bs';
import {Link} from 'react-router-dom';

const ProductBtn = ({products, id, addToCart}) => {
    return (
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(products, id)}>
                <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                    <BsPlus className="text-3xl"/>
                </div>
            </button>
            <Link
                to={`/product/${id}`}
                className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
                <BsEyeFill/>
            </Link>
        </div>
    );
};

export default ProductBtn;