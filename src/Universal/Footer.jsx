import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B3A70] text-white py-6 text-center md:text-left px-4 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Store Location */}
        <div>
          <h3 className="font-bold text-lg">Store Location</h3>
          <p className="mt-2">Dudhpati, Bhaktapur</p>
          <p>info@alphastore.com</p>
          <p>+977 9000000000</p>
          <div className="flex justify-center md:justify-start gap-3 mt-3">
            <FaFacebookF className="bg-[#1F5C9C] p-2 rounded-full text-3xl cursor-pointer" />
            <FaInstagram className="bg-[#1F5C9C] p-2 rounded-full text-3xl cursor-pointer" />
            <FaTiktok className="bg-[#1F5C9C] p-2 rounded-full text-3xl cursor-pointer" />
            <FaXTwitter className="bg-[#1F5C9C] p-2 rounded-full text-3xl cursor-pointer" />
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold text-lg">Shop</h3>
          <ul className="mt-2 space-y-1">
            {[
              "Shop All",
              "Computers",
              "Tablets",
              "Drones & Cameras",
              "Audio",
              "Mobile",
              "T.V & Home Cinema",
              "Wearable Tech",
              "Sale",
            ].map((item, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-bold text-lg">Customer Support</h3>
          <ul className="mt-2 space-y-1">
            {[
              "Contact Us",
              "Help Center",
              "About Us",
              "Careers",
            ].map((item, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="font-bold text-lg">Policy</h3>
          <ul className="mt-2 space-y-1">
            {[
              "Shipping & Returns",
              "Terms & Conditions",
              "Payment Methods",
              "FAQ",
            ].map((item, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-6">© 2025 by AlphaStore. Powered and secured by BMC Gang</p>
    </footer>
  );
};

export default Footer;
