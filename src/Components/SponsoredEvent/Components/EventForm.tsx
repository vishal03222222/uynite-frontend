import { useState } from "react";
import UploadImage from './UploadIcon.svg';

interface EventFormProps {
  eventName: string;
  setEventName: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  scheduleType: string;
  setScheduleType: (value: string) => void;
  mediaType: string;
  setMediaType: (value: string) => void;
  rootPoster1: string | null;
  setRootPoster1: (value: string | null) => void;
  rootPoster2: string | null;
  setRootPoster2: (value: string | null) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  termsImage: string | null;
  setTermsImage: (value: string | null) => void;
  handleImageChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isEditing: boolean;
}

const EventForm: React.FC<EventFormProps> = ({
  eventName,
  setEventName,
  country,
  setCountry,
  scheduleType,
  setScheduleType,
  mediaType,
  setMediaType,
  rootPoster1,
  setRootPoster1,
  rootPoster2,
  setRootPoster2,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  termsImage,
  setTermsImage,
  handleImageChange,
  onSubmit,
  onCancel,
  isEditing,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {/* Event Name */}
      <input
        type="text"
        placeholder="Event Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      {/* Country */}
      <select
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option>Select Country</option>
        <option>United States</option>
        <option>Canada</option>
        <option>United Kingdom</option>
        <option>Australia</option>
        <option>India</option>
        <option>Germany</option>
        <option>France</option>
        <option>Japan</option>
        <option>Brazil</option>
        <option>South Africa</option>
      </select>

      {/* Schedule Type */}
      <select
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        value={scheduleType}
        onChange={(e) => setScheduleType(e.target.value)}
      >
        <option>Select Schedule Type</option>
        <option>Create Into List</option>
        <option>Up Coming Event</option>
        <option>On-Going Event</option>
      </select>

      {/* Media Type */}
      <select
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4"
        value={mediaType}
        onChange={(e) => setMediaType(e.target.value)}
      >
        <option>Video</option>
      </select>

      {/* Root Poster 1 */}
      <UploadImage
        label="Posters Display in Root (1)"
        id="rootPoster1-upload"
        image={rootPoster1}
        onChange={(e) => handleImageChange(e, setRootPoster1)}
      />

      {/* Root Poster 2 */}
      <UploadImage
        label="Posters Display in Root (2)"
        id="rootPoster2-upload"
        image={rootPoster2}
        onChange={(e) => handleImageChange(e, setRootPoster2)}
      />

      {/* Date Range */}
      <div className="mb-4 flex items-center space-x-2">
        <input
          type="datetime-local"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <span className="text-gray-600">To</span>
        <input
          type="datetime-local"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Terms & Conditions Image */}
      <ImageUpload
        label="Terms & Conditions"
        id="termsImage-upload"
        image={termsImage}
        onChange={(e) => handleImageChange(e, setTermsImage)}
      />

      {/* Submit & Cancel */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:bg-blue-600 transition mb-2"
      >
        {isEditing ? "Update Event" : "Create Event"}
      </button>

      <button
        type="button"
        className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg shadow-md hover:bg-gray-400 transition"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default EventForm;