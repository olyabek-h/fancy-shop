import Products from '../pages/products'
import Detail from '../pages/detail'

export const ROUTES = [
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/',
        component: Products,
    },
    {
        path: '/detail',
        component: Detail
    }
]