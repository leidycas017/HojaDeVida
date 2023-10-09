

interface EducationProps {
    name: string;
}

const Education = ({ name }: EducationProps) => {
    return (
        <section className="flex flex-col gap-5 p-2">
            <div className="flex justify-center mt-5">
                <span className="text-black text-2xl font-bold ">{name}</span>
            </div>
            <div className="flex justify-center">
                <span className="text-black">Enfoque integral en análisis, diseño y desarrollo de soluciones tecnológicas.</span>
            </div>
            <div className="bg-white p-8">
                <div className="grid grid-cols-3 auto-cols-fr gap-20 justify-start">
                    <div className="flex flex-col items-center">
                        <p className="font-bold" >Universidad de Antioquia</p>
                        <div className="fondo mt-2">
                            <p className="text-xs px-2 py-1 text-black">Ene 2018 - Jun 2024</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">Ingeniería de Sistemas</p>
                        <p className="mr-5 mt-4">Durante mi trayectoria universitaria, mi enfoque se centró en las buenas prácticas del desarrollo de software, desde aspectos esenciales como el análisis, diseño, arquitectura, bases de datos y calidad, además de explorar y aplicar la cultura DevOps, el marco de trabajo scrum y la gestión eficiente de proyectos.</p>
                    </div>
                </div>

                <div className="p-5 linea w-full"></div>

                <div className="grid grid-cols-3 auto-cols-fr gap-20 justify-start">
                    <div className="flex flex-col items-center">
                        <p className="font-bold text-center" >Organización Internacional del Trabajo</p>
                        <div className="fondo mt-2">
                            <p className="text-xs px-2 py-1 text-black">Jul 2022- Oct 2022</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">Diplomado en desarrollo Full Stack</p>
                        <p className="mr-5 mt-4">El diplomado se basó en la realización de trabajos prácticos sobre arquitectura web, abordando la gestión eficiente de datos, utilizando Angular para el frontend y java en el backend, estos conocimientos me proporcionaron una comprensión integral de la arquitectura y desarrollo web, permitiéndome crear soluciones completamente funcionales.</p>
                    </div>
                </div>

                <div className="p-5 linea w-full"></div>

                <div className="grid grid-cols-3 auto-cols-fr gap-20 justify-start">
                    <div className="flex flex-col items-center">
                        <p className="font-bold text-center" > SENA</p>
                        <div className="fondo mt-2">
                            <p className="text-xs px-2 py-1 text-black">Ene 2012 – Nov 2014</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <p className="font-bold">Tecnóloga en diseño gráfico y técnica en preprensa digital</p>
                        <p className="mr-5 mt-4">Durante mi formación adquirí conocimientos sobre la creación de piezas gráficas digitales, preparando bocetos y fotografías para concebir ideas visuales, además, aprendí a preparar especificaciones detalladas para los diseños y a determinar el medio más adecuado para lograr el efecto visual deseado.</p>
                    </div>
                </div>

            </div>





        </section>
    )

}

export { Education }