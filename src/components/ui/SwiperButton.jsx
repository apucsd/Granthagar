import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";
import { Button } from "./button";
const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex  justify-end gap-2 items-center">
      <Button
        className="p-3 text-primary"
        variant="outline"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeft></ChevronLeft>
      </Button>
      <Button
        variant="outline"
        className="p-3 text-primary"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight></ChevronRight>
      </Button>
    </div>
  );
};

export default SwiperButton;
