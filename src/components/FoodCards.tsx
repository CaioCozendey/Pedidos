import Image from "next/image";

export default function FoodCards() {
    return (
        <div className="flex flex-col p-3 back bg-orange-500 rounded-lg">
            <Image src='/logo.jpg' className="rounded-lg" height={256} width={256} alt='Image de Produto' />
            <strong className="pt-1 text-white text-xl pb-4 font-semibold"> Carne Filetada </strong>
            <strong className="pt-1 pb-2 text-white opacity-75 font-normal"> Contra Filé filetado, acompanha fritas e farofa. </strong>
            <button className="bg-zinc-400 rounded-xl text-white hover:bg-zinc-500 duration-300"> Adicionar </button>
        </div>
    )
}