
const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="flex-1 sm:w-[350] sm:min-w-[350px] rounded-xl px-10 py-16 shadow-3xl w-full max-sm:w-full">
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img
                    src={imgURL}
                    alt="service card"
                    width={24}
                    height={24}
                    className="" />
            </div>
            <h3 className="mt-5 text-3xl leading-normal font-bold font-palanquin">{label}</h3>
            <p className="mt-3 break-words font-montserrat text-lg text-slate-600 leading-normal">{subtext}</p>

        </div>
    )
}

export default ServiceCard
