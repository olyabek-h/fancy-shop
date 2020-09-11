import React, { useEffect } from 'react'
import styles from './products.module.scss'
import Product from '../components/product'
import { reducer, INIT_STATE } from '../stateManager/reducer'
import { loadingInitData } from '../stateManager/actionCreator'
import useThunkReducer from 'react-hook-thunk-reducer'

export default function Products() {
    const [{ products, loading }, dispatch] = useThunkReducer(reducer, INIT_STATE);

    useEffect(() => {
        dispatch(loadingInitData());
    }, [dispatch])

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
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}