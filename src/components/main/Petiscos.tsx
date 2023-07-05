import Card from '../cards/Index'

export default function Petiscos() {
    return (
        <div>
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