import Card from '../cards/Index'

export default function Petiscos() {
    return (
        <div>
            <h1 className='text-slate-950 text-5xl mt-6 mb-2 font-semibold text-center' id='petisco'> Petisco </h1>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 md:gap-4 gap-8">
                <Card
                    nome={'Carne Filetada'}
                    descricao={'Bacon - Pão - Carne'}
                    preco={'R$14,99'}
                    imagem={'/batata-frita.jpg'}
                />
            </div>
        </div>
    )
}