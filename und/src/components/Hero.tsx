export default function Hero() {
  const durations = [
    { id: 1, label: "A weekend" },
    { id: 2, label: "A week" },
    { id: 3, label: "A month" },
    { id: 4, label: "A few days, specify." },
  ];

  return (
    <section className="pt-16 md:pt-20 lg:pt-24 bg-white">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
          Find An
          <br />
          Experience
        </h1>

        <p className="text-gray-600 max-w-lg mt-8 mb-12 text-sm md:text-base">
          To find you the best experience, we will ask you a few questions so
          and show you experiences based on your preferences.
        </p>

        <div className="mt-12">
          <p className="text-sm text-gray-700 mb-5">
            How much time do you have?
          </p>

          <div className="flex items-center flex-wrap gap-3">
            {durations.map((duration) => (
              <div className="flex items-center gap-2" key={duration.id}>
                <input
                  type="checkbox"
                  className="border border-[#E4E4E4] bg-white rounded-[2xl] checked:bg-black"
                />
                <p className="text-[#4A4A4A] text-sm ">{duration.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
