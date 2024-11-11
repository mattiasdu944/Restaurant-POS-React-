
import { Button } from '@nextui-org/react'
import { categories } from '../../../data'

export const CategoryMenu = () => {



    return (
        <section>
            <div className="container">
                <ul className='flex items-center gap-4'>
                    {
                        categories.map(category => (
                            <Button as='li' className='px-4 text-lg' variant='flat' radius='lg' >
                                {category.name}
                            </Button>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
