import React from "react";

export default function Footer() {
  return (
    <footer className="bg-footerBG p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Store Location  */}
        <div>
          <div>
            <h1 className="font-semibold text-lg mb-2 ">Store Location</h1>
          </div>
          <div>
            <p>Dudhpati, Bhaktapur </p>
            <p>info@alphastore.com</p>
            <p>+977 9000000000 </p>
          </div>
          <div className="flex space-x-4">
            <a href="">
              <img
                src="./images/Facebook.png"
                className="w-[50px] h-[50px] text-footerIcon"
                alt="Facebook"
              />
            </a>
            <a href="">
              <img
                src="./images/Instagram.png"
                className="w-[50px] h-[50px] text-footerIcon"
                alt="Instagram"
              />
            </a>
            <a href="">
              <img
                src="./images/TikTok.png"
                className="w-[50px] h-[50px] text-footerIcon"
                alt="TikTok"
              />
            </a>
            <a href="">
              <img
                src="./images/X.png"
                className="w-[50px] h-[50px] text-footerIcon"
                alt="X"
              />
            </a>
          </div>
        </div>

        {/* Shop  */}
        <div className="">
          <div>
            <h1 className="text-2xl font-semibold">Shop</h1>
          </div>
          <div>
            <p>Shop All</p>

            <p>Computers</p>
            <p>Tablets</p>
            <p>Drones & Cameras</p>
            <p>Audio</p>
            <p>Mobile</p>
            <p>TV & Home Cinema</p>
            <p>Wearable Tech</p>

            <p>Sale</p>
          </div>
        </div>
        {/* Customer Support  */}
        <div className="">
          <div>
            <h1 className="text-2xl font-semibold">Customer Support</h1>
          </div>
        </div>

        {/* Policy  */}
        <div className="p-4">
          <div>
            <h1 className="text-2xl font-semibold">Policy</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
