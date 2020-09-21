import React, { useEffect } from 'react'
import styles from './products.module.scss'
import Product from '../components/product'
import { loadingInitData, addedToCart } from '../stateManager/actionCreator'
import { useDispatch } from '../context/dispatchContext'
import { useAppState } from '../context/appStateContext'
import { useHistory } from 'react-router-dom'

export default function Products() {
    const dispatch = useDispatch();
    const { products, loading } = useAppState();
    const history = useHistory();

    useEffect(() => {
        dispatch(loadingInitData());
    }, [dispatch])

    function handleProductClick(productId) {
        console.log('product', productId);
        history.push(`/detail/${productId}`);
    }

    function handleAddToCard(productId, productPrice, e) {
        e.stopPropagation();
        dispatch(addedToCart(productId, productPrice));
    }

    return (
        <div className={styles['products']} >
            <div className={styles['section-title']} >
                <h2>Our Products</h2>
            </div>
            <div className={styles['products-center']} >
                {loading ? <p>please wait...</p> :
                    products.map(product =>
                        <Product
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            detail={product.detail}
                            onAddToCart={(e) => handleAddToCard(product.id, product.price, e)}
                            onProductClick={() => handleProductClick(product.id)}
                        />
                    )
                }
            </div>
        </div>
    )
}