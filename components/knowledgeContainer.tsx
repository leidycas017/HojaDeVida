import { Card } from "./Card"

interface KnowledgeContainerProps {
    name: string;
}

const KnowledgeContainer = ({ name }: KnowledgeContainerProps) => {
    return (
        <section className="flex flex-col gap-5 p-2 justify-center">
            <div className="flex justify-center mt-5">
                <span className="text-black text-2xl font-bold ">{name}</span>
            </div>
            <div className="flex justify-center">
                <span className="text-black">Diseño – Análisis – Desarrollo – Microservicios – Web – Móvil – Stand alone.</span>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                <Card image="/images/code.jpg" title="Desarrollo Back-End"
                    description="Diseño y creación de la lógica del servidor, 
                              estableciendo conexiones con bases de datos tanto SQL como 
                              NoSQL, ejecutando consultas de manera óptima y eficaz."/>
                <Card image="/images/data.jpg" title="Gestión de Bases de Datos"
                    description="Diseño y modelado de estructuras de bases de datos, 
                              considerando una arquitectura eficiente y adaptada a las necesidades 
                              específicas del sistema."/>
                <Card image="/images/git.jpg" title="Control de Versiones y Colaboración"
                    description="Uso de sistemas de control de versiones como Git para 
                              facilitar el trabajo colaborativo, la integridad del código y el 
                              registro histórico de las modificaciones realizadas."/>
                              <Card image="/images/ux_ui.jpg" title="Desarrollo Front-End"
                    description="Creación de la interfaz y experiencia del usuario (UI/UX), 
                              implementando tecnologías como Illustrator, adobe xd, HTML, CSS, 
                              JavaScript / Typescript."/>
                <Card image="/images/despliegue.jpg" title="Despliegue"
                    description="Configuración de entornos de 
                                producción y uso de tecnologías esenciales como AWS 
                                para garantizar un despliegue eficiente y efectivo."/>
                <Card image="/images/gestion.jpg" title="Gestión de proyectos "
                    description="Aplicación de scrum para fomentar la 
                                colaboración, la adaptación a los cambios y la definición de objetivos 
                                claros, para asegurar la entrega exitosa de soluciones tecnológicas."/>
            </div>
        </section>

    )

}

export { KnowledgeContainer }