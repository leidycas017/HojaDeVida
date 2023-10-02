
import { Display } from "@/components/Display";
import { Sidebard } from "@/components/Sidebard";
import { Sidebari } from "@/components/Sidebari";
import { PlaylistContainer } from "@/components/playlistContainer";


const Home = () => {
  return (
    <div className="text-white min-h-screen flex font-questrial">
      {/* Primer aside (izquierda) */}
      <Sidebard />

      <main className='w-full h-full flex flex-col'>
        {/* Contenido en el centro */}
        <div className="container-card flex flex-col h-full">
          <div className="h-full flex flex-col mr-8 mb-5">
            <Display/>
          </div>
          <PlaylistContainer name={'Spotify playlist'} />
          <PlaylistContainer name={'Focus'} />
        </div>
      </main>

      {/* Segundo aside (derecha) */}
      <Sidebari />
    </div>
  );
};


export default Home;
