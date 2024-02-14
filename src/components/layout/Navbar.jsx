import CartWidget from "../common/CartWidget"

export const Navbar = ()=> {

    return <nav>
        <h3>Logo</h3>
        <ul>
            <li className="bulletPoint">Productos</li>
            <li>servicios</li>
            <li>contacto</li>
        </ul>
        <h4>Carrito</h4>
        <CartWidget />

    </nav>
}


