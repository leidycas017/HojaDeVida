
import Image from 'next/image';
import { LogInDialog } from './LoginDialog';
import { useState } from 'react';

interface CardPortafolioProps {
  title: string;
  description: string;
  image: string;
  videoId: string;
}

const CardPortafolio = ({ title, description, image, videoId }: CardPortafolioProps) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleLoginClick = () => {
    setDialogOpen(true);
  };
  return (
    <div className='flex flex-col bg-white w-[300px] p-4 gap-2 hover:cursor-pointer custom-card justify-center items-center'>
      <div className='flex flex-col'>
        <div className='zoom-wrapper'>
        <Image className='rounded-md' src={image} height={300} width={300} alt='Playlist image' />
        </div>
        
        <span className='text-black font-semibold mt-2'>{title}</span>
        <span className='text-black mt-2 mb-2'>{description}</span>
        <a href='#' onClick={handleLoginClick} className='custom-mas'>Ver más &gt;</a>
      </div>

      <LogInDialog isOpen={dialogOpen} setOpen={setDialogOpen} videoId={videoId}/>

    </div>
  );
};

export { CardPortafolio };