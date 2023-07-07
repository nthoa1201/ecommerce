import React, {useContext} from 'react';

import {CartContext} from '../../contexts/CartContext.jsx';
import ProductImage from './ProductImage.jsx';
import ProductBtn from './ProductBtn.jsx';
import ProductText from './ProductText.jsx';

const Product = ({products}) => {
    const {addToCart} = useContext(CartContext)

    const {id, image, category, title, price} = products

    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                {/*image*/}
                <ProductImage image={image}/>
                {/*button*/}
                <ProductBtn
                    products={products}
                    id={id}
                    addToCart={addToCart}/>
            </div>
            {/*category & title & price*/}
            <ProductText
                category={category}
                id={id}
                title={title}
                price={price}/>

        </div>
    );
};

export default Product;