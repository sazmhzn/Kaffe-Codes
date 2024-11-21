import { Button } from "@headlessui/react";

export const ImageGrid = ({ images }) => {
  return (
    <>
      {images.map((image) => (
        <article
          key={image.id}
          className="relative w-full overflow-hidden h-fit"
        >
          <img src={image.url} alt={image.alt} className="w-full aspect-auto" />
          <span className="bg-gradient-to-t from-black to-transparent absolute h-[40vh]  left-0 bottom-0 w-full"></span>
          <div className="absolute text-left bottom-5 p-8 text-white space-y-2">
            <h2 className="text-3xl font-bold">{image.title}</h2>
            <p>{image.description}</p>
            <Button className="inline-flex items-center gap-2 text-black bg-white py-1.5 px-3 text-lg shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              Explore
            </Button>
          </div>
        </article>
      ))}
    </>
  );
};
