import { RxSpeakerLoud } from 'react-icons/rx';
import { BsTrash } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { deleteSentence, getAllSentences } from '../api/webApi';

const ListSentences = () => {
  const navigate = useNavigate();
  const [sentences, setSentences] = useState([]);

  useEffect(() => {
    const fetchSentences = async () => {
      try {
        const response = await getAllSentences();
        setSentences(response.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

    fetchSentences();
  }, []);

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages =
    sentences.length > 0
      ? sentences.reduce((max, s) => {
          return s.lesson > max ? s.lesson : max;
        }, sentences[0].lesson)
      : 1;

  const pageArr = [];
  for (let i = 1; i <= totalPages; i++) {
    pageArr.push(i);
  }

  // useEffect để reset lại trang nếu tổng số trang thay đổi khi tìm kiếm/xóa
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    } else if (totalPages === 0 && currentPage !== 1) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  // Hiển thị theo trang (trang chính là lesson)
  const currentSentence = sentences.filter((s) => s.lesson === currentPage);

  // Thay đổi trang
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handlePaginate = (e) => {
    const page = Number(e.target.value);
    if (page >= 1 && page <= totalPages) {
      paginate(page);
    }
  };

  // EDIT button
  const editSentence = (id) => {
    navigate(`/sentences/edit/${id}`);
  };

  // DELETE button
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await deleteSentence(id);
      setSentences((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
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
    <div className='px-10 py-10 mx-10 my-10 bg-white border rounded-lg shadow-2xl'>
      <h2 className='mb-6 text-xl font-medium'>List Sentences</h2>
      <table className='w-full mb-10'>
        <thead>
          <tr className='bg-gray-100 border '>
            <th className='w-1/12 py-3 border-r'>Stt</th>
            <th className='py-3 border-r '>Vietnamese</th>
            <th className='py-3 border-r '>English</th>
            <th className='w-1/12 py-3 border-r'>Listen</th>
            <th className='w-2/12 py-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentSentence.map((page, index) => (
            <tr className='border' key={page.id}>
              <td className='py-3 text-center border-r'>{index + 1}</td>
              <td className='py-3 pl-3 text-left border-r'>
                {page.contentVietnamese}
              </td>
              <td className='py-3 pl-3 text-left border-r'>
                {page.contentEnglish}
              </td>
              <td className='py-3 border-r'>
                {/* READ sentence English */}
                <RxSpeakerLoud
                  className='mx-auto text-xl text-blue-800 duration-700 ease-out hover:cursor-pointer hover:scale-125'
                  onClick={() => speak(page.contentEnglish)}
                />
              </td>
              <td className='flex items-center justify-center gap-6 py-3'>
                {/* DELETE button */}
                <BsTrash
                  className='text-xl text-red-700 duration-700 ease-out hover:cursor-pointer hover:scale-125'
                  onClick={() => handleDelete(page.id)}
                />
                {/* EDIT button */}
                <CiEdit
                  className='text-2xl text-green-600 duration-700 ease-out hover:cursor-pointer hover:scale-125'
                  onClick={() => editSentence(page.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân trang */}
      <ul className='flex justify-center gap-4'>
        <li>
          <button
            className='px-3 py-1 bg-gray-100 border rounded-md hover:bg-blue-600 hover:text-white'
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}>
            <FaArrowLeft />
          </button>
        </li>

        <li>
          <span className='px-4 py-1 text-center border rounded-md'>
            <input
              type='number'
              min={1}
              max={totalPages}
              value={currentPage}
              className='w-10 text-center'
              onChange={handlePaginate}
            />
            / {totalPages}
          </span>
        </li>

        <li>
          <button
            className='px-3 py-1 bg-gray-100 border rounded-md hover:bg-blue-600 hover:text-white'
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}>
            <FaArrowRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListSentences;
