import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    product: "Wisteria Tree",
    date: "06/07/2025",
    image: "./images/review_wisteria.webp",
    description:
      "Planted this tree last season and it's thriving beautifully. Very satisfied!",
  },
  {
    product: "Kieffer Pear Tree",
    date: "06/07/2025",
    image: "./images/review_pear.webp",
    description:
      "The tree is growing strong and healthy. Fruits are forming well.",
  },
  {
    product: "Pink Lemonade Blueberry",
    date: "06/07/2025",
    image: "./images/review_blueberry.webp",
    description:
      "Berries taste amazing and the color is so unique. Super happy.",
  },
  {
    product: "'Summer in Paradise' Hibiscus",
    date: "06/07/2025",
    image: "./images/review_hibiscus.webp",
    description: "Bloomed quickly and adds a tropical look to my yard.",
  },
  {
    product: "Owari Satsuma Mandarin",
    date: "06/07/2025",
    image: "./images/review_mandarin.webp",
    description:
      "Great citrus aroma and easy to grow. Perfect for our climate.",
  },
  {
    product: "Red Cluster Bottlebrush",
    date: "06/07/2025",
    image: "./images/review_bottlebrush.webp",
    description: "Attracts birds and butterflies. Blooms just as described!",
  },
];

const CustomerReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            12,000+ 5-star reviews
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden sm:flex"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-8"
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="min-w-[250px] sm:min-w-[280px] bg-gray-50 rounded-xl shadow hover:shadow-md transition p-4"
              >
                <img
                  src={review.image}
                  alt={`Review for ${review.product}`}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <p className="text-sm text-gray-600 mb-2">Review for</p>
                <p className="font-semibold text-gray-800 truncate mb-1">
                  {review.product}
                </p>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mb-2">{review.date}</p>
                <p className="text-sm text-gray-700">{review.description}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden sm:flex"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
