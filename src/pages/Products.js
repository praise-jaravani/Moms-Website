import React from 'react' 
import {ProductList} from '../helpers/ProductList'
import ProductItem from '../components/ProductItem';
import "../styles/Product.css";

function Products() {
    return (
        <div className='product'>
            <h1 className='productTitle'>Our Products</h1>
            <div className='productList'>
                {ProductList.map((productItem, key) => {
                    return (
                    <ProductItem 
                        key={key}
                        image={productItem.image} 
                        name={productItem.name} 
                        price={productItem.price}
                        />
                    );
                })}

            </div>
            
        </div>
    )
}

export default Products;