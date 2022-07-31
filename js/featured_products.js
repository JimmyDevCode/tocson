//bd products
const data_products = [
  {
    name: "PANEL DIRECCIONABLE 1 LAZO 60 PUNTOS -CERTIF. UL TEC",
    model: "FX-350-60-DR",
    brand: "MIRCOM",
    category: "PANELES",
    image: "images/products/FX-350-60-DR.svg",
  }, 
  {
    name: "DETECTOR DE HUMO FOTOELECTRICO Y TEMPERATURA DE 04 HILOS",
    model: "SD119-4H-12",
    brand: "SENTEK",
    category: "DETECTORES",
    image: "images/products/SD119-4H-12.svg",
  },
  {
    name: "SIRENA CON LUZ ESTROBO MULTICANDELA RED",
    model: "SYS-HS",
    brand: "System Sensor",
    category: "SIRENAS",
    image: "images/products/SYS-HS.svg",
  },
  {
    name: "ESTACION MANUAL SIMPLE ACCION",
    model: "MS-401U",
    brand: "MIRCOM",
    category: "MANUALES",
    image: "images/products/MS-401U.svg",
  },
];

const productFilter = (categoria = "", marca = "") => {
  let productos = [];

  //busca por la categoria
  if (categoria.length > 0 && marca.length === 0) {
    productos = data_products.filter(
      (product) => product.category == categoria
    );
    //busca por la marca
  } else if (marca.length > 0 && categoria.length === 0) {
    productos = data_products.filter((product) => product.brand == marca);
    //busca por la vategoria y la marca
  } else if (marca.length > 0 && categoria.length > 0) {
    productos = data_products.filter(
      (product) => product.brand == marca && product.category == categoria
    );
  } else {
    //busca todos los productos
    productos = data_products.map((product) => product);
  }
  return productos;
};

function crearCards(categoria = "", marca = "") {
  //se define donde se colocará
  const card = document.querySelector("#card1");

  //se crea el template
  const template = document.querySelector("#template").content;

  //se crea el fragment
  const fragment = document.createDocumentFragment();

  //se obtiene la lista de productos
  const listaProductos = productFilter(categoria, marca);

  //se recorre la lista de productos
  listaProductos.forEach((product) => {
    template.querySelector(".service-box-title").textContent = product.name;
    template.querySelector(".service-box-title").textContent = product.name;

    template.querySelector(".card-subtitle").textContent = product.brand;
    // template.querySelector('.card-text').textContent = product.brand;
    template
      .querySelector(".card-img-top")
      .setAttribute("src", `${product.image}`);

    template.querySelector(".modelo").textContent = product.model;

    template
      .querySelector(".btnlink")
      .setAttribute(
        "href",
        `https://api.whatsapp.com/send?phone=960904097&text=%C2%A1Hola!%20Estoy%20interesado%20en%20cotizar%20el%20producto: ${product.name}%20`
      );

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });

  card.appendChild(fragment);
}

crearCards();