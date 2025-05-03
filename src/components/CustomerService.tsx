import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { bike, cloud, coffee, nature } from '../utils/image';

export default function CustomerService() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<null | number>(null);

  const testimonials = [
    {
      id: 1,
      title: "Best User Experience",
      content:
        "Because the rock was laid down in layers, there is a variation in the hardness of the rock formed. When water runoff trickles across the rock, some areas erode rapidly whereas others below are a reduction in erosion which causes the formation of pinnacles, or 'hoodoos' of stable rock.",
      author: "Derek Dunn",
      avatar: cloud,
    },
    {
      id: 2,
      title: "Friendly staff",
      content:
        "Whether it's a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation. It's also big tour business and the net many options.",
      author: "Derek Dunn",
      avatar: bike,
    },
    {
      id: 3,
      title: "Amazing Adventure",
      content:
        "The guides were knowledgeable and made our trip unforgettable. Every detail was taken care of, allowing us to just enjoy the experience without any worries.",
      author: "Sarah Johnson",
      avatar: nature,
    },
    {
      id: 4,
      title: "Perfect Organization",
      content:
        "From booking to the actual tour, everything was seamless. The itinerary was well-planned with a perfect balance of activities and free time to explore on our own.",
      author: "Michael Chen",
      avatar: coffee,
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };

  // Set up autoplay
  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Only set up the interval if not paused
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    // Cleanup function to clear interval when component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Pause autoplay when user interacts with navigation
  const handleNavigation = (direction: unknown) => {
    // Temporarily pause autoplay
    setIsPaused(true);

    // Perform the navigation
    if (direction === "next") {
      nextSlide();
    } else {
      prevSlide();
    }

    // Resume autoplay after a delay
    setTimeout(() => {
      setIsPaused(false);
    }, 10000); // Resume autoplay after 10 seconds of inactivity
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Heading */}
          <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col justify-between">
            <p className="text-sm text-[#9B9B9B] mb-4 md:mb-0">TESTIMONIALS</p>
            <div className="mb-4 md:mb-0">
              <h2 className="text-[50px] leading-14 font-medium font-serif">
                <span className="block">What</span>
                <span className="block">customers</span>
                <span className="block">
                  <span className="text-[#FF5200]">say about us.</span>
                </span>
              </h2>
            </div>

            {/* Navigation arrows */}
            <div className="mt-6 w-34 h-12 bg-white flex justify-center items-center">
              <div className="flex space-x-4 items-center">
                <button
                  onClick={() => handleNavigation("prev")}
                  className="p-2"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={26} color="#9B9B9B" />
                </button>
                <p className="text-4xl text-[#9B9B9B]/70">/</p>
                <button
                  onClick={() => handleNavigation("next")}
                  className="p-2"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={26} color="#9B9B9B" />
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Testimonials Swiper */}
          <div
            className="md:w-2/3 md:pl-8 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 50}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full md:w-1/2 flex-shrink-0 px-2"
                  >
                    <div className="bg-white p-6 h-full rounded-lg flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">
                          {testimonial.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <span className="font-medium">
                          {testimonial.author}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}