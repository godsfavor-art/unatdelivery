import { Facebook, Twitter, Youtube } from "lucide-react";


const TrackingFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 pt-10 pb-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Logo and Links */}
          <div>
            <div className="text-4xl font-bold">
              <span className="text-blue-900">U</span>
              <span className="text-red-600">N</span>
              <span className="text-blue-900">D</span>
            </div>
          </div>

          {/* Link Groups */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
            <div>
              <h4 className="font-semibold mb-2">HELPFUL LINKS</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Contact Us</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Site Index</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">FAQs</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Feedback</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">ON ABOUT UND</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">About UND Home</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Newsroom</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">UND Service Updates</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Forms & Publications</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Government Services</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">OTHER UND SITES</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Business Customer Gateway</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Postal Inspectors</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Inspector General</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Postal Explorer</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">National Postal Museum</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Resources for Developers</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">LEGAL INFORMATION</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">Terms of Use</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">FOIA</a>
                </li>
                <li>
                  <a href="/packagetrack.php?mytrack=UND8317198281928BP">No FEAR Act/EEO Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-center md:text-left">
            Copyright © 2024 UND. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Facebook />
            <Twitter />
            <Youtube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TrackingFooter;
