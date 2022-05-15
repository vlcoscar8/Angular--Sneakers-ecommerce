import { IProduct } from './../model/product.model';
export const products: IProduct[] = [
  {
    id: 1,
    brand: 'Nike',
    genre: 'Man',
    title: 'Nike React Infinity Run Flyknit 3',
    price: 160,
    img: [
      `https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5a28e397-d083-4398-b0d9-a9911ae22018/react-infinity-run-flyknit-3-zapatillas-de-running-carretera-Pp5hlk.png`,
      `https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c44f5879-48c5-4b3a-a4a6-5274ed6c4dd7/react-infinity-run-flyknit-3-zapatillas-de-running-carretera-Pp5hlk.png`,
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/aff84436-35c5-4ecc-9774-a4638610fef3/react-infinity-run-flyknit-3-zapatillas-de-running-carretera-Pp5hlk.png',
    ],
    description:
      'Nuestras zapatillas más probadas, diseñadas para ayudarte a superar tras tus metas más altas metas de running. Las Nike React Infinity Run 3 ofrecen suavidad y estabilidad con una pisada agradable que te llevará por cualquier ruta, larga o corta. La parte superior transpirable está diseñada para ofrecer contención, sin perder flexibilidad. Incluso hemos añadido más amortiguación en el talón y el tobillo para proporcionar una sensación de sujeción. No dejes de correr, lo tiene todo.',
    units: 10,
    sizes: '39, 40, 41, 42, 43, 44',
    value: 0,
  },
  {
    id: 2,
    brand: 'Adidas',
    genre: 'Man',
    title: 'Zapatilla Gazelle',
    price: 95,
    img: [
      `https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a847e062376346299a7ca80200807c9c_9366/Zapatilla_Gazelle_Gris_BB5480_01_standard.jpg`,
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/35b62c08f4f840f59c35a8020080a891_9366/Zapatilla_Gazelle_Gris_BB5480_04_standard.jpg',
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ab0b1dac0a1641c080e0a8020080b395_9366/Zapatilla_Gazelle_Gris_BB5480_05_standard.jpg',
    ],
    description:
      'Un auténtico clásico. Tras debutar como una zapatilla esencialmente deportiva, la Gazelle no tardó en convertirse en un icono del estilo urbano. Esta zapatilla se ha confeccionado con los mismos materiales, colores y proporciones ligeramente más anchas que la versión de 1991. Presenta una parte superior de nobuk suave que le aporta un aire sofisticado.',
    units: 10,
    sizes: '39, 40, 41, 42, 43, 44',
    value: 0,
  },
  {
    id: 3,
    brand: 'Nike',
    genre: 'Woman',
    title: 'Nike Zoom Alphafly Next Nature',
    price: 290,
    img: [
      `https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/04993055-6221-4a74-8ff2-bd37b481c057/zoom-alphafly-next-nature-zapatillas-de-competicion-carretera-3mk9g2.png`,
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d2667e1c-3585-45b9-a979-47485280b90e/zoom-alphafly-next-nature-zapatillas-de-competicion-carretera-3mk9g2.png',
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8f7b5836-27ec-4248-aea0-688d9652aaca/zoom-alphafly-next-nature-zapatillas-de-competicion-carretera-3mk9g2.png',
    ],
    description:
      'Dalo todo para llegar a la meta con el siguiente paso en nuestro camino de sostenibilidad.Hemos confeccionado las ultraligeras Nike Air Zoom Alphafly Next Nature con, al menos, un 50 % de materiales reciclados por peso y que no reducen el rendimiento.Se han diseñado para mejorar tus récords personales con un diseño seguro, transpirable y tan ligero que ofrece la sensación de volar.Has entrenado duro, ponte las zapatillas y dalo todo con unas zapatillas confeccionadas con residuos.',
    units: 10,
    sizes: '36, 37, 38, 39, 40, 41',
    value: 0,
  },
  {
    id: 4,
    brand: 'Adidas',
    genre: 'Woman',
    title: 'Zapatilla Ultraboost 22',
    price: 180,
    img: [
      `https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/798d3061f5934cd1983bade800a7f2dd_9366/ZAPATILLA_ULTRABOOST_22_Blanco_GX5595_01_standard.jpg`,
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/616ba20c88d742909a7dade500f6a6fb_9366/ZAPATILLA_ULTRABOOST_22_Blanco_GX5595_04_standard.jpg',
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c6fde21e28743818a74ade800a81553_9366/ZAPATILLA_ULTRABOOST_22_Blanco_GX5595_05_standard.jpg',
    ],
    description:
      'Hemos analizado 1.200.000 pisadas para que Ultraboost evolucione y mejore su ajuste para adaptarse 360° al pie femenino. Y lo que es aún mejor. Hemos rediseñado la suela de caucho y hemos probado cientos de prototipos hasta que hemos garantizado un mejor rendimiento.',
    units: 10,
    sizes: '36, 37, 38, 39, 40, 41',
    value: 0,
  },
];
