import { Link, Outlet } from 'react-router-dom';
import userImg from '../../assets/user.jpg';
import { IoHome, IoDiamond } from 'react-icons/io5';
import { MdAddTask } from 'react-icons/md';
import { FaTable } from 'react-icons/fa';

const HomeLayout = () => {
  return (
    <div className='flex font-roboto'>
      <aside className='text-white bg-[#032330] min-h-screen'>
        <header className='px-8 py-5 h-[74px]'>
          <h1 className='text-2xl font-shojumaru'>Learn English</h1>
        </header>
        <div className='flex items-center justify-start gap-3 pl-8 mt-4 mb-4'>
          <IoHome className='text-lg' />
          <Link to='/' className='text-lg hover:underline'>
            Homepage
          </Link>
        </div>
        <div className='flex items-center justify-start gap-3 pl-8 mb-4'>
          <MdAddTask className='text-lg' />
          <Link to='/sentences/add' className='text-lg hover:underline'>
            Add sentences
          </Link>
        </div>
        <div className='flex items-center justify-start gap-3 pl-8'>
          <FaTable className='text-lg' />
          <Link to='/sentences' className='text-lg hover:underline'>
            List sentences
          </Link>
        </div>
      </aside>

      <main className='flex-1 overflow-visible bg-slate-100'>
        <div className='flex gap-10 justify-end items-center h-[74px] shadow-lg px-10 sticky top-0 bg-white'>
          <div className='flex items-center gap-2'>
            <span className='text-xl italic font-medium text-red-500'>0</span>
            <IoDiamond className='text-2xl text-red-500' />
          </div>
          <div className='flex items-center gap-2'>
            <img
              src={userImg}
              alt='Chip-thoi'
              className='rounded-full w-9 h-9'
            />
            <p className='text-lg italic uppercase'>Trần Khánh Chi</p>
          </div>
        </div>

        {/* Phần trung tâm hiển thị game */}
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
