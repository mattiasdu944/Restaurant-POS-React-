import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { RootLayout } from "../modules/ui/layouts/RootLayout";
import { NotFoundView } from "../modules/ui";

const MenuPage = lazy(() => import("../modules/menu/pages/MenuPage"));

// export const routes = [
//     {
//         Component: loginPage,
//         name:"login",
//         path: "/auth/login",
//         to: ""
//     }
// ]


export const rootRoutes: RouteObject =  {
    path: "/admin",
    element: <RootLayout/>,
    errorElement: <NotFoundView/>,
    children: [
        {
            path: 'menu',
            Component: MenuPage,
        }
    ]
}
