import { MoveLeft, MoveRight } from "lucide-react";
import { useSwiper } from "swiper/react";
const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex text-primary  justify-end gap-2 items-center">
      <div
        className="p-3 hover:cursor-pointer "
        onClick={() => swiper.slidePrev()}
      >
        <MoveLeft />
      </div>
      {/* <Minus /> */}
      <div
        className="p-3 hover:cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <MoveRight />
      </div>
    </div>
  );
};

export default SwiperButton;
