import UploadImage from './UploadIcon.svg';

interface ImageUploadProps {
  label: string;
  id: string;
  image: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ label, id, image, onChange }) => {
  return (
    <div className="mb-4">
      <p className="font-semibold text-gray-700">{label}</p>
      <div className="w-full h-32 flex items-center justify-center border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 transition">
        <label htmlFor={id} className="w-full h-full flex items-center justify-center">
          <div style={{ marginTop: "2px" }}>
            <img src={UploadImage} alt="Upload" /><br />
            Add Image
          </div>
          <input
            id={id}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onChange}
          />
        </label>
      </div>
      {image && (
        <img
          src={image}
          alt="Uploaded"
          className="mt-2 h-24 w-24 object-cover border border-gray-300"
        />
      )}
    </div>
  );
};

export default ImageUpload;