import App from "../pages/App"
import Product from "../pages/Product"
import Shop from "../pages/Shop"

const routes = [
    {
        path: '/',
        element: <App />,
        // errorElement: <ErrorPage />
    },
    {
        path: 'shop',
        element: <Shop />
    },
    {
        path: 'product/:id',
        element: <Product />
    }
]

export default routes