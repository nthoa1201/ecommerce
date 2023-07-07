import React from 'react';

const TextDescription = ({title, price, description, product, addToCart}) => {
    return (
        <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-xl text-red-500 font-medium mb-6">
                $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
                onClick={() => addToCart(product, product.id)}
                className="bg-primary py-4 px-8 text-white">
                Add to cart
            </button>
        </div>
    );
};

export default TextDescription;