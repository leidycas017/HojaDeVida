

import { useState } from 'react';

const Navbar = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  
    const handleLoginClick = () => {
      setDialogOpen(true);
    };
  
    return (
      <nav className='bg-spotify-black flex items-center justify-between px-5 py-2 rounded-md'>
        <div className='flex gap-3 text-xl'>
          <div className='bg-spotify-black2 p-1 rounded-full text-spotify-black4-2'>
           
          </div>
          <div className='bg-spotify-black2 p-1 rounded-full text-spotify-black4-2'>
           
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <span className='menu-text'>Premium</span>
          <span className='menu-text'>Support</span>
          <span className='menu-text'>Download</span>
          <div className='vertical-separator' />
          <span className='menu-text'>Sign up</span>

        </div>

      </nav>
    );
  };
  
  export { Navbar };