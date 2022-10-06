//@ts-ignore
// import { Carousel } from "3d-react-carousal";
import Carousel from "react-spring-3d-carousel";

const CarouselTmpl = ({ forwardRef, ...otherProps }: any) => (
  <Carousel {...otherProps} ref={forwardRef} />
);

export default CarouselTmpl;
