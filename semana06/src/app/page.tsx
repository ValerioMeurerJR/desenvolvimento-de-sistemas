'use client'
import { useState } from "react";
import "./home.css";


export default function Home() {
  // let contador = 0;
  const [contador, setContador] = useState<number>(0)
  function incrementar() {
    setContador(contador + 1)
  }
  function resetar() {
    setContador(0)
  }
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => incrementar()} className="incrementar">INCREMENTAR</button>
      <button onClick={() => resetar()} className="resetar">RESETAR</button>
    </div>
  );
}

// /* <div>
// <h1>Hello Worlds</h1>
// <Link href="/login">
//   <button>LOGIN</button>
// </Link>
// <div className="container">
//   {
//     lista.map((item) =>
//       <Person nome={item.name} idade={item.age} key={item.name} />
//     )
//   }
// </div>
// </div> */