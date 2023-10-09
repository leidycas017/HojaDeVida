import Image from 'next/image';


const scrollToSection = () => {
  const section = document.getElementById('portafolio');
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth' 
    });
  }
};


const Display = () => {
  return (
    <section className="bg-white p-5">
      <div className="flex items-center justify-center gap-10">
        <div className="w-2/4">
          <p className="text-black">
            <span className="texto-grande-bold font-roboto">
              Soy <span className='name py-1 px-2 rounded'>Leidy Castaño</span> <br />
              Est. de <span className="ing">Ingeniería de Sistemas</span>
            </span>
            <br />

            <p className="font-questrial text-base mt-3 mb-3">
              Desarrolladora Full stack, lista para marcar una diferencia positiva en el mundo digital que está en constante evolución, pues me apasiona la resolución de problemas y el aprendizaje continuo con un enfoque creativo y apasionado por el diseño funcional, lo que me impulsa a enfrentar desafíos y crear nuevas soluciones tecnológicas.
            </p>

            <button className="bg-[#aae5db] rounded-full  text-black font-bold py-2 px-4 mt-2 custom-button-social hover:cursor-pointer" onClick={scrollToSection}>
              Portafolio
            </button>
          </p>
        </div>

        <div className="xl:flex items-center hidden">
          <Image src="/images/f.png" height={300} width={300} alt="Photo" />
        </div>
      </div>

    </section>

  )

}

export { Display }