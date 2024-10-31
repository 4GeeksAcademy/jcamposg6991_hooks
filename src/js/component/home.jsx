import React, { useEffect, useState } from "react";
import TraffictLight from "./trafficLight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Form from "./form";

//create your first component
const Home = () => {
//logica
//let nombre = "Jordan"
//useState es un hook

//const [estado, setEstado] = useState("valor inicial")

const [contador,setContador] = useState(0)
const [color, setColor] = useState("black")
const [ultimoContador,setUltimoContador] = useState(0)

useEffect(()=>{
	//codigo del efecto

	// if(contador>0){
	// 	setColor("red")
	// }else if(contador<0){
	// 	setColor("yellow")
	// }else{
	// 	setColor("black")
	// }

	if(contador > ultimoContador){
		setColor("yellow")
	}else if(contador<ultimoContador){
		setColor("red")
	}
	setUltimoContador(contador)

},[contador, ultimoContador])


	return (
		<TraffictLight/>
		// <div className="text-center">
		// 	<h1 className="text-center mt-5">El contador esta en: {contador}</h1>
		// 	<button onClick={()=> setContador(contador+1)} style={{backgroundColor:color,color:"white"}}>Incrementar</button>
		// 	<button onClick={()=> setContador(contador-1)} style={{backgroundColor:color,color:"white"}}>Incrementar</button>
		// </div>
		// <>
		// <Form/>
		// </>
	);
};

export default Home;
