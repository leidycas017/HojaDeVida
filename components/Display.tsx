import Image from 'next/image';

const Display = () => {
    return (
        <section className="bg-gray-300 p-10">
            <div className="flex gap-10">
                <p className='text-black'><span className='texto-grande-bold font-roboto'>Soy Leidy Castaño <br></br>
                   Estudiante de <span className="icon-color">Ingeniería de Sistemas</span></span>
                   <br />
                   
                   <p className='font-questrial'>Desarrolladora Full stack, con habilidades sólidas en APIs, servicios web, bases de datos y gestión de proyectos. Mi enfoque creativo y apasionado por el diseño funcional me impulsa a enfrentar desafíos y crear nuevas soluciones tecnológicas. Estoy lista para marcar una diferencia positiva en el mundo digital que está en constante evolución, me apasiona la resolución de problemas y el aprendizaje continuo.</p>
                   </p>
                <Image src="/images/todays-top-hits.jpeg" height={300} width={250} alt='Photo' />
            </div>
            <div>
                
            </div>
            <button className="button-color custom-button text-white font-bold py-2 px-4 rounded">
    Mi Botón
  </button>


        </section>

    )

}

export { Display }