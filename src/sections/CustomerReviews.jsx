import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container bg-slate-50">
      <h3 className="font-palanquin text-4xl capitalize font-bold text-center">
        What our
        <span className="text-coral-red"> Customers </span>
        say?
      </h3>
      <p className="text-center info-text mt-4 m-auto max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias illo totam natus deserunt perferendis.</p>
      <div className=" mt-24 flex flex-wrap justify-center items-center max-lg:flex-col  gap-10">
      {/* <div className="mt-24 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-3 place-items-center gap-14"> */}
        {
          reviews.map((review) =>(
            <ReviewCard key={review.customerName} 
              {...review}
            />
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews
