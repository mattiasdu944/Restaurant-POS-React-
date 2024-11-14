import { Button } from '@nextui-org/react'

export const OrderFilters = () => {

    const orderFilter = [
        {name: "En proceso", value: "pending"},
        {name: "Completados", value: "complete"}
    ]

    return (
        <section>
            <div className="container">
                <ul className='flex items-center gap-4'>
                    {
                        orderFilter.map(filter => (
                            <Button key={filter.value} as='li' className='px-4 text-lg' variant='flat' radius='lg' >
                                {filter.name}
                            </Button>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
