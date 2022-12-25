const filter = [
  { id: "All", name: "Все" },
  { id: "Web-sites", name: "Веб-сайты" },
  { id: "Applications", name: "Приложения" },
  { id: "Design", name: "Дизайн" },
  { id: "Marketing", name: "Маркетинг" }
];

const products = [
  {
    id: "1",
    name: ["All", "Web-sites"],
    img: {
      srcset: "./images/img1-list-item354.jpg 354w, ./images/img1-list-item370.jpg 370w, ./images/img1-list-item450.jpg 450w",
      sizes: "(min-width: 1200px) 370px, (min-width: 768px) 354px, 100vw",
      src: "./images/img1-list-item354.jpg",
      alt: "Технокряк Веб-сайт",
    },
    description: "Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.",
    title: "Технокряк",
    text: "Веб-сайт"
  },
  {
    id: "2",
    name: ["All", "Design"],
    img: {
      srcset: "./images/img2-list-item354.jpg 354w, ./images/img2-list-item370.jpg 370w, ./images/img2-list-item450.jpg 450w",
      sizes: "(min-width: 1200px) 370px, (min-width: 768px) 354px, 100vw",
      src: "./images/img2-list-item354.jpg",
      alt: "Дизайн постера Новый Орлеан против Голден Стар",
    },
    description: "Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.",
    title: "Постер New Orlean vs Golden Star",
    text: "Дизайн"
  },
  {
    id: "3",
    name: ["All", "Applications"],
    img: {
      srcset: "./images/img3-list-item354.jpg 354w, ./images/img3-list-item370.jpg 370w, ./images/img3-list-item450.jpg 450w",
      sizes: "(min-width: 1200px) 370px, (min-width: 768px) 354px, 100vw",
      src: "./images/img3-list-item354.jpg",
      alt: "Приложениея для ресторана морепродуктов Сифуд",
    },
    description: "Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.",
    title: "Ресторан Seafood",
    text: "Приложение"
  },
  {
    id: "4",
    name: ["All", "Marketing"],
    img: {
      srcset: "./images/img4-list-item354.jpg 354w, ./images/img4-list-item370.jpg 370w, ./images/img4-list-item450.jpg 450w",
      sizes: "(min-width: 1200px) 370px, (min-width: 768px) 354px, 100vw",
      src: "./images/img4-list-item354.jpg",
      alt: "Проект прайм Маркетинг",
    },
    description: "Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.",
    title: "Проект Prime",
    text: "Маркетинг"
  },
  {
    id: "5",
    name: ["All", "Applications"],
     img: {
      srcset: "./images/img5-list-item354.jpg 354w, ./images/img5-list-item370.jpg 370w, ./images/img5-list-item450.jpg 450w",
      sizes: "(min-width: 1200px) 370px, (min-width: 768px) 354px, 100vw", 
      src: "./images/img5-list-item354.jpg",
      alt: "Проект Коробки Приложение",
    },
    description: "Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.",
    title: "Проект Boxes",
    text: "Applications",
  },
  {
    id: "6",
    name: ["All", "Web-sites"],
    img: {
      srcset: "./images/img6-list-item354.jpg 354w, ./images/img6-list-item370.jpg 370w, ./images/img6-list-item450.jpg 450w",
      sizes: "(min-width: 1200px) 370px, (min-width: 768px) 354px, 100vw",
      src: "./images/img6-list-item354.jpg",
      alt: "Веб-сайт У вдохновения нет границ",
    },
    description: "Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.",
    title: "Inspiration has no Borders",
    text: "Веб-сайт",
  },
  {
    id: "7",
    name: ["All", "Design"],
    img: {
      srcset: "./images/img7-list-item354.jpg 354w, ./images/img7-list-item370.jpg 370w, ./images/img7-list-item450.jpg 450w",
      sizes: "(min-width: 1200px) 370px, (min-width: 768px) 354px, 100vw",
      src: "./images/img7-list-item354.jpg",
      alt: "дизайн издания с названием Ограниченный выпуск",
    },
    description: "Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.",
    title: "Издание Limited Edition",
    text: "Дизайн",
  },
  {
    id: "8",
    name: ["All", "Marketing"],
    img: {
      srcset: "./images/img8-list-item354.jpg 354w, ./images/img8-list-item370.jpg 370w, ./images/img8-list-item450.jpg 450w",
      sizes: "(min-width: 1200px) 370px, (min-width: 768px) 354px, 100vw",
      src: "./images/img8-list-item354.jpg",
      alt: "Проект ЛАБ Маркетинг",
    },
    description: "Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.",
    title: "Проект LAB",
    text: "Маркетинг",
  },
  {
    id: "9",
    name: ["All", "Applications"],
    img: {
      srcset: "./images/img9-list-item354.jpg 354w, ./images/img9-list-item370.jpg 370w, ./images/img9-list-item450.jpg 450w",
      sizes: "(min-width: 1200px) 370px, (min-width: 768px) 354px, 100vw",
      src: "./images/img9-list-item354.jpg",
      alt: "Приложение Растущий бизнес",
    },
    description: "Технокряк это современная площадка распространения коронавируса. Компании используют эту платформу для цифрового шпионажа и атак на защищённые сервера конкурентов.",
    title: "Growing Business",
    text: "Приложение",
  },
];

export const getProducts = () => {
  return Promise.resolve(filter);
};

export const getProductById = (productId) => {
  return products.filter(({name}) => {
    return name.includes(productId);
  });
};