import React, { useEffect } from 'react'
import styles from './products.module.scss'
import Product from '../components/product'
import { loadingInitData, addedToCart } from '../stateManager/actionCreator'
import { useDispatch } from '../context/dispatchContext'
import { useAppState } from '../context/appStateContext'

export default function Products() {
    const dispatch = useDispatch();
    const { products, loading } = useAppState();

    useEffect(() => {
        dispatch(loadingInitData());
    }, [dispatch])

    function handleProductClick(productId) {
        console.log('product', productId);
    }

    function handleAddToCard(productId, productPrice, e) {
        e.stopPropagation();
        dispatch(addedToCart(productId, productPrice));
    }

    return (
        <div>
            <div>
                {/* <h1>HERO IMAGE</h1>
                <img src="/images/hero-bcg.jpeg" /> */}
            </div>

            <div>
                <h1>Our Products</h1>
                <div>
                    {loading ? <p>please wait...</p> :
                        products.map(product =>
                            <Product
                                key={product.id}
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
        </div>
    )
}