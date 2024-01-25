import Button from "../Components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex flex-col justify-center items-center max-lg:flex-col gap-10">
      <h3 className=" text-4xl leading-[68px] font-bold font-palanquin">
        Sign Up from
        <span className=" text-coral-red"> Updates</span> & Newsletters
      </h3>
      <div className="flex items-center gap-5 p-2.5 rounded-full border-2 lg:max-w-[90%] max-sm:flex-col max-sm:border-none w-full justify-between">
        <input type="text" placeholder="subscribe@nike.com"
          className="input" />
        <Button label="Sign Up" />
      </div>

    </section>
  )
}

export default Subscribe
