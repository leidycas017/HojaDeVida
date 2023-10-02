import { Bar } from "./Bar";
import { BiLayerPlus } from 'react-icons/bi'

const Sidebard = () => {
  return (

    <div className="flex min-h-screen gap-10 mr-8">
      <aside className="w-[340px] p-6 flex flex-col bg-gray-300 gap-2 items-center min-h-screen" >
        <div>
          <img
            className="perfil"
            src="/images/todays-top-hits.jpeg"
            alt="Foto de perfil"
          />
        </div>
        <div className="text-black p-2 text-center">
          <p className="text-lg font-bold">Leidy Castaño Castaño</p>
          <p >Estudiante de Ing. de Sistemas</p>
          <p >Universidad de Antioquia</p>
        </div>
        <div className="p-5 linea w-full">
        </div>

        <div className="text-black flex flex-col w-full">
          <div className="flex  justify-between">
            <strong>Ciudad de residencia:</strong>
            <span>Medellín</span>
          </div>
          <div className="flex justify-between" >
            <strong>Celular:</strong>
            <span>3148277136</span>
          </div>
          <div className="flex justify-between" >
            <strong>Correo:</strong>
            <span>leidy.castanoc@udea.edu.co</span>
          </div>
        </div>
        <div className="linea w-full">
        </div>


        <section className="text-black w-full py-5">
          <div className="main-title">
            <h3>
              <strong>Lenguajes</strong>
            </h3>
          </div>
          <div className="text-black py-2 flex flex-col w-full">
            <div className="flex  justify-between py-2">
              <strong>Español:</strong>
              <span>100%</span>
            </div>
            <div>
              <Bar porcentaje={100} />
            </div>
            
            <div className="flex justify-between py-2">
              <strong>Inglés:</strong>
              <span>70%</span>
            </div>
            <div>
              <Bar porcentaje={60} />
            </div>
          </div>
          <div className="linea w-full">
          </div>

        </section>

        <section className="text-black w-full py-4">
          <div className="main-title">
            <h3>
              <strong>Habilidades y Competencias Técnicas</strong>
            </h3>
          </div>
          <div className="flex justify-between py-2">
            <strong>SQL:</strong>
            <span>70%</span>
          </div>
          <div>
            <Bar porcentaje={70} />
          </div>
          <div className="text-black py-2 flex flex-col w-full">
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
              <strong>Cucumber:</strong>
              <span>45%</span>
            </div>
            <div>
              <Bar porcentaje={45} />
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
              <span>30%</span>
            </div>
            <div>
              <Bar porcentaje={30} />
            </div>
          </div>
          <div className="linea w-full">
          </div>
        </section>

        <section className="text-black w-full py-4">
          <div className="main-title">
            <h3>
              <strong>Habilidades Adicionales</strong>
            </h3>
            <div className="flex gap-3 mt-4">
              <BiLayerPlus className="icon-color" />
              <p>Modelado de datos, JDBC, JPA, MySQL</p>
            </div>
            <div className="flex gap-3 mt-1">
              <BiLayerPlus className="icon-color" />
              <p>Gestion de proyectos, Scrum</p>
            </div>
            <div className="flex gap-3 mt-1">
              <BiLayerPlus className="icon-color" />
              <p>Maven, Gradle, json, xml, jwt, Junit, git</p>
            </div>
            <div className="flex gap-3 mt-1">
              <BiLayerPlus className="icon-color" />
              <p>Microservicios, API REST</p>
            </div>
            <div className="flex gap-3 mt-1">
              <BiLayerPlus className="icon-color" />
              <p>HTML, CSS, Boostrap, Tailwind, Illustrator</p>
            </div>
          </div>


        </section>

        <section className="text-black w-full py-5">
          <div className="main-title">
            <h3>
              <strong>Habilidades Interpersonales</strong>
            </h3>
          </div>

        </section>


      </aside>
    </div>
  );
};

export { Sidebard };