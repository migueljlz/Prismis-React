const HeroWelcome = () => (
  <section className="text-gray-700 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font md:text-6xl sm:text-5xl text-4xl mb-4 text-gray-900 uppercase font-black leading-none">
          Forma Parte de la Revolución Digital
        </h1>
        <p className="mb-8 leading-relaxed">
          Esta transformación ya está aquí, haz que tu negocio sea visible al
          mundo. No te quedes atrás. Avancemos juntos!
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-transparent border-accent border-2 hover:text-accent rounded text-lg shadow"
          >
            Comenzar
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded-tl-large rounded-br-large shadow-xl"
          alt="hero"
          src="/profilephoto.jpg"
        />
      </div>
    </div>
  </section>
);

export default HeroWelcome;
