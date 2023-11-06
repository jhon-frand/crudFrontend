import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom"
import { faReply } from "@fortawesome/free-solid-svg-icons"


function Dashboard() {

    const endpoint = 'http://127.0.0.1:8000/api';

    
    const [ equipos, setEquipos] = useState([]);
     const [searchId, setSearchId] = useState(''); // Estado para el ID de búsqueda


    useEffect( () => {
        showEquipos();
    }, []);

    const showEquipos = async () =>{
        try {
            const response = await axios.get(`${endpoint}/equipo`);
            setEquipos(response.data);
        } catch (error) {
            console.error("error en la solicitud", error);
        }   
    };

        const deleteEquipo = async (id) => {
         try {
            await axios.delete(`${endpoint}/equipo/${id}`)
            showEquipos();
         } catch (error) {
            console.error("error al eliminar el equipo", error);
         }
        }

         // Función para manejar cambios en el input de búsqueda
        const handleSearchInputChange = (e) => {
          setSearchId(e.target.value);
        }
    
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8000/api/equipo/").then((response)=>{
    //         console.log(response);
    //         setData(response.data);
    //     }).catch((error)=>{
    //         console.log("error en la solicitud", error);
    //     })
    // }, [])

  return (
   <>
   <div className="flex h-screen">
    <Navbar/>
    <Sidebar/>
    <div className="w-full pt-28">
       <div className="flex justify-between">
       <Link to="/">
        <button className="font-bold text-white  w-16 p-2 rounded-xl">
            <FontAwesomeIcon icon={faReply} className="text-green-600 text-[30px]" />
        </button>
        </Link>
            <h1 className="text-center text-green-900 p-5 font-bold text-xl">EQUIPOS REGISTRADOS</h1>
            <div className="flex justify-center items-center">
                <form action="" method="get"
                className="flex gap-1"
                >
                <input type="text"
                value={searchId}
                onChange={handleSearchInputChange}
                placeholder=" Search by ID..."
                className="bg-gray-300 p-2 rounded"
                />
                <Link to={`/show/${searchId}`}>
               <input type="submit" value="BUSCAR" 
               className="font-bold text-white bg-[#39a900] hover:bg-green-700 p-2 rounded-xl"/>
               </Link>
                </form>
            </div>
            <div className="flex justify-center items-center mr-12">
               <Link to="/register">
               <button className="font-bold text-white bg-[#39a900] hover:bg-green-700 p-2 rounded-xl">
                    REGISTRAR EQUIPO
                </button></Link>
            </div>
       </div>
            <table className="mx-auto w-11/12 bg-gray-100 rounded-2xl">
                <thead className="bg-gray-200">
                    <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">NUM REFERENCIA</th>
                    <th className="p-3">NOMBRE</th>
                    <th className="p-3">DESCRIPCIÓN</th>
                    {/* <th className="p-3">FECHA INGRESO</th> */}
                    <th className="p-3">TIPO</th>
                    <th className="p-3">ESTADO</th>
                    <th className="p-3">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {equipos.map((equipo)=>(
                        <tr key={equipo.id}>
                        <th className="p-3 font-normal">{equipo.id}</th>
                        <th className="p-3 font-normal">{equipo.num_referencia}</th>
                        <th className="p-3 font-normal">{equipo.nombre}</th>
                        <th className="p-3 font-normal">{equipo.descripcion}</th>
                        {/* <th className="p-3 font-normal">{equipo.fecha_ingreso}</th> */}
                        <th className="p-3 font-normal">{equipo.tipo}</th>
                        <th className="p-3 font-normal">{equipo.estado}</th>
                        <th className="p-3 flex gap-1 justify-center items-center">
                            <Link to={`/update/${equipo.id}`}>
                            <button className="p-2 w-[80px] text-white hover:bg-green-700 bg-[#39a900] rounded-lg">Edit</button>
                            </Link>
                            <button onClick={ ()=>deleteEquipo(equipo.id)} className="p-2 w-[80px] text-white hover:bg-red-700 bg-red-500 rounded-lg">Delete</button>
                        </th>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
   </div>
   </>
  )
}

export default Dashboard