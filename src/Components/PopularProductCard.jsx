import { star } from "../assets/icons"

const PopularProductCard = ({ name, imgURL, price, rate }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full justify-center items-center">
            <img src={imgURL}
                alt="product imgURL"
                width={250}
                height={250}
                className="" />
            <div className="mt-8 flex justify-start gap-2.5 ">
                <img
                    src={star}
                    alt="starRating"
                    width={24}
                    height={24}
                />
                <h1 className="font-montserrat text-slate-600 font-semibold text-18x leading-normal">({rate})</h1>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="text-coral-red font-montserrat font-semibold text-21x leading-normal mt-2">{price}</p>

        </div>
    )
}

export default PopularProductCard
