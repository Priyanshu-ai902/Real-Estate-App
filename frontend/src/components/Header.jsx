import { FaSearch } from 'react-icons/fa';
import { Link , useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
    const { currentUser } = useSelector(state => state.user);
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if(searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);


    return (
        <header className='bg-blue-200 shadow-md sticky top-0 z-50 fixed'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <img className='h-10 w-10' src="https://pngfre.com/wp-content/uploads/House-2.png" alt="logo" />
                        <span className='text-slate-500 mt-2'>Doco</span>
                        <span className='text-slate-700 mt-2'>pull</span>
                    </h1>
                </Link>

                <form onSubmit={handleSubmit} className='bg-blue-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search....'
                        className='bg-transparent focus:outline-none w-24 sm:w-64'
                        onChange={(e) => setSearchTerm(e.target.value)} />
                        <button>

                    <FaSearch className='text-blue-700' />
                        </button>
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
