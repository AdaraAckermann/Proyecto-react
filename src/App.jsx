import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { getProducts } from "./productsMock";
import ItemCountContainer from "./components/common/itemCount/ItemCountContainer";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import { CartContainer } from "./components/pages/cart/CartContainer";



//import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";


const App = () => {
  return (
    <div>
      <h1 className="title">Dakotas Cupcakes</h1>

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:category" element={ < ItemListContainer/> } />



          <Route path="/cart" element={<CartContainer />} />
          <Route path="/item/:id" element={ <ItemDetailContainer /> } />



        </Routes>
      </BrowserRouter>




      <ItemCountContainer/>


      
      <ItemDetailContainer/>

    </div>
  );
};

export default App;
