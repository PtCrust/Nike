import { star } from "../assets/icons"

const ReviewCard = ({ customerName, imgURL, feedback, rating }) => {
    return (
        <div className="flex w-96 flex-col justify-center items-center gap-4 max-sm:w-64">
            
            <img src={imgURL}
                alt="feedbackIMg"
                className="rounded-[50%] w-40 h-40 border-2 border-coral-red p-1"
            />
            
            <p className="info-text text-center">{feedback}</p>
            
            <div className="flex gap-3 justify-center items-center">
                <img src={star}
                    alt="starRating"
                    width={24}
                    height={24}
                />

                <p className="info-text font-semibold">({rating})</p>
            </div>
            
            <h1 className="font-bold text-3xl font-palanquin">{customerName}</h1>
        </div>
    )
}

export default ReviewCard
