import { useEffect, useState } from "react";

function Countdown(){
 const [temporizador,setTemporizador] = useState(5)
 const [parar,setParar] =useState()
 const HandleClick = () =>{
setParar(setInterval(() => {
setTemporizador(t => t - 1)
},1000))

 }
useEffect(()=>{
if( temporizador === 0) clearInterval(parar)


},[temporizador,parar])



return (<>
 <h1>{temporizador}</h1>
 <button onClick={HandleClick}>Empezar</button>
 <button onClick={()=>setTemporizador(5) }>Reiniciar</button>
 {temporizador === 0 &&  <img src="https://www.infobae.com/new-resizer/XyshbgjhlCsCmV-p7bfppAH6w70=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/LXGO7L5SM5BZ7E2YBVQOUT6AFI.jpg" alt="" />}

 </>

)
}
export default Countdown;