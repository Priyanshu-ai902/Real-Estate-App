import React from 'react'

export default function Search() {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='p-7 border-b-2 md:border-r-2 md:min-h-screen'>
                <form className='flex flex-col gap-8'>
                    <div className='flex items-center gap-2'>
                        <label className='whitespace-nowrap text-white  font-semibold'>
                            Search Term:
                        </label >
                        <input type="text"
                            id='searchTerm'
                            placeholder='Search...'
                            className='border rounded-lg p-3 w-full' />
                    </div>
                    <div className='flex gap-2 flex-wrap items-center'>
                        <label className='text-white'>Type:</label>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='all' className='w-5' />
                            <span className='text-white'>Rent & Sale</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='rent' className='w-5' />
                            <span className='text-white'>
                                Rent
                            </span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='sale' className='w-5' />
                            <span className='text-white'>Sale</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='offer' className='w-5' />
                            <span className='text-white'>offer</span>
                        </div>
                    </div>
                    <div className='flex gap-2 flex-wrap items-center'>
                        <label className='text-white'>Amenities:</label>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='parking' className='w-5' />
                            <span className='text-white'>Parking</span>
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" id='furnished' className='w-5' />
                            <span className='text-white'>
                                Furnished
                            </span>
                        </div>

                    </div>

                    <div className='flex items-center gap-2
                    '>
                        <label className='text-white'>Sort:</label>
                        <select className='border rounded-lg p-3' id="sort_order">
                            <option>Price high to low</option>
                            <option>Price low to high</option>
                            <option>Latest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                    <button className='bg-blue-500 text-white p-3 rounded-lg  uppercase hover:opacity-95'>Search</button>
                </form>
            </div>
            <div className=''>
                <h1 className='text-3xl font-semibold  p-3 text-blue-500 mt-5'>Listing results:</h1>
            </div>
        </div>
    )
}
