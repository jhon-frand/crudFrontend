import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Show() {
  const { id } = useParams();
  const endpoint = `http://127.0.0.1:8000/api/equipo/${id}`;
  const [equipo, setEquipo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(endpoint)
      .then(response => setEquipo(response.data))
      .catch(error => console.error('Error al obtener detalles del equipo', error));
  }, [id, endpoint]);

  const deleteEquipo = async () => {
    try {
       await axios.delete(`${endpoint}`)
       navigate('/dashboard');
    } catch (error) {
       console.error("error al eliminar el equipo", error);
    }
   }

  return (
    <>
    <div className="flex h-screen">
    <Navbar/>
    <Sidebar/>
    <div className="w-full pt-28">
       <div className="flex justify-between">
       <Link to="/dashboard">
        <button className="font-bold text-white  w-16 p-2 rounded-xl">
            <FontAwesomeIcon icon={faReply} className="text-green-600 text-[30px]" />
        </button>
        </Link>
            <h1 className="text-center text-green-900 p-5 font-bold text-xl">EQUIPO REGISTRADO</h1>
           
            <div className="flex justify-center items-center mr-12">
               
            </div>
       </div>
            <table className="mx-auto w-11/12 bg-gray-100 rounded-2xl">
                <thead className="bg-gray-200">
                    <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">NUM REFERENCIA</th>
                    <th className="p-3">NOMBRE</th>
                    <th className="p-3">DESCRIPCIÓN</th>
                     <th className="p-3">FECHA INGRESO</th>
                    <th className="p-3">TIPO</th>
                    <th className="p-3">ESTADO</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                        <th className="p-3 font-normal">{equipo.id}</th>
                        <th className="p-3 font-normal">{equipo.num_referencia}</th>
                        <th className="p-3 font-normal">{equipo.nombre}</th>
                        <th className="p-3 font-normal">{equipo.descripcion}</th>
                        <th className="p-3 font-normal">{equipo.fecha_ingreso}</th>
                        <th className="p-3 font-normal">{equipo.tipo}</th>
                        <th className="p-3 font-normal">{equipo.estado}</th>
                        </tr>            
                </tbody>
            </table>
            <div className='p-5 flex gap-3 justify-center'>
            <Link to={`/update/${equipo.id}`}>
                 <button className="p-2 w-[80px] text-white font-semibold hover:bg-green-700 bg-[#39a900] rounded-lg">Edit</button>
             </Link>
              <button onClick={ ()=>deleteEquipo()} className="p-2 w-[80px] font-semibold text-white hover:bg-red-700 bg-red-500 rounded-lg">Delete</button>
                      
            </div>
        </div>
        </div>
    </>
  );
}

export default Show;
