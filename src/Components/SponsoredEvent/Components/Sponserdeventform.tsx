import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventForm from "./EventForm";
import EventSummary from "./EventSummary";

const SponsoredEventForm: React.FC<{ allEvents: any[], setShowForm: React.Dispatch<React.SetStateAction<boolean>> }> = ({ allEvents, setShowForm }) => {
  const navigate = useNavigate();

  // ---- Form states ----
  const [eventName, setEventName] = useState("");
  const [country, setCountry] = useState("");
  const [scheduleType, setScheduleType] = useState("");
  const [mediaType, setMediaType] = useState("Video");
  const [rootPoster1, setRootPoster1] = useState<string | null>(null);
  const [rootPoster2, setRootPoster2] = useState<string | null>(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [termsImage, setTermsImage] = useState<string | null>(null);

  // ---- Submission states ----
  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [isEditing, setIsEditing] = useState(true);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSubmit = {
      title: eventName,
      location: country,
      category: "On Going Event",
      eventName,
      country,
      scheduleType,
      mediaType,
      rootPoster1,
      rootPoster2,
      startDate,
      endDate,
      termsImage,
    };

    setSubmittedData(dataToSubmit);
    allEvents.push(dataToSubmit);
    console.log(allEvents);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg lg:grid-cols-0 shadow-lg border border-gray-200">
      {/* Back Button */}
      <button
        className="text-xl mb-4 hover:text-blue-500 transition"
        onClick={() => setShowForm(false)}
      >
        &#8592;
      </button>

      {/* Title */}
      <h2 className="ml-500px text-2xl font-extrabold text-gray-800 mb-4">
        Event Type: <span className="text-blue-500">Sponsored Event</span>
      </h2>

      {/* Show form or summary based on editing state */}
      {isEditing ? (
        <EventForm
          eventName={eventName}
          setEventName={setEventName}
          country={country}
          setCountry={setCountry}
          scheduleType={scheduleType}
          setScheduleType={setScheduleType}
          mediaType={mediaType}
          setMediaType={setMediaType}
          rootPoster1={rootPoster1}
          setRootPoster1={setRootPoster1}
          rootPoster2={rootPoster2}
          setRootPoster2={setRootPoster2}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          termsImage={termsImage}
          setTermsImage={setTermsImage}
          handleImageChange={handleImageChange}
          onSubmit={handleSubmit}
          onCancel={() => setShowForm(false)}
          isEditing={isEditing}
        />
      ) : (
        <EventSummary submittedData={submittedData} onEdit={handleEdit} />
      )}
    </div>
  );
};

export default SponsoredEventForm;