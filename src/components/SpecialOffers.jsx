import React from 'react'

const Offer = () => {
    return <div>
        <img src="/images/Rectangle 28.png" alt="special offer" />
    </div>
}

export default function SpecialOffers() {
    return (
        <section className='section borderBottom '>
            <h2 className='sectionHeader'>Special Offers</h2>
            <div className='flex flex-row justify-between '>
                <div className='flex-1 grid grid-cols-2 gap-y-5 gap-x-10'>
                    <Offer />
                    <Offer />
                    <Offer />
                    <Offer />

                </div>
                <div className='w-1/3 bg-hover'>
.
                </div>
            </div>
        </section>
    )
}
