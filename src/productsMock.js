export let products = [
  {
    id: 1,
    title: "Cupcakes de vainilla",
    price: 500,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1708363947/recetas-9820-cupcakes-de-vainilla-sencillos-2000-19c6dac0bae94224a200b3537fb0a3e9_frnekq.jpg",
    stock: 18,
    category: "Con relleno",
  },
  {
    id: 2,
    title: "Cupcakes de vainilla",
    price: 600,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1708364402/663595a7dfec5043946bfa5723477d9b_ukmczh.jpg",
    stock: 18,
    category: "Con relleno",
  },
  {
    id: 3,
    title: "Cupcakes de chocolate",
    price: 500,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1709064593/7-ideas-cupcakes-tem_C3_A1tico-para-cumplea_C3_B1os-infantiles_ejwqpj.jpg",
    stock: 18,
    category: "Personalizados",
  },
  {
    id: 4,
    title: "Cupcakes de chocolate",
    price: 600,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1708364084/cupcakes-de-chocolate_hh47ig.jpg",
    stock: 18,
    category: "Con relleno",
  },
  {
    id: 5,
    title: "Cupcakes de banana",
    price: 500,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1709064632/2596253_0_pq_ukb0fz.jpg",
    stock: 18,
    category: "Personalizados",
  },
  {
    id: 6,
    title: "Cupcakes de banana",
    price: 800,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1708364802/bananacupcakes_l8lfbl.jpg",
    stock: 18,
    category: "Sin tacc",
  },
  {
    id: 7,
    title: "Cupcakes de Arandanos",
    price: 500,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1709064913/super_mario_cupcakes_n6clzj.jpg",
    stock: 18,
    category:  "Personalizados",
  },
  {
    id: 8,
    title: "Cupcakes de limon",
    price: 600,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1708364204/Key-lime-cupcakes-19-_zpctjd.jpg",
    stock: 18,
    category: "Con relleno",
  },
  {
    id: 9,
    title: "Cupcakes de manzana",
    price: 500,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1708364471/cupcakes-con-fresas-y-crema-sobre-mesa-blanca_m3ks4a.jpg",
    stock: 18,
    category: "Sin relleno",
  },
  {
    id: 10,
    title: "Cupcakes de manzana",
    price: 800,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1708364227/cupcakes-chocolate_myuvce.jpg",
    stock: 18,
    category: "Sin tacc",
  },
  {
    id: 11,
    title: "Cupcakes de pasta de mani",
    price: 650,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1708364164/Cookies-and-Cream-Cupcakes-FI_jaa86m.jpg",
    stock: 18,
    category: "Con relleno",
  },
  {
    id: 12,
    title: "Cupcakes de zanahoria",
    price: 650,
    description: "Masa dulce",
    img: "https://res.cloudinary.com/dwgaqa7wc/image/upload/v1709064758/80883dcd7e2c4afb1f1963c45c29b55d_oed3qw.jpg",
    stock: 18,
    category: "Personalizados",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {

    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 500); //simulo medio segundo de demora en el servidor.
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`No se encuentra el producto con el id ${id}`);
        }
      }, 500);
    } else {
      reject("No hay productos");
    }
  });
};






/*export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => { //simulamos una demora en el servidor de 2segundos.
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
}; 
 */