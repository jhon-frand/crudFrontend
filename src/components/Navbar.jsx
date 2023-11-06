import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
    <nav className="w-full h-24 shadow bg-white  flex justify-between items-center absolute z-2">
        <img className="w-32" src="../src/assets/img/logosena.png" alt="Logo SENA" />
       <div className="flex justify-center items-center gap-2">
       <img className="w-20" src="../src/assets/img/AGROVIDA.jpg" alt="logo AGROVIDA" />
        <h1 className="text-green-700 font-bold text-[30px]">AGROVIDA</h1>
       </div>
       <div className="p-5">
        <Link to="/dashboard" className="text-gray-500 font-bold hover:text-green-600 mr-2" >
        <button>
            INICIAR SESIÓN
        </button>
        </Link>
        <a className="text-gray-500 font-bold hover:text-green-600 " href="">REGISTRARSE</a>
        </div>
    </nav>
    </>
  )
}

export default Navbar