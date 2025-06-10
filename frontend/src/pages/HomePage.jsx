import { useNavigate } from 'react-router';
import randomImg from '../assets/random-sentences.jpg';
import wordBlockImg from '../assets/word-block.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='pr-10 pl-16 mt-[74px]'>
      <h2 className='mb-10 text-3xl font-medium uppercase'>List Games</h2>
      <div className='flex flex-wrap gap-16 '>
        <button
          className='btn-card'
          onClick={() => navigate('/games/random-sentences')}>
          <img src={randomImg} alt='clock' className='block w-full mt-5' />
          <h2 className='text-2xl italic font-medium text-center'>
            Random Sentences
          </h2>
        </button>
        <button
          className='btn-card'
          onClick={() => navigate('/games/sentences-builder')}>
          <img src={wordBlockImg} alt='word' className='block w-full mt-5' />
          <h2 className='text-2xl italic font-medium text-center'>
            Sentences Builder
          </h2>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
