import { ProductCard } from "../common/ProductCard"


const ItemListContainer = ({greeting}) => {

    return <div>

        <div> {greeting} </div>

        <h2>Aca van los productos</h2>
        <ProductCard  titulo= {"Cupcake1"} precio={"$4000"} descripcion={"son las mas lindas"} />
        <ProductCard  titulo= {"Cupcake2"} precio={"$5000"} descripcion={"son las mas lindas"}/>
        <ProductCard  titulo= {"Cupcake3"} precio={"$4500"} descripcion={"son las mas lindas"}/>
        <ProductCard  titulo= {"Cupcake4"} precio={"$6200"} descripcion={"son las mas lindas"}/>

    </div>
    

}

export default ItemListContainer
