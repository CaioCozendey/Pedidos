import Alert from '../alert/alert';
import Hamburguer from './Hamburguer';
import Petiscos from './Petiscos';
import Pizza from './Pizza';

export default function Principal() {
    return (
        <div className='items-center flex flex-col mx-16 pt-28'>
            <Alert/>
            <Pizza />
            <Hamburguer />
            <Petiscos />
        </div>
    )
}