import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LanguageContext } from "../../context/ChangeLanguage";
import { CartContext } from "../../components/context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const HomePage = () => {
  const { lang } = useContext(LanguageContext);
  const { cart, addToCart, increase, decrease } = useContext(CartContext);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);

  // API dan kategoriyalarni olish
  async function getCategories() {
    try {
      const res = await axios.get(
        "https://693d1ae6f55f1be79301e90f.mockapi.io/categories"
      );
      setCategories(res.data);
      if (res.data.length > 0) setSelectCategory(res.data[0].id);
    } catch (err) {
      console.log(err);
    }
  }

  // API dan products olish
  async function getProducts() {
    try {
      const res = await axios.get(
        "https://693d1ae6f55f1be79301e90f.mockapi.io/products"
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <section className="pt-[90px]">
      <div className="container mx-auto px-5">
        {/* Category */}
        <div className="flex items-center gap-5 overflow-x-auto">
          {categories.map((el) => (
            <div
              key={el.id}
              onClick={() => setSelectCategory(el.id)}
              className={`
                min-w-[120px] h-[120px] cursor-pointer bg-white rounded-xl
                flex flex-col items-center justify-center gap-[5px]
                transition-all duration-300 shadow-md
                hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(180,70,0,0.85)]
                active:scale-95
                ${selectCategory === el.id ? "border-2 border-orange-500" : ""}
              `}
            >
              <img src={el.icon} alt="" className="w-[40px] h-[40px]" />
              <p className="text-[20px] font-bold text-orange-600 truncate">
                {el.title}
              </p>
            </div>
          ))}
        </div>

        {/* Swiper Products */}
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mt-8 py-5"
        >
          {products
            .filter((res) => res.categoryId == selectCategory)
            .map((el) => {
              const cartItem = cart.find((item) => item.id === el.id);

              return (
                <SwiperSlide key={el.id}>
                  <div
                    className="
                      w-full cursor-pointer bg-white rounded-xl
                      flex flex-col items-center justify-center gap-[5px]
                      transition-all duration-300 shadow-md
                      hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(180,70,0,0.85)]
                      active:scale-95
                    "
                  >
                    <img
                      src={el.image}
                      alt={el.title}
                      className="w-full h-[250px] object-cover"
                    />
                    <p className="truncate text-[20px] font-bold text-orange-600">
                      {el.title}
                    </p>

                    <div className="flex justify-center items-center gap-4 mt-4">
                      {!cartItem ? (
                        <button
                          onClick={() => addToCart(el)}
                          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
                        >
                          {lang === "uz"
                            ? "Savatchaga qo‘shish"
                            : lang === "ru"
                            ? "Добавить"
                            : "Add"}
                        </button>
                      ) : (
                        <div className="flex items-center gap-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                          <button onClick={() => decrease(el.id)}>-</button>
                          <span>{cartItem.quantity}</span>
                          <button onClick={() => increase(el.id)}>+</button>
                        </div>
                      )}
                      <p className="font-bold">
                        {el.basePrice} {el.currency || "$"}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        {/* All Products by Category */}
        <div className="mt-10">
          {categories.map((el) => (
            <div key={el.id} className="mb-8">
              <h1 className="text-[24px] font-bold mb-4">{el.title}</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center my-5 gap-5">
                {products
                  .filter((res) => res.categoryId == el.id)
                  .map((el) => {
                    const cartItem = cart.find((item) => item.id === el.id);

                    return (
                      <div
                        key={el.id}
                        className="
                          max-w-[450px] w-full cursor-pointer bg-white rounded-xl
                          flex flex-col items-center justify-center gap-[5px]
                          transition-all duration-300 shadow-md
                          hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(180,70,0,0.85)]
                          active:scale-95
                        "
                      >
                        <img
                          src={el.image}
                          alt={el.title}
                          className="w-full h-[250px] object-cover"
                        />
                        <p className="truncate text-[20px] font-bold text-orange-600">
                          {el.title}
                        </p>

                        <div className="flex justify-center items-center gap-4 mt-4">
                          {!cartItem ? (
                            <button
                              onClick={() => addToCart(el)}
                              className="bg-orange-500 text-white px-4 py-2 rounded-lg"
                            >
                              {lang === "uz"
                                ? "Savatchaga qo‘shish"
                                : lang === "ru"
                                ? "Добавить"
                                : "Add"}
                            </button>
                          ) : (
                            <div className="flex items-center gap-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                              <button onClick={() => decrease(el.id)}>-</button>
                              <span>{cartItem.quantity}</span>
                              <button onClick={() => increase(el.id)}>+</button>
                            </div>
                          )}
                          <p className="font-bold">
                            {el.basePrice} {el.currency || "$"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
