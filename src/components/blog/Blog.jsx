import logoHipnoterapia from "../../assets/logos/logo_hipnoterapia.png";
import logoTapping from "../../assets/logos/logo_tapping.png";
import logoEnergia from "../../assets/logos/logo_energia.png";
import logoBioenergetica from "../../assets/logos/logo_bioenergetica.png";
import logoBioNeuro from "../../assets/logos/logo_bioneuro.png";
import logoMetodo from "../../assets/logos/logo_metodo.png";
import logoLiberacion from "../../assets/logos/logo_liberacion.png";
import logoAccess from "../../assets/logos/logo_access.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: logoHipnoterapia,
    title: "Hipnoterapia",
    description:"Técnica terapéutica que utiliza un estado de relajación profunda para acceder al subconsciente y facilitar cambios positivos en pensamientos, emociones y comportamientos.",
    link: "#!",
  },
  {
    id: 2,
    image: logoTapping,
    title: "Emotional Freedom Technique (Tapping)",
    description: "Método que combina la estimulación de puntos energéticos mediante suaves golpeteos con el enfoque emocional, ayudando a liberar bloqueos y reducir el estrés.",
    link: "#!",
  },
  {
    id: 3,
    image: logoEnergia,
    title: "Energía Universal",
    description:
        "Práctica orientada a armonizar el flujo energético del cuerpo, favoreciendo el equilibrio físico, emocional y mental a través de la conexión con la energía vital.",
    link: "#!",
  },
  {
    id: 4,
    image: logoBioenergetica,
    title: "Bionergética",
    description:
        "Enfoque que trabaja la relación entre cuerpo y energía, utilizando movimientos, respiración y conciencia corporal para liberar tensiones y activar la vitalidad.",
    link: "#!",
  },
  {
    id: 5,
    image: logoBioNeuro,
    title: "Bioneuroemoción",
    description:
        "Método que explora la conexión entre emociones, mente y cuerpo para identificar el origen emocional de ciertos conflictos y promover una mayor comprensión personal.",
    link: "#!",
  },
  {
    id: 6,
    image: logoMetodo,
    title: "Método Yuen",
    description:
        "Técnica integral que busca corregir desequilibrios físicos, energéticos y emocionales, fortaleciendo el cuerpo y el sistema nervioso de forma precisa y rápida.",
    link: "#!",
  },
  {
    id: 7,
    image: logoLiberacion,
    title: "Liberación de la Mandíbula",
    description:
        "Terapia centrada en aliviar tensiones acumuladas en la mandíbula, zona clave donde se almacena estrés emocional y físico, favoreciendo la relajación general.",
    link: "#!",
  },
  {
    id: 8,
    image: logoAccess,
    title: "Access Consciousness",
    description:
        "Herramientas diseñadas para expandir la conciencia, liberar limitaciones mentales y emocionales, y abrir nuevas posibilidades de elección en la vida diaria.",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pt-20 pb-0">Áreas de especialidad</p>
        {/*<p className="text-xs xs:text-[16px] md:text-lg text-gray-400">*/}
        {/*  Check out my recent blog posts where I share insights on design,*/}
        {/*  development, and the latest industry trends.*/}
        {/*</p>*/}
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
