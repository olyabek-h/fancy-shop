import React, { useEffect } from 'react'
import styles from './productDetail.module.scss'
import { useParams } from 'react-router-dom'
import { useAppState } from '../context/appStateContext';
import { useDispatch } from '../context/dispatchContext';
import { loadingInitData } from '../stateManager/actionCreator';

export default function ProductDetail() {
    const { id } = useParams();
    const { products } = useAppState();
    const dispatch = useDispatch();
    const { title, image, price, detail } = products.find(product => product.id === id);

    // useEffect(() => {
    //     dispatch(loadingInitData());
    // }, [dispatch])

    return (
        <div className={styles['product-detail']} >
            <div className={styles['img-container']}>
                <img src={image} alt={title} />
            </div>
            <div >
                <h2>{title}</h2>
                <h4> Price: {price}</h4>
                <p>{detail}</p>
            </div>
        </div>
    )
}