import { useParams, useNavigate } from 'react-router-dom';
import { detalleAlumno } from '../../components/DetalleAlumno/DetalleAlumno';

export const PaginaDetalleAlumno = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetalleAlumno idAlumno={id} onCerrar={() => navigate('/')} />;
};
