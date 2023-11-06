import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useNavigate} from "react-router-dom";


import axios from "axios";


function Update() {
  
  const endpoint = "http://127.0.0.1:8000/api/equipo";


  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    num_referencia: "",
    nombre: "",
    fecha_ingreso: "",
    descripcion: "",
    tipo: "",
    estado: "",
  });

  useEffect(() => {
    // Realiza una solicitud GET para obtener los datos actuales del equipo
    axios.get(`${endpoint}/${id}`).then((response) => {
      const equipoData = response.data;
      setFormData({
        num_referencia: equipoData.num_referencia,
        nombre: equipoData.nombre,
        fecha_ingreso: equipoData.fecha_ingreso,
        descripcion: equipoData.descripcion,
        tipo: equipoData.tipo,
        estado: equipoData.estado,
      });
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateEquipment = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${endpoint}/${id}`, formData);
      console.log("Equipo actualizado con éxito");

      // Redirigir a la página de dashboard o a la vista de detalles del equipo
      navigate(`/dashboard`);
    } catch (error) {
      console.log("Error al actualizar el equipo", error);
    }
  };

  return (
    <div className="flex h-screen">
      <Navbar />
      <Sidebar />
      <div className="w-full pt-24 flex flex-col justify-center items-center">
        <h1 className="font-bold text-green-600 p-2">EDITAR EQUIPO</h1>
        <form
          onSubmit={updateEquipment}
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
            value={formData.num_referencia}
            onChange={handleInputChange}
          />

          <label className="mt-1 font-bold text-sm">NOMBRE</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingrese el nombre"
            className="rounded-xl p-1"
            value={formData.nombre}
            onChange={handleInputChange}
          />

          <label className="mt-1 font-bold text-sm">FECHA DE INGRESO</label>
          <input
            type="text"
            id="fecha_ingreso"
            name="fecha_ingreso"
            placeholder="Ingresa fecha de ingreso"
            className="rounded-xl p-1"
            value={formData.fecha_ingreso}
            onChange={handleInputChange}
          />

          <label className="mt-1 font-bold text-sm">DESCRIPCIÓN</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Ingrese una descripción"
            className="rounded-xl p-1"
            value={formData.descripcion}
            onChange={handleInputChange}
          />

          <label className="mt-1 font-bold text-sm">TIPO</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            placeholder="Ingrese tipo de equipo"
            className="rounded-xl p-1"
            value={formData.tipo}
            onChange={handleInputChange}
          />

          <label className="mt-1 font-bold text-sm">ESTADO</label>
          <input
            type="text"
            id="estado"
            name="estado"
            placeholder="Ingrese estado"
            className="rounded-xl p-1"
            value={formData.estado}
            onChange={handleInputChange}
          />
            <input
              type="submit"
              value="ACTUALIZAR EQUIPO"
              className="font-bold text-white cursor-pointer mt-1 bg-green-600 rounded-xl p-2 hover:bg-green-500"
            />     
        </form>
      </div>
    </div>
  );
}

export default Update;
