import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"

import { router } from "./config/router"
import { LoadingView } from "./modules/ui"


const App = () => {
    return (
        <Suspense fallback={<LoadingView/>}>
            <RouterProvider router={router}/>
        </Suspense>
    )
}

export default App