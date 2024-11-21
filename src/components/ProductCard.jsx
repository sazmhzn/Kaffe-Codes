import { Heart } from "lucide-react";

const ProductCard = ({ img, name, brand, rating, price }) => {
  return (
    <article className="w-full relative space-y-2 p-6">
      <div className="text-center flex items-center justify-center min-h-[250px] w-full">
        <Heart className="absolute right-0 top-0 m-3 stroke-gray-400" />
        <img src={img} alt="" className="aspect-auto" />
      </div>
      <div>
        <header className=" text-left">
          <p className="uppercase text-xs">{brand}</p>
          <h2 className="text-lg font-medium text-[#001700]">{name}</h2>
        </header>
        <div>{rating}</div>
        <div className="w-full  text-left">
          <p className="text-gray-400 ">
            NRP: <span className="text-lg  text-[#001700]">{price} </span>{" "}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
