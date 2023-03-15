import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className=" relative">
      <div className=" absolute w-full bg-gradient-to-t from-gray-100 to-transparent h-12  md:h-32 bottom-0 z-30" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="caroPic" />

        </div>

        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="caroPic" />


        </div>

        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="caroPic" />


        </div>

      </Carousel>

    </div>
  )
}

export default Banner