/* eslint-disable react/prop-types */
const SingleReview = ({ name, review }) => {
    return (      
      <div className="flex flex-col items-center w-full mb-8 md:flex-row md:mb-8 flex-between">
        <div className="border-2 border-customGreen/50 w-80 h-48 shadow-xl mx-auto rounded-xl p-4 flex flex-col justify-between">
          <p className="text-black text-xl italic">
            <span className="text-3xl font-bold">“</span>
            {review}
            <span className="text-3xl font-bold">”</span>
          </p>
          <div className="flex items-start mt-4">
            <div className="flex flex-col justify-between ml-2">
              <span className="text-s font-semibold font-marteni text-black">
                {name}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleReview;