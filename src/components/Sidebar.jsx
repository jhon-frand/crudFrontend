import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faGear, faToolbox, faUser } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <>
    <div className="w-48 bg-[#39a900] h-screen flex justify-between flex-col">
   <div></div>
    <div className="w-full text-center flex flex-col items-center">
        <a className="hover:bg-white hover:text-green-800 flex gap-2 justify-center items-center p-3 w-full font-semibold text-white " href="">
        <FontAwesomeIcon icon={faUser} />
            USUARIOS</a>
        <a className="hover:bg-white hover:text-green-800 flex gap-2 justify-center items-center  p-3 w-full font-semibold text-white " href="">
            <FontAwesomeIcon icon={faToolbox}/>
            EQUIPOS</a>
        <a className="hover:bg-white hover:text-green-800 flex gap-2 justify-center items-center  p-3 w-full font-semibold text-white " href="">
            <FontAwesomeIcon icon={faGear} />
            MANTENIMIENTOS</a>
        <a className="hover:bg-white hover:text-green-800 flex gap-2 justify-center items-center  font-semibold text-white p-3 w-full  " href="">
            <FontAwesomeIcon icon={faFile} />
            INFORMES</a>
    </div>
    <footer className="text-center mb-2">
    <p className="text-green-200">AGROVIDA</p>
    </footer>
    </div>
  
    </>
  )
}

export default Sidebar