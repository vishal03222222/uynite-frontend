interface EventSummaryProps {
    submittedData: {
      eventName: string;
      country: string;
      scheduleType: string;
      mediaType: string;
      startDate: string;
      endDate: string;
      rootPoster1: string | null;
      rootPoster2: string | null;
      termsImage: string | null;
    };
    onEdit: () => void;
  }
  
  const EventSummary: React.FC<EventSummaryProps> = ({ submittedData, onEdit }) => {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          <span className="align-center text-black-500">{submittedData.eventName}</span>
        </h3>
  
        <p className="text-gray-600 mb-2">
          <strong>Selected Country:</strong>{" "}
          <span className="text-blue-500 underline">{submittedData.country}</span>
        </p>
  
        <p className="text-gray-600">
          <strong>Schedule Type:</strong> {submittedData.scheduleType}
        </p>
        <p className="text-gray-600">
          <strong>Media Type:</strong> {submittedData.mediaType}
        </p>
  
        <div className="flex items-center mt-3 text-gray-700">
          <p className="mr-4">
            <strong>From:</strong> {submittedData.startDate}
          </p>
          <p>
            <strong>To:</strong> {submittedData.endDate}
          </p>
        </div>
  
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Posters Display in Roots</h4>
          {submittedData.rootPoster1 && (
            <img
              src={submittedData.rootPoster1}
              alt="Root Poster 1"
              className="max-w-full h-auto object-contain"
            />
          )}
        </div>
  
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Posters Display into Event</h4>
          {submittedData.rootPoster2 && (
            <img
              src={submittedData.rootPoster2}
              alt="Root Poster 2"
              className="max-w-full h-auto object-contain"
            />
          )}
        </div>
  
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Terms & Conditions</h4>
          {submittedData.termsImage && (
            <img
              src={submittedData.termsImage}
              alt="Terms & Conditions Poster"
              className="max-w-full h-auto object-contain"
            />
          )}
        </div>
  
        <div className="flex justify-between ml-50px items-center mt-6">
          <button
            type="button"
            className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition mr-21.5rem"
            onClick={onEdit}
          >
            Edit Event
          </button>
  
          <button
            disabled
            className="ml-50px px-5 py-2 bg-gray-300 text-gray-600 font-semibold rounded-lg cursor-not-allowed"
          >
            Event Created into List Successfully
          </button>
        </div>
      </div>
    );
  };
  
  export default EventSummary;