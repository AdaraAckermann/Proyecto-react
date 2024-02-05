import "./App.css"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const App = ()=> {

  Navbar()

  return (
    <div>

      {/*USAR EL NAVBAR */}
      {/*Navbar() */}
      <Navbar />

     <h1 className="title">Este es el titulo</h1>
     <h2>un subtitulo</h2>
     <h3>Algo mas</h3>


     <Footer/>

    </div> 
  )
}

export default App
