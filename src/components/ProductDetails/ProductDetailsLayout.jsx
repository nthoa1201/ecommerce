import React from 'react';
import ImageDetails from './ImageDetails.jsx';
import TextDescription from './TextDescription.jsx';

const ProductDetailsLayout = ({children}) => {
    return (
        <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsLayout;