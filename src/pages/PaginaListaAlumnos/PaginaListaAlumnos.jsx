import { usestate } from 'react';
import { link } from 'react-router-dom';
import {listaAlumnos} from './components/ListaAlumnos/ListaAlumnos.jsx';

export const PaginaListaAlumnos = () => {
  const [recargar, setRecargar] = useState(0);

  return (
    <div>
      <Link to={'/alumnos/nuevo'}>Registrar nuevo alumno</Link>

      <ListaAlumnos recargar={recargar} />
    </div>
  );
};

