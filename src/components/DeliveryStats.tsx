const DeliveryStats = () => {
  return (
    <section className="relative bg-green-800 text-white py-10 px-4 rounded-xl mx-4 sm:mx-6 lg:mx-8 my-12 overflow-hidden">
      {/* Leaf Decor Left (hidden on mobile) */}
      <div className="absolute top-0 left-0 h-full w-32 hidden sm:block">
        <img
          src="/public/images/leaf.svg"
          alt="left leaf"
          className="h-full object-contain scale-x-[-1]"
        />
      </div>

      {/* Leaf Decor Right (hidden on mobile) */}
      <div className="absolute top-0 right-0 h-full w-32 hidden sm:block">
        <img
          src="/public/images/leaf.svg"
          alt="right leaf"
          className="h-full object-contain"
        />
      </div>

      {/* Stats Text */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">20,313,674+</h2>
        <p className="text-lg font-medium mt-2">Plants and trees delivered</p>
      </div>
    </section>
  );
};

export default DeliveryStats;
