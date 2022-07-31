const data_products = [
    {
      id: 1,
      name: "PANEL DIRECCIONABLE 1 LAZO 60 PUNTOS -CERTIF. UL TEC",
      model: "FX-350-60-DR",
      brand: "MIRCOM",
      category: "PANELES",
      image: "images/products/FX-350-60-DR.svg",
    },
    {
      id: 2,
      name: "PANEL CONVENCIONAL DE 4 ZONAS CONTROL ALARMA DE INCENDIO",
      model: "RE-2554",
      brand: "RAVEL",
      category: "PANELES",
      image: "images/products/RE-2554.svg",
    },
    {
      id: 3,
      name: "BATERIA PS7-12",
      model: "PS7-12",
      brand: "NOVA",
      category: "BATERIAS",
      image: "images/products/PS7-12.svg",
    },
    {
      id: 4,
      name: "CABLE FPL 4X22 LSZH 305 M",
      model: "9013",
      brand: "Dixon",
      category: "CABLES",
      image: "images/products/9013.svg",
    },
    {
      id: 5,
      name: "CABLE UL-FPLR 16 AWG",
      model: "AWGUSH162C",
      brand: "NHT",
      category: "CABLES",
      image: "images/products/AWGUSH162C-AWGUSH182C.svg",
    },
    {
      id: 6,
      name: "CABLE UL-FPLR 18 AWG",
      model: "AWGUSH182C",
      brand: "NHT",
      category: "CABLES",
      image: "images/products/AWGUSH162C-AWGUSH182C.svg",
    },
    {
      id: 7,
      name: "DETECTOR DE HUMO FOTOELECTRICO Y TEMPERATURA DE 04 HILOS",
      model: "SD119-4H-12",
      brand: "SENTEK",
      category: "DETECTORES",
      image: "images/products/SD119-4H-12.svg",
    },
    { 
      id:8,
      name: "DETECTOR DE HUMO DIRECCIONABLE 1 DIRECCION – CERTIFICACION UL",
      model: "MIX-3100",
      brand: "MIRCOM",
      category: "DETECTORES",
      image: "images/products/MIX-3100.svg",
    },
    {
      id:9,
      name: "BASE ESTANDAR PARA DIRECCIONABLE SIN BORDE",
      model: "MIX-2000",
      brand: "MIRCOM",
      category: "DETECTORES",
      image: "images/products/MIX-2000.svg",
    },
    {
      id:10,
      name: "SIRENA CON LUZ ESTROBO MULTICANDELA RED",
      model: "SYS-HS",
      brand: "System Sensor",
      category: "SIRENAS",
      image: "images/products/SYS-HS.svg",
    },
    {
      id:11,
      name: "SIRENA CON ESTROBO NO DIRECCIONABLE PARED ROJO",
      model: "4906-9127",
      brand: "SIMPLEX",
      category: "SIRENAS",
      image: "images/products/4906-9127.svg",
    },
    {
      id:12,
      name: "SIRENA CON LUZ ESTROBO PARA EXTERIOR",
      model: "P2RK",
      brand: "System Sensor",
      category: "SIRENAS",
      image: "images/products/P2RK.svg",
    },
    {
      id:13,
      name: "ESTACION MANUAL SIMPLE ACCION",
      model: "MS-401U",
      brand: "MIRCOM",
      category: "MANUALES",
      image: "images/products/MS-401U.svg",
    },
    {
      id:14,
      name: "ESTACION MANUAL DIRECCIONABLE DOBLE ACCION - CERTIF. UL TEC",
      model: "MS-710IDU",
      brand: "MIRCOM",
      category: "MANUALES",
      image: "images/products/MS-710IDU.svg",
    },
    {
      id:15,
      name: "EXPANSOR DE LAZO DIRECCIONABLE TEC",
      model: "ALCN-252",
      brand: "MIRCOM",
      category: "EXPANSOR",
      image: "images/products/ALCN-252.svg",
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
 
  // const crearCardsBaterias = () => {
  //   //const listaProductos = productFilter(categoria, marca);
  
  //   //se recorre la lista
  //   data_products.forEach((product) => {
  //     const image = document.createElement("img");
  //     image.src = "images/projects/bateria-ps7-12.svg";
  //     image.className = "card-img-top";
  //     image.alt = "Bateria PS7-12 | TOCSON";
  
  //     const cardBody = document.createElement("div");
  //     cardBody.className = "card-body";
  
  //     const cardTitle = document.createElement("h5");
  //     cardTitle.className = "card-title text-center";
  //     cardTitle.textContent = `${product.name}`;
  
  //     const parrafo = document.createElement("p");
  //     parrafo.className = "card-text text-center";
  //     parrafo.textContent = `${product.category}`;
  
  //     const enlace = document.createElement("a");
  //     enlace.className = "btn btn-primary w-100";
  //     enlace.textContent = "Cotiza";
  
  //     cardBody.appendChild(cardTitle);
  //     cardBody.appendChild(parrafo);
  //     cardBody.appendChild(enlace);
  
  //     //dónde lo vas a colocar
  //     const card = document.querySelector("#card1");
  //     card.appendChild(image);
  //     card.appendChild(cardBody);
  //   });
  // };
  
  
  $("#baterias").click(function () {
    $("#card1").empty();
    $("label").removeClass("active");
    $(this).addClass("active");
    if ($(".card-body").length === 0) {
      crearCards("BATERIAS");
    } else {
      console.log("No puedes agregar más");
    }
  });
  
  $("#sirenas").click(function () {
    $("#card1").empty();
    $("label").removeClass("active");
    $(this).addClass("active");
    //window.location.reload(true);
    if ($(".card-body").length === 0) {
      crearCards("SIRENAS");
    } else {
      console.log("No puedes agregar más porque ya existe");
    }
  });
  
  $("#todos").click(function () {
    //$("#card1").load(" #card1");
    //$('.card-body').removeClass('.card-body');
    $("#card1").empty();
    $("label").removeClass("active");
    $(this).addClass("active");
    //window.location.reload(true);
    if ($(".card-body").length === 0) {
      crearCards();
    } else {
      console.log("No puedes agregar más porque ya existe");
    }
  });
  
  $("#manuales").click(function () {
    $("#card1").empty();
    $("label").removeClass("active");
    $(this).addClass("active");
    //window.location.reload(true);
    if ($(".card-body").length === 0) {
      crearCards("MANUALES");
    } else {
      console.log("No puedes agregar más porque ya existe");
    }
  });
  $("#cables").click(function () {
    $("#card1").empty();
    $("label").removeClass("active");
    $(this).addClass("active");
    //window.location.reload(true);
    if ($(".card-body").length === 0) {
      crearCards("CABLES");
    } else {
      console.log("No puedes agregar más porque ya existe");
    }
  });
  $("#paneles").click(function () {
    $("#card1").empty();
    $("label").removeClass("active");
    $(this).addClass("active");
    //window.location.reload(true);
    if ($(".card-body").length === 0) {
      crearCards("PANELES");
    } else {
      console.log("No puedes agregar más porque ya existe");
    }
  });
  $("#exp_lazo").click(function () {
    $("#card1").empty();
    $("label").removeClass("active");
    $(this).addClass("active");
    //window.location.reload(true);
    if ($(".card-body").length === 0) {
      crearCards("EXPANSOR");
    } else {
      console.log("No puedes agregar más porque ya existe");
    }
  });
  $("#detec_humo").click(function () {
      $("#card1").empty();
      $("label").removeClass("active");
      $(this).addClass("active");
      //window.location.reload(true);
      if ($(".card-body").length === 0) {
        crearCards("DETECTORES");
      } else {
        console.log("No puedes agregar más porque ya existe");
      }
    });
  
  crearCards();