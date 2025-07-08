const CustomerTrust = () => {
  return (
    <section className="py-10 px-4 rounded-xl mx-4 sm:mx-6 lg:mx-8 my-12">
      <div className="max-w-4xl mx-auto text-center bg-white">
        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-8 h-8 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
        {/* Message */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Over 2 million happy customers
        </h3>
      </div>
    </section>
  );
};

export default CustomerTrust;
