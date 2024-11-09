import { ErrorResponse, isRouteErrorResponse, useRouteError } from 'react-router-dom'


export const NotFoundView = () => {

    const error = useRouteError() as ErrorResponse;
    
    // console.log({ error });

    switch (isRouteErrorResponse(error)) {
        case error.status === 404:
            return (
                <section className='notFound-view'>
                    <h1>404</h1>
                    <h2>No se encontro la pagina</h2>
                </section>
            )

    }

    return (
        <section>
            <h2>Error</h2>
        </section>
    )
}
