import { Button } from "@headlessui/react";
import Header from "./components/Header";
import Icons from "./components/Icons";
import ProductCard from "./components/ProductCard";
import { ImageGrid } from "./components/ImageGrid";
import { categories, images, products } from "./constant/utils";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" w-full">
        <Header />

        <div className="mx-auto py-4 w-full max-w-7xl flex items-center justify-center gap-8 overflow-y-auto">
          {categories.map((category) => (
            <Icons
              key={category.title}
              icon={category.icon}
              title={category.title}
            />
          ))}
        </div>

        <section className="">
          <div className="grid grid-cols-3 gap-4">
            <ImageGrid images={images} />
          </div>
        </section>

        <section className="w-full my-10">
          <article className="mx-auto text-center p-4 w-full">
            <h2 className="text-xl font-bold">Kaffe Code Platform To</h2>
            <h2 className="uppercase text-2xl font-black text-[#007500]">
              START
            </h2>
            <h2 className="text-xl font-bold">
              Your Bakery/ Tea/ Coffee Business
            </h2>
            <p className="font-semibold text-lg text-gray-600">
              Kaffe Codes is the platform to run a successful online business in
              Nepal.
            </p>
          </article>
        </section>

        <section className="bg-[#F3EEEA] py-4 mt-4">
          <div className="mx-auto max-w-7xl items-center justify-between p-2 lg:px-4 space-y-8">
            <h2 className="text-xl font-bold">Top Picks</h2>
            <div className="grid grid-cols-5 gap-10 overflow-y-auto">
              {products
                .filter((product) => product.id < 6)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    img={product.img}
                    name={product.name}
                    brand={product.brand}
                    rating={product.rating}
                    price={product.price}
                  />
                ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center min-h-[100vh] items-center py-4 mt-4">
          <div className="mx-auto text-center max-w-7xl items-center justify-between p-2 lg:px-4 space-y-8">
            <h1 className="text-2xl font-bold">Categories</h1>
            <div className="grid grid-cols-3 gap-6">
              <article className="relative  overflow-hidden h-fit">
                <img
                  src={"/categories/01.png"}
                  className="w-full aspect-auto"
                />
                <span className="bg-gradient-to-t from-black to-transparent absolute h-[40vh]  left-0 bottom-0 w-full"></span>
                <div className="absolute text-left bottom-5 p-8 text-white space-y-2">
                  <h2 className="text-3xl font-bold">Bakery</h2>
                  <p>desc</p>
                  <Button className="inline-flex items-center gap-2 text-black bg-white py-1.5 px-3 text-lg shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Explore
                  </Button>
                </div>
              </article>
              <article className="relative  overflow-hidden h-fit">
                <img
                  src={"/categories/05.png"}
                  className="w-full aspect-auto"
                />
                <span className="bg-gradient-to-t from-black to-transparent absolute h-[40vh]  left-0 bottom-0 w-full"></span>
                <div className="absolute text-left bottom-5 p-8 text-white space-y-2">
                  <h2 className="text-3xl font-bold">Bakery</h2>
                  <p>desc</p>
                  <Button className="inline-flex items-center gap-2 text-black bg-white py-1.5 px-3 text-lg shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Explore
                  </Button>
                </div>
              </article>
              <article className="relative  overflow-hidden h-fit">
                <img
                  src={"/categories/03.png"}
                  className="w-full aspect-auto"
                />
                <span className="bg-gradient-to-t from-black to-transparent absolute h-[40vh]  left-0 bottom-0 w-full"></span>
                <div className="absolute text-left bottom-5 p-8 text-white space-y-2">
                  <h2 className="text-3xl font-bold">Bakery</h2>
                  <p>desc</p>
                  <Button className="inline-flex items-center gap-2 text-black bg-white py-1.5 px-3 text-lg shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Explore
                  </Button>
                </div>
              </article>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <article className="relative  overflow-hidden h-fit">
                <img
                  src={"/categories/04.png"}
                  className="w-full aspect-auto"
                />
                <span className="bg-gradient-to-t from-black to-transparent absolute h-[40vh]  left-0 bottom-0 w-full"></span>
                <div className="absolute text-left bottom-5 p-8 text-white space-y-2">
                  <h2 className="text-3xl font-bold">Bakery</h2>
                  <p>desc</p>
                  <Button className="inline-flex items-center gap-2 text-black bg-white py-1.5 px-3 text-lg shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Explore
                  </Button>
                </div>
              </article>
              <article className="relative  overflow-hidden h-fit">
                <img
                  src={"/categories/02.png"}
                  className="w-full aspect-auto"
                />
                <span className="bg-gradient-to-t from-black to-transparent absolute h-[40vh]  left-0 bottom-0 w-full"></span>
                <div className="absolute text-left bottom-5 p-8 text-white space-y-2">
                  <h2 className="text-3xl font-bold">Bakery</h2>
                  <p>desc</p>
                  <Button className="inline-flex items-center gap-2 text-black bg-white py-1.5 px-3 text-lg shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Explore
                  </Button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center min-h-[100vh] items-center py-4 mt-4">
          <div className="mx-auto text-center max-w-7xl items-center justify-between p-2 lg:px-4 space-y-8">
            <header>
              <h1 className="text-3xl font-black">Hand-Picked Brands</h1>
            </header>
            <div className="mx-auto py-4 w-full max-w-7xl flex items-center justify-center gap-8 overflow-y-auto">
              {categories.map((category) => (
                <Icons
                  key={category.title}
                  icon={category.icon}
                  title={category.title}
                  active={category.active}
                />
              ))}
            </div>

            <section>
              <div className="grid lg:grid-cols-5 grid-cols-2 gap-10">
                {products
                  .filter((product) => product.id < 6)
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      img={product.img}
                      name={product.name}
                      brand={product.brand}
                      rating={product.rating}
                      price={product.price}
                    />
                  ))}
              </div>
            </section>
          </div>
        </section>

        <section>
          <div className="md:flex ">
            <img
              src="/exclusive-brownie.png"
              alt=""
              className="w-full md:w-1/2"
            />

            <div className="bg-[#F0F7F0] w-full flex items-center flex-col justify-around py-4">
              <header>
                <h1 className="font-black text-2xl"> Exclusive Brownie</h1>
              </header>
              <div className="grid grid-cols-2 gap-10 w-full">
                {products
                  .filter((product) => product.category === "Brownies")
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      img={product.img}
                      name={product.name}
                      brand={product.brand}
                      rating={product.rating}
                      price={product.price}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center min-h-[70vh] items-center py-4 mt-4">
          <div className="mx-auto text-center items-center justify-between p-2 lg:px-4 space-y-8">
            <header>
              <h1 className="text-3xl font-black">Hot Cakes</h1>
            </header>
            <div className="mx-auto py-4 w-full max-w-7xl flex items-center justify-center gap-8 overflow-y-auto">
              {categories.map((category) => (
                <Icons
                  key={category.title}
                  icon={category.icon}
                  title={category.title}
                  active={category.active}
                />
              ))}
            </div>

            <section>
              <div className="grid lg:grid-cols-5 grid-cols-2 gap-10">
                {products
                  .filter((product) => product.category === "Cakes")
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      img={product.img}
                      name={product.name}
                      brand={product.brand}
                      rating={product.rating}
                      price={product.price}
                    />
                  ))}
              </div>
            </section>
          </div>
        </section>

        <article>
          <img src="/Ad.png" alt="" />
        </article>

        <section className="flex flex-col justify-center min-h-[70vh] items-center py-4 mt-4">
          <div className="mx-auto text-center items-center justify-between p-2 lg:px-4 space-y-8">
            <header>
              <h1 className="text-3xl font-black">
                Best Purchase on Machinery
              </h1>
            </header>
            <div className="mx-auto py-4 w-full max-w-7xl flex items-center justify-center gap-8 overflow-y-auto">
              {categories
                .filter((cate) => cate.category === "Machineries")
                .map((category) => (
                  <Icons
                    key={category.title}
                    icon={category.icon}
                    title={category.title}
                    active={category.active}
                  />
                ))}
            </div>

            <section>
              <div className="grid lg:grid-cols-5 grid-cols-2 gap-10">
                {products
                  .filter((product) => product.category === "Machineries")
                  .map((product) => (
                    <ProductCard
                      key={product.id}
                      img={product.img}
                      name={product.name}
                      brand={product.brand}
                      rating={product.rating}
                      price={product.price}
                    />
                  ))}
              </div>
            </section>
          </div>
        </section>

        <section className="flex flex-col justify-center min-h-[70vh] items-center py-4 mt-4">
          <div className="w-full flex flex-col text-center items-center justify-end p-2 lg:px-4 space-y-8 ">
            <header>
              <h1 className="text-3xl font-black">Coffee Selections</h1>
              <p>From Harvest to Happiness</p>
            </header>
          </div>
          <div className="w-3/4 flex items-center lg:justify-end justify-center">
            <div className="grid-cols-2 grid gap-10">
              {products
                .filter((product, index) => index < 4)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    img={product.img}
                    name={product.name}
                    brand={product.brand}
                    rating={product.rating}
                    price={product.price}
                  />
                ))}
            </div>
          </div>

          <img
            src="/faded-beans.png"
            alt=""
            className="absolute left-0 mix-blend-multiply	"
          />
        </section>

        <section className="flex flex-col justify-center min-h-[70vh] items-center py-4 mt-4">
          <div className="w-full flex flex-col  text-center items-center justify-end p-6 lg:px-4 space-y-12 ">
            <header>
              <h1 className="text-3xl font-black">Tea Selections</h1>
              <p>Every Sip Tells a Journey</p>
            </header>
          </div>
          <div className="w-3/4 flex items-center lg:justify-start justify-center">
            <div className="grid-cols-3 grid gap-10">
              {products
                .filter((product, index) => index < 4)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    img={product.img}
                    name={product.name}
                    brand={product.brand}
                    rating={product.rating}
                    price={product.price}
                  />
                ))}
            </div>
          </div>

          <img
            src="/faded-beans2.png"
            alt=""
            className="absolute right-0 mix-blend-multiply	"
          />
        </section>

        <section className="flex flex-col justify-center min-h-[100vh] items-center py-4 mt-4">
          <div className="mx-auto text-center  w-full items-center justify-between p-2 lg:px-4 space-y-8">
            <h1 className="text-2xl font-bold">Exclusive Offers</h1>
            <div className="grid grid-cols-3 gap-10 mx-auto max-w-7xl">
              <article className="relative w-full overflow-hidden h-fit">
                <span className="absolute left-0 px-2 bg-white rounded-full m-4">
                  Up yo 55% Off
                </span>
                <img
                  src="https://images.unsplash.com/photo-1714386148315-2f0e3eebcd5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="image"
                  className="w-full aspect-auto"
                />
                <span className="bg-gradient-to-t from-black to-transparent absolute h-[40vh]  left-0 bottom-0 w-full"></span>
                <div className="absolute text-left bottom-5 p-8 text-white space-y-2">
                  <h2 className="text-3xl font-bold">
                    A bright spot: Budge-proof concealers
                  </h2>
                </div>
              </article>
              <article className="relative w-full overflow-hidden h-fit">
                <span className="absolute left-0 px-2 bg-white rounded-full m-4">
                  Up yo 55% Off
                </span>
                <img
                  src="https://images.unsplash.com/photo-1714386148315-2f0e3eebcd5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="image"
                  className="w-full aspect-auto"
                />
                <span className="bg-gradient-to-t from-black to-transparent absolute h-[40vh]  left-0 bottom-0 w-full"></span>
                <div className="absolute text-left bottom-5 p-8 text-white space-y-2">
                  <h2 className="text-3xl font-bold">
                    A bright spot: Budge-proof concealers
                  </h2>
                </div>
              </article>
              <article className="relative w-full overflow-hidden h-fit">
                <span className="absolute left-0 px-2 bg-white rounded-full m-4">
                  Up yo 55% Off
                </span>
                <img
                  src="https://images.unsplash.com/photo-1714386148315-2f0e3eebcd5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="image"
                  className="w-full aspect-auto"
                />
                <span className="bg-gradient-to-t from-black to-transparent absolute h-[40vh]  left-0 bottom-0 w-full"></span>
                <div className="absolute text-left bottom-5 p-8 text-white space-y-2">
                  <h2 className="text-3xl font-bold">
                    A bright spot: Budge-proof concealers
                  </h2>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
