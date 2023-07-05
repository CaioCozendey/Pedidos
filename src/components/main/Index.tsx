import Hamburguer from './Hamburguer';
import Petiscos from './Petiscos';
import Pizza from './Pizza';

export default function Principal() {
    return (
        <div className='items-center flex flex-col mx-16'>
            <h1 className='text-slate-950 text-5xl mt-6 mb-2 font-semibold'> Pizza's </h1>
            <Pizza />
            <h1 className='text-slate-950 text-5xl mt-6 mb-2 font-semibold'> Hamburguer's </h1>
            <Hamburguer />
            <h1 className='text-slate-950 text-5xl mt-6 mb-2 font-semibold'> Petiscos </h1>
            <Petiscos />
        </div>
    )
}