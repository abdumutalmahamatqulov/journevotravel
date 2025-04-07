import React from 'react'
import rasm from '/src/assets/family-trip-normandy-france-cliffs-coast-etretat-shutterstock.jpg';

export default function TravelIdeas() {
  const images = [
    "/src/assets/family-trip-normandy-france-cliffs-coast-etretat-shutterstock.jpg",
    "/src/assets/Cover-photo-Group-Travel-3-jpg.webp",
    "src/assets/van-gogh-carrieres-lumieres-le-baux-provence-jameswrodriguez.jpg",
    "src/assets/couple-drink-wine-paris-france-shutterstock.jpg",
    "src/assets/paris-car-self-drive.jpg",
    "src/assets/Val-Thorens_skiing.jpg",
    "src/assets/Wellness-spa.jpg",
    "src/assets/vineyard-couple-romance-wine-shutterstock.jpg"
  ]
  return (
    <main>
      <section
        style={{
          backgroundImage: 'url("./src/assets/eiffel-tour-paris-france-tours.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
        className="relative h-[680px] flex flex-col items-center justify-start  text-center">
        <div className="absolute opacity   bottom-0 left-0 w-full h-[70%] bg-gradient-hero"></div>

        <h1 className='text-6xl font-serif text-center text-white mt-52 relative z-10 text-shadow'>Travel-Types</h1>
        <h3 className='text-2xl md:text-3xl text-center text-white mb-4 max-w-5xl mx-auto leading-relaxed relative z-10'>French Side Travel offers handcrafted travel experiences all over France. <br /> How would you like to travel?
        </h3>
        {/* <!-- callout button --> */}
        <div className=' p-3 w-full max-w-xs relative z-10'>
          <a href="" className='inline-block bg-amber-200 text-blue-900 py-3 px-8 rounded-full  text-xl transition-colors hover:text-white hover:bg-blue-900 duration-300 cursor-pointer'
          >
            Customize My Trip
          </a>
        </div>
      </section>
      <section className="bg-[#1F3653] pt-[30px] w-full z-50 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1240px] px-[20px] mx-auto">
          {images.map((rasm, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={rasm}
                alt={`travel-${index}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
