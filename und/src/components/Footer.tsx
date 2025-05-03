import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-12 pb-6 bg-white">
      <div className="w-11/12 md:w-10/12 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Column 1 - Need Travelsy Help? */}
          <div>
            <h3 className="font-bold text-sm mb-4">Need Travelsy Help?</h3>
            <ul className="space-y-2 text-sm text-[#4A4A4A]">
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Got Questions? Call us 24/7
                </a>
              </li>
              <li>
                <a href="tel:+254715809815" className="hover:text-[#FF5200]">
                  Call Us: +254 715809 815
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@travelsy.com"
                  className="hover:text-[#FF5200]"
                >
                  Email Us: info@travelsy.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="font-bold text-sm mb-4">Contact Info:</h3>
              <address className="not-italic text-sm text-[#4A4A4A]">
                2nd Floor, Fedha Plaza,
                <br />
                Westlands,
                <br />
                Nairobi, Kenya
                <br />
                <br />
                PO Box 123, 00100
                <br />
                Nairobi, Kenya
              </address>

              <div className="flex space-x-2 mt-4">
                <a
                  href="#"
                  className="p-2 border border-[#979797] rounded-full hover:bg-gray-100"
                >
                  <Facebook size={16} color="#979797" />
                </a>
                <a
                  href="#"
                  className="p-2 border border-[#979797] rounded-full hover:bg-gray-100"
                >
                  <Twitter size={16} color="#979797" />
                </a>
                <a
                  href="#"
                  className="p-2 border border-[#979797] rounded-full hover:bg-gray-100"
                >
                  <Instagram size={16} color="#979797" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="font-bold text-sm mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-[#4A4A4A]">
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Privacy Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Give Us Feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Other Services & Support */}
          <div>
            <h3 className="font-bold text-sm mb-4">Other Services & Support</h3>
            <ul className="space-y-2 text-sm text-[#4A4A4A]">
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Rewards Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Customer Service Help
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Quick Links */}
          <div>
            <h3 className="font-bold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#4A4A4A]">
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Copying Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Hire Equipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF5200]">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Mailing List */}
          <div>
            <h3 className="font-bold text-sm mb-4">Mailing List</h3>
            <p className="text-sm mb-4 text-[#4A4A4A]">
              Sign Up for exciting info and get the latest offers and promotions
              straight in your inbox.
            </p>

            <form className="mt-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-3 py-2 text-sm border border-gray-300 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-[#FF5200] text-white px-4 py-2 text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
