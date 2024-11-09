
import { CircularProgress } from '@nextui-org/react'

export const LoadingView = () => {
    return (
        <section className='loading-view'>
            <CircularProgress size='md'/>
            <p>Cargando...</p>
        </section>
    )
}
