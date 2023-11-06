import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useRef } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const num_referencia = useRef();
  const nombre = useRef();
  const fecha_ingreso = useRef();
  const descripcion = useRef();
  const tipo = useRef();
  const estado = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();

      const data = {
        num_referencia: num_referencia.current.value,
        nombre: nombre.current.value,
        fecha_ingreso: fecha_ingreso.current.value,
        descripcion: descripcion.current.value,
        tipo: tipo.current.value,
        estado: estado.current.value
      };

  axios.post("http://127.0.0.1:8000/api/equipo/", data, {}).finally(() => {
    navigate("/dashboard");
  })
}

  return (
    <div className="flex h-screen">
      <Navbar />
      <Sidebar />
      <div className="w-full pt-24 flex flex-col justify-center items-center">
        <h1 className="font-bold text-green-600 p-2">REGISTRAR EQUIPO</h1>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col w-1/3 gap-1 bg-gray-200 p-4 rounded-2xl"
        >
          <label className="mt-1 font-bold text-sm">NÚMERO DE REFERENCIA</label>
          <input
            type="text"
            id="num_referencia"
            name="num_referencia"
            placeholder="Ingrese número de referencia"
            className="rounded-xl p-1"
            ref={num_referencia}
          />

          <label className="mt-1 font-bold text-sm">NOMBRE</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingrese el nombre"
            className="rounded-xl p-1"
            ref={nombre}
          />

          <label className="mt-1 font-bold text-sm">FECHA DE INGRESO</label>
          <input
            type="text"
            id="fecha_ingreso"
            name="fecha_ingreso"
            placeholder="Ingresa fecha de ingreso"
            className="rounded-xl p-1"
            ref={fecha_ingreso}
          />

          <label className="mt-1 font-bold text-sm">DESCRIPCIÓN</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Ingrese una descripción"
            className="rounded-xl p-1"
            ref={descripcion}
          />

          <label className="mt-1 font-bold text-sm">TIPO</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            placeholder="Ingrese tipo de equipo"
            className="rounded-xl p-1"
           ref={tipo}
          />

          <label className="mt-1 font-bold text-sm">ESTADO</label>
          <input
            type="text"
            id="estado"
            name="estado"
            placeholder="Ingrese estado"
            className="rounded-xl p-1"
            ref={estado}
          />

            <input
              type="submit"
              value="REGISTRAR EQUIPO"
              className="font-bold text-white cursor-pointer bg-green-600 rounded-xl p-2 hover:bg-green-500"
            />
        
        </form>
      </div>
    </div>
  );
}

export default Register;



// import Navbar from "./Navbar"
// import Sidebar from "./Sidebar"
// import { Link } from "react-router-dom";


// function Register() {


//   return (
//     <>
//     <div className="flex h-screen">
//       <Navbar/>
//       <Sidebar/>
//       <div className="w-full pt-24 flex flex-col justify-center items-center">
//         <h1 className="font-bold text-green-600 p-2">REGISTRAR EQUIPO</h1>
//         <form action=""  method="post" className="flex flex-col w-1/3 gap-1 bg-gray-200 p-4 rounded-2xl">

//           <label  className=" mt-1 font-bold text-sm" >NÚMERO DE REFERENCIA</label>
//           <input type="text" id="num_referencia" 
//           name="num_referencia"  placeholder="Ingrese número de referencia"
//           className="rounded-xl p-1"/>

//           <label  className=" mt-1 font-bold text-sm" >NOMBRE</label>
//           <input type="text" id="nombre" name="nombre" 
//           placeholder="Ingrese el nombre"
//           className="rounded-xl p-1"/>

//           <label className=" mt-1 font-bold text-sm" >FECHA DE INGRESO</label>
//           <input type="text" id="fecha_ingreso" name="fecha_ingreso" placeholder="Ingresa fecha de ingreso"
//           className="rounded-xl p-1"/>

//           <label className=" mt-1 font-bold text-sm" >DESCRIPCIÓN</label>
//           <input type="text" id="descripcion" name="descripcion"  placeholder="Ingrese una descripción"
//           className="rounded-xl p-1"/>

//           <label className=" mt-1 font-bold text-sm" >TIPO</label>
//           <input type="text" id="tipo" name="tipo"  placeholder="Ingrese tipo de equipo"
//           className="rounded-xl p-1"/>

//           <label className=" mt-1 font-bold text-sm" >ESTADO</label>
//           <input type="text" id="estado" name="estado"   placeholder="Ingrese estado"
//           className="rounded-xl p-1"/>

//           <Link  className="text-center">
//           <input type="submit" value="REGISTRAR EQUIPO" className="font-bold text-white bg-green-600 rounded-xl p-2 hover:bg-green-500" />
//           </Link>

//         </form>
//       </div>
//     </div>
    
//     </>
//   )
// }

// export default Register