import React from 'react';
import {Link} from 'react-router-dom';

const ProductText = ({category, id, title, price}) => {
    return (
        <div>
            <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
            <Link to={`/product/${id}`}>
                <h2 className="font-semibold mb-1">{title}</h2>
            </Link>
            <h2 className="font-semibold">$ {price}</h2>
        </div>
    );
};

export default ProductText;