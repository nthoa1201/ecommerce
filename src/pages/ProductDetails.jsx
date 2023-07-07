import React, {useContext} from 'react';

import {useParams} from 'react-router-dom';

import {CartContext} from '../contexts/CartContext.jsx';
import {ProductContext} from '../contexts/ProductContext.jsx';
import ImageDetails from '../components/ProductDetails/ImageDetails.jsx';
import TextDescription from '../components/ProductDetails/TextDescription.jsx';
import ProductDetailsLayout from '../components/ProductDetails/ProductDetailsLayout.jsx';

const ProductDetails = () => {
    const {id} = useParams()

    const {products} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)

    const product = products.find(item => item.id === parseInt(id))

    // if product is not found
    if (!product) {
        return (
            <section className="h-screen flex justify-center items-center">
                Loading...
            </section>
        )
    }

    const {title, price, description, image} = product
    return (
        <ProductDetailsLayout>
            {/*img*/}
            <ImageDetails image={image}/>
            {/*text*/}
            <TextDescription
                title={title}
                price={price}
                description={description}
                product={product}
                addToCart={() => addToCart(product, product.id)}/>
        </ProductDetailsLayout>
    );
};

export default ProductDetails;