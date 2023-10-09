import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface LogInDialogProps {
  videoId: string;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const LogInDialog = ({ isOpen, setOpen, videoId }: LogInDialogProps) => {
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;
  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog open={isOpen} onClose={handleCloseDialog}>
      <DialogContent className='fondo'>
        <div className='flex flex-col'>
          <iframe title="YouTube Video" src={youtubeUrl} frameBorder="0" allowFullScreen></iframe>
          <div className='flex gap-2'>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { LogInDialog };