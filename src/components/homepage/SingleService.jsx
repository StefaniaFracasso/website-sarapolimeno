/* eslint-disable react/prop-types */
const SingleService = ({ icon, name, desc }) => {
    return (
      <div className="flex flex-row border-2 border-grey-400 rounded-lg">
        <div className="w-1/2 p-4 flex justify-center align-middle">
          {icon}
        </div>
        <div className="w-2/3 p-4 flex flex-col">
          <h3 className="text-gray-900 font-bold text-xl mb-2">
            {name}
          </h3>
          <p className="text-gray-700 text-base">
            {desc}
          </p>
        </div>
      </div>
    );
  };
  
  export default SingleService;