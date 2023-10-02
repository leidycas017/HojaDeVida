import Image from 'next/image';

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
}

const PlaylistCard = ({ title, description, image }: PlaylistCardProps) => {
  return (
    <div className='flex flex-col bg-spotify-light-black-3 rounded-md w-[192px] p-4 gap-2 hover:cursor-pointer hover:bg-dark-gray'>
      <Image className='rounded-md' src={image} height={160} width={160} alt='Playlist image' />
      <span className='text-white font-semibold'>{title}</span>
      <span className='text-mid-gray'>{description}</span>
    </div>
  );
};

export { PlaylistCard };