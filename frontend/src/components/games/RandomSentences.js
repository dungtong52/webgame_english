import { useEffect, useState } from 'react';
import { getAllSentences } from '../../api/webApi';
import gifCard from '../../assets/gif-card.gif';
import { RxSpeakerLoud } from 'react-icons/rx';

const RandomSentences = () => {
  const [sentences, setSentences] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  // Fetch sentences
  useEffect(() => {
    const loadSentences = async () => {
      try {
        const response = await getAllSentences();
        setSentences(response.data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadSentences();
  }, []);

  // Start button
  const startDisplay = () => {
    setCurrentIndex(0);
    setIsStarted(true);
  };

  // Next Sentences
  const nextSentence = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsStarted(false);
    }
  };
  // Before Sentences
  const beforeSentence = () => {
    if (currentIndex > 1) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setIsStarted(false);
    }
  };

  // SpeechSynthesis API
  const speak = (text) => {
    if (!window.speechSynthesis) {
      alert('Trình duyệt của bạn không hỗ trợ SpeechSynthesis.');
      return;
    }
    // Dừng nếu đang nói
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className='mt-16 text-center'>
      <h2 className='mb-10 text-4xl font-semibold uppercase font-roboto'>
        🎯 Thẻ bài ma thuật 🎯
      </h2>

      {isStarted && sentences.length > 0 && currentIndex < sentences.length && (
        <p className='mb-6 text-xl'>
          Câu {currentIndex + 1} / {sentences.length}
        </p>
      )}

      {/* Hiển thị câu */}
      <div className='flex items-center justify-center gap-16'>
        <div className='w-[500px] h-[300px] flex items-center justify-center p-6 text-3xl bg-white border shadow rounded-xl'>
          {isStarted &&
          sentences.length > 0 &&
          currentIndex < sentences.length ? (
            <p>{sentences[currentIndex].contentVietnamese}</p>
          ) : isStarted && currentIndex >= sentences.length ? (
            <p>DONE</p>
          ) : (
            <img
              src={gifCard}
              alt='anh-de-thuong'
              className='object-contain w-full h-full rounded-xl'
            />
          )}
        </div>
      </div>

      {/* BUTTONS*/}
      <div className='mt-10 space-x-4'>
        {!isStarted && (
          <button
            type='button'
            onClick={startDisplay}
            className='px-8 py-3 text-xl font-medium text-green-800 bg-green-200 border rounded-full shadow-md hover:cursor-pointer hover:scale-105'>
            Let's go
          </button>
        )}

        {isStarted && currentIndex < sentences.length - 1 && (
          <div className='flex justify-center gap-8'>
            <button
              type='button'
              onClick={beforeSentence}
              disabled={currentIndex === 1}
              className='px-8 py-3 text-xl font-medium text-green-800 bg-green-200 border rounded-full shadow-md hover:cursor-pointer hover:scale-105'>
              Before
            </button>
            <button
              type='button'
              onClick={nextSentence}
              disabled={currentIndex === sentences.length - 1}
              className='px-8 py-3 text-xl font-medium text-blue-800 bg-blue-200 border rounded-full shadow-md hover:cursor-pointer hover:scale-105'>
              Next
            </button>
          </div>
        )}

        {isStarted && currentIndex >= sentences.length - 1 && (
          <button
            type='button'
            onClick={startDisplay}
            className='px-8 py-3 text-xl font-medium text-green-800 bg-green-200 border rounded-full shadow-md hover:cursor-pointer hover:scale-105'>
            Bắt đầu lại
          </button>
        )}
      </div>

      {/* ANSWER */}
      <div>
        {/* READ sentence English */}
        <RxSpeakerLoud
          className='mx-auto mt-10 text-5xl text-red-800 duration-700 ease-out hover:cursor-pointer hover:scale-125'
          onClick={() => speak(sentences[currentIndex].contentEnglish)}
        />
      </div>
    </div>
  );
};

export default RandomSentences;
