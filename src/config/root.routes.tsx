import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { RootLayout } from "../modules/ui/layouts/RootLayout";
import { NotFoundView } from "../modules/ui";

const ProductsPage = lazy(() => import("../modules/products/pages/MenuPage"));

export const rootRoutes: RouteObject =  {
    path: "/admin",
    element: <RootLayout/>,
    errorElement: <NotFoundView/>,
    children: [
        {
            path: 'menu',
            Component: ProductsPage,
        }
    ]
}
