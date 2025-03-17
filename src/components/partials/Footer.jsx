import React from "react";

export default function Footer() {
  return (
    <footer className="bg-footerBG w-full p-8 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Store Location  */}
        <div>
          <div>
            <h1 className="font-semibold text-2xl  ">Store Location</h1>
          </div>
          <div className="space-y-1">
            <a href="#" className="hover:text-footerTextHover">
              Dudhpati, Bhaktapur
            </a>
            <br />
            <a
              href="mailto:info@alphastore.com"
              className="hover:text-footerTextHover"
            >
              info@alphastore.com
            </a>
            <br />
            <a href="tel:+9779000000000" className="hover:text-footerTextHover">
              +977 9000000000
            </a>
            <br />
          </div>
          <div className="flex justify-center md:justify-start space-x-1 mt-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/Facebook.png"
                className="w-[50px] h-[50px] hover:text-footerTextHover"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/Instagram.png"
                className="w-[50px] h-[50px] hover:text-footerTextHover"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/TikTok.png"
                className="w-[50px] h-[50px] hover:text-footerTextHover"
                alt="TikTok"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/X.png"
                className="w-[50px] h-[50px] hover:text-footerTextHover"
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
          <div className="space-y-1">
            <a href="#" className="hover:text-footerTextHover">
              Shop All
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Computers
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Tablets
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Drones & Cameras
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Audio
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Mobile
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              TV & Home Cinema
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Wearable Tech
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Sale
            </a>
            <br />
          </div>
        </div>
        {/* Customer Support  */}
        <div className="">
          <div>
            <h1 className="text-2xl font-semibold">Customer Support</h1>
          </div>
          <div className="space-y-1">
            <a href="#" className="hover:text-footerTextHover">
              Contact Us
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Help Center
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              About Us
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Careers
            </a>
            <br />
          </div>
        </div>

        {/* Policy  */}
        <div className="">
          <div>
            <h1 className="text-2xl font-semibold">Policy</h1>
          </div>
          <div className="space-y-1">
            <a href="#" className="hover:text-footerTextHover">
              Shipping & Returns
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Terms & Conditions
            </a>
            <br />
            <a href="#" className="hover:text-footerTextHover">
              Payment Methods
            </a>
            <br />
            <a href="#" className="">
              FAQ
            </a><br />
          </div>
        </div>
      </div>
    </footer>
  );
}
