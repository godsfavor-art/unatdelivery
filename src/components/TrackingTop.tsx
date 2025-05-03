import { useState } from "react";

interface TrackingDetails {
  trackingNumber: string;
  receiverName: string;
  senderName: string;
  destination: string;
}

interface TrackingEvent {
  status: string;
  date: string;
  time: string;
  location: string;
  from?: string;
}

const UNDTrackingHeader: React.FC = () => {
  const trackingData: TrackingDetails = {
    trackingNumber: "UND8317198281928BP",
    receiverName: "Gloria Teresa Tucci",
    senderName: "David Scott",
    destination: "4516 N 25th St Tacoma, WA 98406, USA",
  };

  const [showTextUpdates, setShowTextUpdates] = useState(false);
    const [showTravelHistory, setShowTravelHistory] = useState(true);
  
    const trackingEvents: TrackingEvent[] = [
      {
        status: "Package On-Hold",
        date: "April 24 Thursday, 2025",
        time: "01:10PM",
        location: "SAN FRANCISCO, CA 94102, USA",
      },
      {
        status: "Shipment Information Recieved",
        date: "April 24 Thursday, 2025",
        time: "04:45pm",
        location: "SAN FRANCISCO, CA 94102, USA",
        from: "SAN FRANCISCO, CA 94102, USA",
      },
    ];

  return (
    <div className="font-sans">
      {/* Top navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2 flex justify-end space-x-4 text-sm">
          <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="text-gray-700 hover:underline">
            English
          </a>
          <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="text-gray-700 hover:underline">
            Location
          </a>
          <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="text-gray-700 hover:underline">
            Support
          </a>
          <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="text-gray-700 hover:underline">
            Informed Delivery
          </a>
          <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="text-gray-700 hover:underline">
            Register / Sign In
          </a>
        </div>
      </div>

      {/* Logo and main navigation */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center">
          {/* Logo */}
          <div className="flex items-center mr-16">
            <div className="flex items-center">
              <div className="text-4xl font-bold">
                <span className="text-blue-900">U</span>
                <span className="text-red-600">N</span>
                <span className="text-blue-900">D</span>
              </div>
              <div className="h-10 border-r-2 border-red-600 mx-4"></div>
            </div>
            <div className="bg-blue-900 text-white px-4 py-2 relative">
              <span className="font-medium">Quick Tools</span>
              <div className="absolute top-0 bottom-0 -right-6 w-6 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-12 bg-red-600 transform rotate-10 origin-top-left"></div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex">
            <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="px-4 py-2 hover:text-red-600">
              Send
            </a>
            <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="px-4 py-2 hover:text-red-600">
              Receive
            </a>
            <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="px-4 py-2 hover:text-red-600">
              Shop
            </a>
            <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="px-4 py-2 hover:text-red-600">
              Send
            </a>
            <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="px-4 py-2 hover:text-red-600">
              Receive
            </a>
            <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="px-4 py-2 hover:text-red-600">
              Shop
            </a>
          </nav>
        </div>
      </div>

      {/* Tracking Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900">
            UND Tracking <sup className="text-xs">®</sup>
          </h1>
          <div className="flex items-center space-x-2">
            <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="text-red-600 font-medium underline">
              Tracking
            </a>
            <span>/</span>
            <a href="?packagetrack.php?mytrack=UND8317198281928BP" className="text-blue-900 hover:underline">
              FAQs
            </a>
          </div>
        </div>

        {/* Track Button */}
        <div className="flex items-start mb-8">
          <button className="flex items-center text-blue-900 hover:text-red-600 font-medium">
            <span>Track Another Package</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Promotional Banner */}
        <div className="flex mb-12">
          <div className="flex items-center bg-blue-900 text-white py-3 px-6 w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <div>
              <div className="font-medium">Track Packages</div>
              <div className="text-sm">Anytime, Anywhere</div>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 py-3 px-6 w-2/3">
            <div>
              <div className="text-sm">
                Get the free Informed Delivery<sup>®</sup> feature to receive
                automated notifications on your packages
              </div>
            </div>
            <button className="ml-auto bg-blue-900 text-white px-4 py-2 font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Tracking Details */}
        <div className="bg-gray-100 p-6">
          <div className="mb-4">
            <div className="text-gray-600">Tracking Number:</div>
            <div className="text-lg font-bold text-blue-900">
              {trackingData.trackingNumber}
            </div>
          </div>

          <div className="mb-4">
            <div className="text-gray-600">Receiver's Name</div>
            <div>{trackingData.receiverName}</div>
          </div>

          <div className="mb-4">
            <div className="text-gray-600">Sender's Name</div>
            <div>{trackingData.senderName}</div>
          </div>

          <div>
            <div className="text-gray-600">Destination</div>
            <div>{trackingData.destination}</div>
          </div>

          {/* Alert Section */}
          <div className="flex my-6">
            <div className="w-1 bg-red-700"></div>
            <div className="flex-1 bg-red-100 p-4">
              <h3 className="text-red-600 font-bold text-lg mb-2">Alert</h3>
              <p className="text-gray-800">
                Package On Hold BY The Bullion Van. Kindly Contact your sender
                for more information.
              </p>
            </div>

            {/* Package Status */}
            <div className="ml-4 w-1/3">
              <h3 className="text-gray-800 font-medium mb-3">Package Status</h3>
              <div className="flex items-start mb-2">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">
                    i
                  </div>
                </div>
                <div className="ml-2">
                  <p className="font-medium">Package On-Hold</p>
                  <p className="text-gray-600 text-sm">
                    April 24 Thursday, 2025 AT 01:10PM
                  </p>
                  <p className="text-gray-600 text-sm">
                    SAN FRANCISCO, CA 94102, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-gray-300 mb-8">
            <div className="flex h-full">
              <div className="bg-red-600 w-1/4"></div>
              <div className="bg-red-600 w-1/4"></div>
              <div className="bg-red-600 w-1/4"></div>
              <div className="bg-gray-400 w-1/4"></div>
            </div>
          </div>

          {/* Text & Email Updates Section */}
          <div className="border-t border-b border-gray-300">
            <button
              className="w-full py-4 px-2 flex justify-between items-center"
              onClick={() => setShowTextUpdates(!showTextUpdates)}
            >
              <h3 className="text-blue-900 font-medium text-lg">
                Text & Email Updates
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform ${
                  showTextUpdates ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showTextUpdates && (
              <div className="py-4 px-6">
                {/* Content for text & email updates would go here */}
                <p>Sign up for text and email updates about your package.</p>
              </div>
            )}
          </div>

          {/* Travel History Section */}
          <div className="border-b border-gray-300">
            <button
              className="w-full py-4 px-2 flex justify-between items-center"
              onClick={() => setShowTravelHistory(!showTravelHistory)}
            >
              <h3 className="text-blue-900 font-medium text-lg">
                Travel History
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform ${
                  showTravelHistory ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showTravelHistory && (
              <div className="py-4 px-6">
                {trackingEvents.map((event, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-start mb-2">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">
                          i
                        </div>
                      </div>
                      <div className="ml-2">
                        <p className="font-medium">{event.status}</p>
                        <p className="text-gray-600 text-sm">
                          {event.date} AT {event.time}
                        </p>
                        {event.from ? (
                          <p className="text-gray-600 text-sm">
                            FROM: {event.from}
                          </p>
                        ) : (
                          <p className="text-gray-600 text-sm">
                            {event.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UNDTrackingHeader;
