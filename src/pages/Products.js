import React from 'react' 
import {ProductList} from '../helpers/ProductList'
import ProductItem from '../components/ProductItem';

function Products() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our Products</h1>
            <div className='menuList'>
                {ProductList.map((productItem, key) => {
                    return (<ProductItem 
                        key={key}
                        image={productItem.image} 
                        name={productItem.name} 
                        price={productItem.price}
                        />);
                })}

            </div>
            
        </div>
    )
}

export default Products;