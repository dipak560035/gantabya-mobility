
import Link from 'next/link'
import { ArrowLeft,
   } from 'lucide-react'
import FullSpecifications from '../fullspecification/page'


const VEHICLES = [
  {
    id: 'thunder-x',
    name: 'Thunder X',
    tagline: 'Born to dominate',
    range: '180 km',
    speed: '140 km/hr',
    price: 'NPR 4,50,000',
    location: 'Ex-showroom Kathmandu',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },

  {
    id: 'volt-cruiser',
    name: 'Volt Cruiser',
    tagline: 'Silent power, endless roads',
    range: '200 km',
    speed: '120 km/hr',
    price: 'NPR 3,99,000',
    location: 'Ex-showroom Pokhara',
    image:
      'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1200&q=80',
  },

  {
    id: 'eco-ride',
    name: 'Eco Ride',
    tagline: 'Smart commute, zero emissions',
    range: '120 km',
    speed: '80 km/hr',
    price: 'NPR 2,49,000',
    location: 'Ex-showroom Lalitpur',
    image:
      'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1200&q=80',
  },

  {
    id: 'eco-ride',
    name: 'Eco Ride',
    tagline: 'Smart commute, zero emissions',
    range: '120km',
    speed: '80km/hr',
    price: 'NPR 2,49,000',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
  },

   {
    id: 'thunder',
    name: 'Thunder X',
    tagline: 'Born to dominate.',
    range: '180km',
    speed: '180km/hr',
    price: 'NPR 4,50,000',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'cruiser',
    name: 'Volt Cruiser',
    tagline: 'Silent power, endless roads',
    range: '200km',
    speed: '120km/hr',
    price: 'NPR 3,99,000',
    image: 'https://images.unsplash.com/photo-1607091083645-31f4e28dc9af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBtb3RvcmJpa2VzfGVufDB8fDB8fHww',
  },
  {
    id: 'ride',
    name: 'Eco Ride',
    tagline: 'Smart commute, zero emissions',
    range: '120km',
    speed: '80km/hr',
    price: 'NPR 2,49,000',
    image: 'https://images.unsplash.com/photo-1607088797610-020db7a14cd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cmljJTIwbW90b3JiaWtlc3xlbnwwfHwwfHx8MA%3D%3D',
  },

  
  
]

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function BikeDetailsPage({
  params,
}: Props) {
  const { id } = await params

  const bike = VEHICLES.find((v) => v.id === id)

  if (!bike) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-3xl">
        Bike not found
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-black px-6 py-10">
  <div className="max-w-7xl mx-auto">

    {/* Back Button */}
    <Link
      href="/electric"
      className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition"
    >
      <ArrowLeft className="w-5 h-5" />
      All Bikes
    </Link>

    {/* Main Layout */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT IMAGE */}
      <div className="relative rounded-2xl overflow-hidden border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.25)]">

        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-100 object-cover"
        />

      </div>

      {/* RIGHT CONTENT */}
      <div className="text-white">

        {/* Title */}
        <h1 className="text-4xl text-white font-bold mb-8">
          {bike.name}
        </h1>

        {/* Tagline */}
        <p className="text-white text-xl mt-4">
          {bike.tagline}
        </p>

        {/* Specs */}
        <div className="flex gap-12 mt-4">

          {/* Range */}
          <div>
            <div className="flex items-center gap-2 text-green-500 text-3xl font-bold">
              {bike.range}
            </div>

            <p className="text-white mt-2 text-sm">
              Range
            </p>
          </div>

          {/* Speed */}
          <div>
            <div className="flex items-center gap-2 text-green-500 text-3xl font-bold">
            
              {bike.speed}
            </div>

            <p className="text-white mt-2 text-sm">
              Top Speed
            </p>
          </div>

        </div>

        {/* Price Box */}
        <div className="bg-[#111111] border border-white/5 rounded-2xl p-3 mt-5">

          <h2 className="text-3xl font-bold text-green-500 mb-3">
            {bike.price}
          </h2>

          <p className="text-white text-lg">
            {bike.location}
          </p>

        </div>

        {/* Buttons */}
        {/* <div className="flex gap-5 mt-4">

          <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl transition cursor-pointer ">
            Book Test Ride
          </button>

          <button className="border border-green-500 text-green-500 hover:bg-gray-700 hover:text-green-500 px-8 py-4 rounded-xl font-semibold transition cursor-pointer ">
            Contact Us
          </button>

        </div> */}
        <div className="flex gap-5 mt-4">

  <Link href="/Testride">
    <button className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl transition cursor-pointer">
      Book Test Ride
    </button>
  </Link>

  <Link href="/Contact">
    <button className="border border-green-500 text-green-500 hover:bg-gray-700 hover:text-green-500 px-8 py-4 rounded-xl font-semibold transition cursor-pointer">
      Contact Us
    </button>
  </Link>

</div>

      </div>

    </div>

  </div>

<div>
  <FullSpecifications />
</div>

</section>


  )
}