import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4'>
      <h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
        Không tìm thấy trang
      </h2>
      <p className='text-gray-600 mb-6'>
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Link
        to='/'
        className='px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300'>
        Quay về Trang chủ
      </Link>
    </div>
  );
}

export default NotFoundPage;
