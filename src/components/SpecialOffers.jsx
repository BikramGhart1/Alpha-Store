import React from 'react';

const Offer = ({ image }) => {
    return (
        <div>
            <img src={image} alt="special offer" className="w-full h-auto rounded-md shadow-md" />
        </div>
    );
};

export default function SpecialOffers() {
    const offers = [
        "/images/Rectangle 28.png",
        "/images/Rectangle 28.png",
        "/images/Rectangle 28.png",
        "/images/Rectangle 28.png",
        "/images/Rectangle 28.png"
    ];

    return (
        <section className='section p-6 min-h-screen'>
            <div className="flex flex-row justify-between pb-4 items-center">
                <h2 className="sectionHeader text-xl sm:text-2xl">Special Offers</h2>
                <p className="flex-1 h-1 w-full bg-cardBorderShadow rounded-md mx-2"></p>
                <button className="border-2 border-solid border-cardBorderShadow px-3 py-1 rounded-3xl cursor-pointer text-sm sm:text-base" aria-label="View All Brands">
                    View All
                </button>
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-2/3'>
                    {offers.slice(0, 4).map((image, index) => (
                        <Offer key={index} image={image} />
                    ))}
                </div>
                <div className='w-full lg:w-1/3 bg-hover flex justify-center items-center'>
                    <Offer image={offers[4]} />
                </div>
            </div>
        </section>
    );
}
