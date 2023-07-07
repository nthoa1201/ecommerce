import React from 'react';

const ProductImage = ({image}) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[200px] mx-auto flex justify-center">
                <img
                    className="max-h-[160px] group-hover:scale-110 transition duration-300"
                    src={image}
                    alt=""/>
            </div>
        </div>
    );
};

export default ProductImage;