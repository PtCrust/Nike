import Button from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between max-lg:flex-col gap-10 items-center w-full max-container">
      <div className="flex flex-1 flex-col ">
        <h2 className="text-4xl capitalize lg:max-w-lg font-montserrat font-semibold">We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes</h2>

        <p className="mt-4 info-text lg:max-w-lg">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experiance, providing you with unmatched quality, innovation, and a touch of elegance.</p>

        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellance ensures your satisfictions</p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          width={570}
          height={522}
          alt="SuperQualityimg"
          className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality
