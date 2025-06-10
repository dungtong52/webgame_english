import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getSentenceById } from '../../api/webApi';

const AddOrEditLayout = ({ mode = 'add-sentence', onSubmit }) => {
  const [msg, setMsg] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const defaultSentence = {
    id: '',
    contentVietnamese: '',
    contentEnglish: '',
    lesson: '',
  };
  const [formData, setFormData] = useState(defaultSentence);

  useEffect(() => {
    const loadSentences = async () => {
      try {
        const response = await getSentenceById(id);
        const editSentence = response.data;
        setFormData({ ...defaultSentence, ...editSentence });
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    if (id && mode === 'edit-sentence') {
      loadSentences();
    } else if (mode === 'add-sentence') {
      setFormData(defaultSentence);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, mode]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
      if (id && mode === 'edit-sentence') {
        setMsg('Sentence updated successfully!');
        setTimeout(() => {
          navigate('/sentences');
        }, 800);
      } else if (mode === 'add-sentence') {
        setFormData(defaultSentence);
        setMsg('Sentence added successfully!');
      }
    }
  };
  return (
    <div className='px-10 py-10 mx-10 my-10 bg-white border rounded-lg shadow-2xl'>
      <h2 className='mb-6 text-xl font-medium'>
        {mode === 'add-sentence' ? 'Add New Sentence' : 'Edit Sentence'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='mt-6'>
          <label htmlFor='englishSentence'>Câu tiếng Anh:</label>
          <input
            type='text'
            id='englishSentence'
            name='contentEnglish'
            className='w-full px-4 py-2 mt-2 text-base border rounded-lg bg-gray-50'
            value={formData.contentEnglish}
            onChange={handleChange}
          />
        </div>
        <div className='mt-6'>
          <label htmlFor='vietnameseSentence'>Nghĩa tiếng Việt:</label>
          <input
            type='text'
            id='vietnameseSentence'
            name='contentVietnamese'
            className='w-full px-4 py-2 mt-2 text-base border rounded-lg bg-gray-50'
            value={formData.contentVietnamese}
            onChange={handleChange}
          />
        </div>
        <div className='mt-6'>
          <label htmlFor='lesson'>Ngày học:</label>
          <input
            type='number'
            id='lesson'
            name='lesson'
            className='w-full px-4 py-2 mt-2 text-base border rounded-lg bg-gray-50'
            value={formData.lesson}
            onChange={handleChange}
          />
        </div>
        {mode === 'add-sentence' ? (
          <button
            type='submit'
            className='px-6 py-3 mt-6 font-normal text-white bg-blue-600 border rounded-xl'>
            Add
          </button>
        ) : (
          <button
            type='submit'
            className='px-6 py-3 mt-6 font-normal text-white bg-orange-600 border rounded-xl'>
            Save
          </button>
        )}
      </form>
      {/* Thông báo sau khi submit */}
      {msg && (
        <div className='fixed p-4 my-4 text-green-700 bg-green-100 border border-green-400 rounded shadow-md top-4 left-1/2 slide-down'>
          {msg}
        </div>
      )}
    </div>
  );
};

export default AddOrEditLayout;
