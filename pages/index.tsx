
import { Display } from "@/components/Display";
import { Education } from "@/components/Education";
import { Portafolio } from "@/components/Portafolio";
import { Sidebard } from "@/components/Sidebard";
import { Sidebari } from "@/components/Sidebari";
import { KnowledgeContainer } from "@/components/knowledgeContainer";



const Home = () => {
  return (
    <div className="  min-h-screen fondo flex font-questrial justify-between">


      <Sidebard />




      <main className='w-2/3'>


        <div className="mr-8 flex-1">
          <Display />
          <KnowledgeContainer name={'Dominio Profesional'} />
          <Education name={'Educación'} />
           <Portafolio name={'Portafolio'} />


          <div className="footer mt-5">
            <p>© 2023 Copyright</p>
          </div>
        </div>

        
      </main>
      

      <Sidebari />




    </div>
  );
};


export default Home;
