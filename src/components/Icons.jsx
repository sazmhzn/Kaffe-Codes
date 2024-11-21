const Icons = ({ icon, title, active }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${
          active ? "bg-[#87512F] " : "bg-gray-200"
        } w-12 h-12 p-3  rounded-full flex items-center justify-center aspect-square`}
      >
        <img
          src={icon}
          alt="icon"
          className={`w-full ${
            active ? "text-white invert-0 fill-white bg-white" : "text-black"
          }`}
        />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Icons;
