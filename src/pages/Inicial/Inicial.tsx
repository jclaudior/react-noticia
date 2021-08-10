import React from 'react';
import SimpleMenu from '../../Components/SimpleMenu/SimpleMenu';
import Listar from '../Noticia/Listar/Listar';

const Inicial: React.FC = () => {
    return <div>
        <SimpleMenu></SimpleMenu>
        <Listar></Listar>
    </div>
}

export default Inicial;