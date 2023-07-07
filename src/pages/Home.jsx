import React, {useContext} from 'react';

// import product context
import {ProductContext} from '../contexts/ProductContext.jsx';
import Product from '../components/Product.jsx';
import Hero from '../components/Hero.jsx';


const Home = () => {
    // get products from product context
    const {products} = useContext(ProductContext)
    // //get only men's & women's clothing category
    const filteredProducts = products ? products.filter(item => {
        return item.category === "men's clothing" || item.category === "women's clothing"
    }) : []


    return (
        <div>
            <Hero/>
            <section className="py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">

                        {filteredProducts.map(products => {
                            return (
                                    <Product key={products.id} products={products}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;