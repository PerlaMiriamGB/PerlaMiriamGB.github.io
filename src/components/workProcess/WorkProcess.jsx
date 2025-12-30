import WorkSteps from "./WorkSteps";
import logoHipnoterapia from "../../assets/logos/logo.png";
import logoTapping from "../../assets/logos/logo_tapping.png";
import logoEnergia from "../../assets/logos/logo_energia.png";
import logoBioenergetica from "../../assets/logos/logo_bioenergetica.png";
import logoBioNeuro from "../../assets/logos/logo_bioneuro.png";
import logoMetodo from "../../assets/logos/logo_metodo.png";
import logoLiberacion from "../../assets/logos/logo_liberacion.png";
import logoAccess from "../../assets/logos/logo_access.png";

const workStepData = [
  {
    id: 1,
    title: "Hipnoterapia",
    description:
        "Técnica terapéutica que utiliza un estado de relajación profunda para acceder al subconsciente y facilitar cambios positivos en pensamientos, emociones y comportamientos.",
    imagePath: logoHipnoterapia,
  },
  {
    id: 2,
    title: "Emotional Freedom Technique (Tapping)",
    description:
      "Método que combina la estimulación de puntos energéticos mediante suaves golpeteos con el enfoque emocional, ayudando a liberar bloqueos y reducir el estrés.",
    imagePath: logoTapping,
  },
  {
    id: 3,
    title: "Energía Universal",
    description:
      "Práctica orientada a armonizar el flujo energético del cuerpo, favoreciendo el equilibrio físico, emocional y mental a través de la conexión con la energía vital.",
    imagePath: logoEnergia,
  },
  {
    id: 4,
    title: "Bionergética",
    description:
      "Enfoque que trabaja la relación entre cuerpo y energía, utilizando movimientos, respiración y conciencia corporal para liberar tensiones y activar la vitalidad.",
    imagePath: logoBioenergetica,
  },
  {
    id: 5,
    title: "Bioneuroemoción",
    description:
        "Método que explora la conexión entre emociones, mente y cuerpo para identificar el origen emocional de ciertos conflictos y promover una mayor comprensión personal.",
    imagePath: logoBioNeuro,
  },
  {
    id: 6,
    title: "Método Yuen",
    description:
        "Técnica integral que busca corregir desequilibrios físicos, energéticos y emocionales, fortaleciendo el cuerpo y el sistema nervioso de forma precisa y rápida.",
    imagePath: logoMetodo,
  },
  {
    id: 7,
    title: "Liberación de la Mandíbula",
    description:
        "Terapia centrada en aliviar tensiones acumuladas en la mandíbula, zona clave donde se almacena estrés emocional y físico, favoreciendo la relajación general.",
    imagePath: logoLiberacion,
  },
  {
    id: 8,
    title: "Access Consciousness",
    description:
        "Herramientas diseñadas para expandir la conciencia, liberar limitaciones mentales y emocionales, y abrir nuevas posibilidades de elección en la vida diaria.",
    imagePath: logoAccess,
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-1 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Áreas de especialidad</p>
        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Driven by design and powered by code, I create digital interfaces that
          feel intuitive and perform seamlessly. Every layout, animation, and
          component is crafted with intention — merging usability with visual
          clarity, I blend clean design with efficient code to build engaging,
          user-friendly web experiences that stand out.
        </p>
      </div>

      <div className="grid xs:grid-cols-4 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-6 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                "xs:mb-6 xs:mr-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
