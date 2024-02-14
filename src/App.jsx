import {Navbar} from "./components/layout/Navbar"

import ItemListContainer from "./components/pages/ItemListContainer"


const App = ()=> {


  return (
    <div>
      <h1 className="title">Este es el titulo</h1>

      <Navbar />

      <ItemListContainer greeting="Bienvenidos a Dakota Cupcakes" />

    </div> 
  );
};

export default App
