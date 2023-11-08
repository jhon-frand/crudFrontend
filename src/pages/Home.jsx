import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
    <div className="h-screen flex flex-col">
        <Navbar/>
        <div className="pt-28 flex justify-center items-center bg-gray-200 h-screen w-full">
           <div className="w-1/3 flex justify-center items-center">
             <img src="../src/assets/img/agroindustria.jpg" alt="Imagen Agroindustria"
             className="w-[500px]" />
           </div>
           <div className=" w-1/2 flex justify-center items-center">
            <img src="../src/assets/img/logosena.png" alt="logo SENA" 
            className="border-r-2 border-gray-400 w-[200px]"
            /> 
            <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-center text-[30px] text-green-600 font-bold" >AGROINDUSTRIA</h1>
            <h1 className="text-center text-xl text-green-600 font-bold" >CENTRO DE GESTIÓN Y DESARROLLO SOSTENIBLE SURCOLOMBIANO</h1>
            <h1 className="text-center text-xl text-green-600 font-semibold" >SENA - YAMBORÓ</h1>
            </div>
           </div>
        </div>
        <footer className="bg-gray-200">
            <h2 className="font-semibold text-gray-500 text-center p-2">AGROVIDA - TODOS LOS DERECHOS RESERVADOS</h2>
        </footer>
    </div>
    
    </>
  )
}

export default Home