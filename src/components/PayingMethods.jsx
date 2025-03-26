import React from 'react';

export default function PayingMethods() {
  return (
    <section className='section'>
      <p className='text-navbar text-center text-xl pb-4'>We accept the following payment methods</p>
      <div className='flex flex-wrap justify-center gap-4'>
        <img src="paymentimg/visa.png" alt="Payment Method 1" className="w-16 h-16 sm:w-20 sm:h-20" />
        <img src="paymentimg/mastercard.png" alt="Payment Method 2" className="w-16 h-16 sm:w-20 sm:h-20" />
        <img src="paymentimg/esewa.png" alt="Payment Method 3" className="w-16 h-16 sm:w-20 sm:h-20" />
        <img src="paymentimg/khalti.png" alt="Payment Method 4" className="w-16 h-16 sm:w-20 sm:h-20" />
        <img src="paymentimg/connectips.png" alt="Payment Method 5" className="w-16 h-16 sm:w-20 sm:h-20" />
        <img src="paymentimg/b2b.png" alt="Payment Method 6" className="w-16 h-16 sm:w-20 sm:h-20" />
        <img src="paymentimg/cashondelivery.png" alt="Payment Method 7" className="w-16 h-16 sm:w-20 sm:h-20" />
      </div>
    </section>
  );
}