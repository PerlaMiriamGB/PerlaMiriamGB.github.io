import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Template = () => {
  return (
    <div className="relative">
      {/* Header section with gradient background */}
      <div className="introduction-profile-background min-h-[300px] lg:min-h-[400px]">
        <div className="content pt-20 lg:pt-31.5 px-4 max-xxl:px-4">
          {/* Back button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-picto-primary transition-colors mb-8"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Volver al inicio</span>
          </Link>

          {/* Page title */}
          <h1 className="text-3xl xxs:text-4xl sm:text-5xl xl:text-6xl font-semibold mb-6">
            Título de la página
          </h1>
          <p className="text-xs xxs:text-lg lg:text-[18px] text-gray-600 max-w-2xl">
            Descripción breve de esta sección. Puedes personalizar este texto
            según el contenido que necesites mostrar.
          </p>
        </div>
      </div>

      {/* Main content section */}
      <div className="content px-4 max-xxl:px-4 py-16 lg:py-24">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-16">
          {/* Content header */}
          <div className="mb-10">
            <p className="section-title mb-4">Sección de contenido</p>
            <div className="w-20 h-1 bg-picto-primary rounded-full"></div>
          </div>

          {/* Main content area - customize as needed */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
              Este es un template de página reutilizable. Puedes agregar aquí
              cualquier contenido que necesites: texto, imágenes, listas, etc.
            </p>

            {/* Example content blocks */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="bg-soft-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Bloque 1</h3>
                <p className="text-gray-600">
                  Contenido del primer bloque. Puedes usar esta estructura para
                  mostrar información organizada.
                </p>
              </div>
              <div className="bg-soft-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Bloque 2</h3>
                <p className="text-gray-600">
                  Contenido del segundo bloque. Personaliza según tus
                  necesidades.
                </p>
              </div>
            </div>
          </div>

          {/* Optional CTA section */}
          <div className="mt-16 pt-10 border-t border-gray-100 text-center">
            <p className="text-gray-600 mb-6">
              ¿Te gustaría saber más?
            </p>
            <Link
              to="/#contact"
              className="btn btn-primary btn-lg text-white"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
