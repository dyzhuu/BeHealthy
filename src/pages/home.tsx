import { Inter } from 'next/font/google';
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {

  async function promptMessage() {
    const message = prompt('Enter mindful thought')
    if (!message) {
      return
    }
    
  }
  

  return (
    <div className=''>
      <Button variant='contained'
        onClick={promptMessage}
      >asdf</Button>
    </div>
  );
}
