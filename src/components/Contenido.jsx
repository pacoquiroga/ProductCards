import React from 'react';
import ProductCard from './ProductCard';
import Prueba from './Prueba';

const productos = [
    {
        name: 'Laptop HP',
        description: 'Laptop HP, intel core i7, 72 pulgadas',
        price: 700.50,
        image: 'https://png.pngtree.com/png-vector/20240206/ourmid/pngtree-a-hp-laptop-white-background-png-image_11716648.png'
    },
    {
        name: 'Play Station 5',
        description: 'Play Station 5, 1TB, 4K, HDR, 120fps',
        price: 1000.50,
        image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$'
    }
];

const Contenido = () => {
    return (
        <div className='flex-grow flex justify-center items-center bg-gray-100'>
           
            {productos.map((producto, index) => (
                <ProductCard
                    key={index}
                    name={producto.name}
                    description={producto.description}
                    price={producto.price}
                    image={producto.image}
                />
            ))}
        </div>
    );
}

export default Contenido;
