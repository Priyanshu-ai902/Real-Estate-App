import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchOfferListings();
  }, []);


  return (
    <div className="bg-gray-50 min-h-screen">

     
      <div className="flex flex-col items-center gap-6 p-10 sm:p-28 px-4 max-w-6xl mx-auto text-center">
        <h1 className="font-bold text-3xl lg:text-6xl text-gray-800 leading-tight">
          Welcome to a World Where{' '}
          <span className="text-blue-600">Your Dream Home is Just a Click Away</span>
          <br />
          Let’s Begin the Search Together.
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Docopull Estate is the best place to find your next perfect place to live.
          We have a wide range of properties for you to choose from.
        </p>
        <Link
          to={'/search'}
          className="text-sm sm:text-md text-white bg-violet-600 hover:bg-violet-700 transition-colors font-bold py-2 px-4 rounded-lg shadow-lg"
        >
          Let’s Get Started...
        </Link>
      </div>

      
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className="h-[500px] rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
      </Swiper>

      
      <div className="max-w-6xl mx-auto p-6 sm:p-10">
        {offerListings && offerListings.length > 0 && (
          <section className="my-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-blue-600">Recent Offers</h2>
              <Link className="text-blue-600 hover:underline" to={'/search?offer=true'}>
                Show More Offers
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </section>
        )}

        {rentListings && rentListings.length > 0 && (
          <section className="my-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-blue-600">Recent Places for Rent</h2>
              <Link className="text-blue-600 hover:underline" to={'/search?type=rent'}>
                Show More Places for Rent
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </section>
        )}

        {saleListings && saleListings.length > 0 && (
          <section className="my-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-blue-600">Recent Places for Sale</h2>
              <Link className="text-blue-600 hover:underline" to={'/search?type=sale'}>
                Show More Places for Sale
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );

}