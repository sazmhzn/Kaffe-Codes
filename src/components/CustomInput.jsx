export const CustomInput = () => {
  return (
    <div className="flex items-center gap-2 border rounded-full px-4 py-2 bg-gray-100 border-gray-400">
      <img
        src="/Minimalistic Magnifer.png"
        alt="search icon"
        className="aspect-square w-4 h-4"
      />
      <input
        placeholder="Search on Kaffe Codes"
        className="bg-transparent focus-within:outline-none"
      />
    </div>
  );
};
