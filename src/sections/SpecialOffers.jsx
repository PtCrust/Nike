import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffers = () => {
  return (
    <section id="specialOffer" className="flex justify-center max-xl:flex-col-reverse  max-container gap-10 items-center">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={733}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="text-4xl capitalize lg:max-w-lg font-montserrat font-semibold text-coral-red">special
          <span className="text-black"> offer</span></h2>

        <p className="mt-4 info-text w-[100%]">Embark on a shopping journey that redifines your experience with unbeatable deals, From premier selections to incredible saving, we offer unparalled value that sets us apart.</p>

        <p className="mt-6 lg:max-w-lg info-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, necessitatibus quisquam inventore minus excepturi harum perspiciatis, cupiditate quidem itaque ipsa hic voluptate, omnis sunt! Debitis id consequatur necessitatibus tenetur eum.</p>
        <div className="mt-11 flex gap-5">
          <Button label="Shop now" iconURL={arrowRight} />
          <button className="rounded-full flex justify-center items-center gap-2 px-7 py-4 border-2 border-slate-300  shadow-slate-300 shadow-md  font-montserrat text-lg leading-none bg-white ">Learn more</button>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers
