import Link from "next/link";

const Header = () => (
  <header className="text-gray-700 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href="/">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Diego Plascencia</span>
        </a>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="#services" className="mr-5 hover:text-gray-900">
          Servicios
        </a>
        <a href="#features" className="mr-5 hover:text-gray-900">
          Beneficios
        </a>
        <a href="#steps" className="mr-5 hover:text-gray-900">
          Proceso
        </a>
        <a href="#contact" className="mr-5 hover:text-gray-900">
          Contacto
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
