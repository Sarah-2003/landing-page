import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container bg-pale-blue dark:bg-gray-800 py-24'>
      <h3 className='font-palanquin text-center text-4xl font-bold text-gray-900 dark:text-white'>
        What Our
        <span className='text-coral-red dark:text-blue-400'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center text-slate-gray dark:text-gray-300'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;