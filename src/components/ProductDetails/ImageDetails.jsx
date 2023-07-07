import React from 'react';

const ImageDetails = ({image}) => {
    console.log(image)
    return (
        <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
                src={image}
                alt=""
                className="max-w-[200px] lg:max-w-sm"/>
        </div>
    );
};

export default ImageDetails;