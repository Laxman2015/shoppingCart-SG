import React from 'react';
import styles from './Home.module.scss';
import { formatNumber } from '../../utility';
import { addProduct, increase } from '../../actions/productActions';
import { useDispatch } from 'react-redux';
import { Star } from '../../iconComponent';

const StoreItems = ({product, cartItems}) => {

    const dispatch = useDispatch();

    const isInCart = product => {
        return cartItems.some(item => item.id === product.id);
    }

    const starRender = num => {
        let rating = []
        for(let i=0; i<num; i++){
          rating.push(<Star width={"12px"}/>)
        } 
        return rating;
    }

    return ( 
        <div className={styles.card}>
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid" 
            src={product.url + '?v=' + product.id} alt=""/>
            <p>{product.name}</p>
            <span>Rating: {starRender(product.star)}</span>
            <h3 className="text-left">Price: {formatNumber(product.price)}</h3>
            <div className={styles.cardText}>
                {
                    isInCart(product) && 
                    <button 
                    onClick={() => dispatch(increase(product))}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(product) && 
                    <button 
                    onClick={() => dispatch(addProduct(product))}
                    className="btn btn-primary btn-sm">Add to cart</button>
                }
                
            </div>
        </div>
     );
}

export default StoreItems