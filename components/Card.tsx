import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {

  return (
    <div className='flex flex-col bg-white p-4 hover:cursor-pointer custom-card justify-center items-center'>
      <div className='zoom-wrapper'>
        <Image className='rounded-md' src={image} height={160} width={160} alt='Playlist image' />
      </div>

      <span className='text-black font-semibold mt-5'>{title}</span>
      <span className='text-black mt-2'>{description}</span>
    </div>
  );
};

export { Card };