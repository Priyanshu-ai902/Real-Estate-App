import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const { currentUser } = useSelector(state => state.user)
    return (
        <header className='bg-blue-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Doco</span>
                        <span className='text-slate-700'>pull</span>
                    </h1>
                </Link>

                <form className='bg-blue-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Seach....'
                        className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-blue-700' />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-blue-800 hover:underline'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hidden sm:inline text-blue-800 hover:underline'>About</li>
                    </Link>


                    <Link to='/profile'>
                        {currentUser ? (
                            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile" />
                        ) : (
                            < li className=' text-blue-800 hover:underline'>Sign in</li>
                        )}
                    </Link>
                </ul>
            </div>
        </header >
    )
}
