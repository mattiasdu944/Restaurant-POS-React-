import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { RootLayout } from "../modules/ui/layouts/RootLayout";
import { NotFoundView } from "../modules/ui";

const ProductsPage = lazy(() => import("../modules/products/pages/MenuPage"));
const OrdersPage = lazy(() => import("../modules/orders/pages/OrdersPage"));

export const rootRoutes: RouteObject =  {
    path: "/admin",
    element: <RootLayout/>,
    errorElement: <NotFoundView/>,
    children: [
        {
            path: 'menu',
            Component: ProductsPage,
        },
        {
            path: 'orders',
            Component: OrdersPage
        }
    ]
}
