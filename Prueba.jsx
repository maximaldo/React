import { useEffect,useState } from "react";

function Prueba(){
    const Data = new Date();
    const [hora,setHora] = useState(Data)
    
    function actualizar(){
        let nuevaFecha = new Date();
        setHora(nuevaFecha);
    }
    useEffect(() => {
   let a = setInterval(actualizar,1000);
   return () => clearInterval(a)
    },[])

    return(
    <>
    <h1>{hora.getHours().toString().padStart(2,0)}:{hora.getMinutes().toString().padStart(2,0)}:{hora.getSeconds().toString().padStart(2,0)}</h1>
       
    </>
    )

}
export default Prueba