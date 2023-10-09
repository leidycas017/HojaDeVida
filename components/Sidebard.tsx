import { Bar } from "./Bar";
import { BiLayerPlus } from 'react-icons/bi'
import {GiPositionMarker} from 'react-icons/gi'
import {MdEmail} from 'react-icons/md'

const Sidebard = () => {
  return (

      <aside className="p-6 flex flex-col self-start sticky top-0 bg-white max-md:hidden gap-2 mr-8 items-center min-h-screen" >

        <div>
          <img
            className="perfil"
            src="/images/f2.png"
            alt="Foto de perfil"
          />
        </div>
        <div className="text-black text-center mt-5">
          <p className="text-lg font-bold">Leidy Castaño Castaño</p>
          <p >Estudiante de Ing. de Sistemas</p>
          <p >Universidad de Antioquia</p>
        </div>
        <div className="linea w-full"></div>

        <div className="text-black flex flex-col ">
          <div className="flex gap-3 items-center">
          <GiPositionMarker className="icon-color"/>
            <span>Medellín</span>
          </div>
          <div className="flex gap-3 items-center mt-2" >
          <MdEmail className="icon-color"/>
            <span>leidy.castanoc@udea.edu.co</span>
          </div>
        </div>
        <div className="linea w-full"></div>


        <section className="text-black">
          <div className="main-title">
            <h3>
              <strong>Lenguajes</strong>
            </h3>
          </div>
          <div className="text-black py-2 flex flex-col">
            <div className="flex  justify-between py-2">
              <strong>Español:</strong>
              <span>100%</span>
            </div>
            <div>
              <Bar porcentaje={100} />
            </div>

            <div className="flex justify-between py-2">
              <strong>Inglés:</strong>
              <span>75%</span>
            </div>
            <div>
              <Bar porcentaje={75} />
            </div>
          </div>
        </section>

        <div className="linea w-full"></div>

        <section className="text-black">
          <div className="main-title">
            <h3>
              <strong>Habilidades y Competencias Técnicas</strong>
            </h3>
          </div>

          <div className="text-black py-2 flex flex-col">
            <div className="flex justify-between py-2">
              <strong>SQL:</strong>
              <span>70%</span>
            </div>
            <div>
              <Bar porcentaje={70} />
            </div>
            <div className="flex  justify-between py-2">
              <strong>java:</strong>
              <span>80%</span>
            </div>
            <div>
              <Bar porcentaje={80} />
            </div>
            <div className="flex  justify-between py-2">
              <strong>Spring Boot:</strong>
              <span>70%</span>
            </div>
            <div>
              <Bar porcentaje={70} />
            </div>
            <div className="flex  justify-between py-2">
              <strong>Typescript:</strong>
              <span>50%</span>
            </div>
            <div>
              <Bar porcentaje={50} />
            </div>

            <div className="flex  justify-between py-2">
              <strong>Kotlin:</strong>
              <span>50%</span>
            </div>
            <div>
              <Bar porcentaje={50} />
            </div>
            <div className="flex  justify-between py-2">
              <strong>Angular:</strong>
              <span>50%</span>
            </div>
            <div>
              <Bar porcentaje={50} />
            </div>
            <div className="flex  justify-between py-2">
              <strong>React:</strong>
              <span>50%</span>
            </div>
            <div>
              <Bar porcentaje={50} />
            </div>
          </div>
        </section>
        <div className="linea w-full"></div>

        <div className="text-black">
          <div className="main-title">
            <h3>
              <strong>Habilidades Adicionales</strong>
            </h3>
            <div className="flex gap-3 mt-4 items-center">
              <BiLayerPlus className="icon-color" />
              <p>Modelado de datos, JDBC, JPA, MySQL</p>
            </div>
            <div className="flex gap-3 mt-1 items-center">
              <BiLayerPlus className="icon-color" />
              <p>Gestion de proyectos, Scrum</p>
            </div>
            <div className="flex gap-3 mt-1 items-center">
              <BiLayerPlus className="icon-color" />
              <p>Maven, Gradle, json, xml, jwt, Junit, git</p>
            </div>
            <div className="flex gap-3 mt-1 items-center">
              <BiLayerPlus className="icon-color" />
              <p>Microservicios, API REST</p>
            </div>
            <div className="flex gap-3 mt-1 items-center">
              <BiLayerPlus className="icon-color" />
              <p>HTML, CSS, Boostrap, Tailwind</p>
            </div>
            <div className="flex gap-3 mt-1 items-center">
              <BiLayerPlus className="icon-color" />
              <p>Illustrator, Photoshop, Adobe XD</p>
            </div>
          </div>


        </div>

      </aside>
   
  );
};

export { Sidebard };