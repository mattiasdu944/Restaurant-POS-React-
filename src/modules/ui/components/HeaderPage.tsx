
interface Props {
    title: string;
    description: string;
}

export const HeaderPage = ({ description, title }: Props) => {
    return (
        <section>
            <div className="container">
                <h1 className='text-2xl'>{ title }</h1>
                <p>{ description }</p>
            </div>
        </section>
    )
}
