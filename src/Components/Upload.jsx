import { useState } from "react";
import { useDropzone } from "react-dropzone";

const Upload = () => {
  const [clothes, setClothes] = useState([]);
  const [error, setError] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: ["image/jpeg", "image/png", "image/gif"],
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        setError("Only .jpg, .png, and .gif image files are allowed.");
        setClothes([]); // Clear previews
      } else {
        setError(""); // Clear error if files are valid

        acceptedFiles.forEach((file) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const newCloth = {
              id: generateRandomId(),
              name: file.name,
              image: reader.result,
            };
            setClothes((prev) => [...prev, newCloth]);
          };
          reader.readAsDataURL(file);
        });
      }
    },
  });

  // Function to generate a random ID
  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  // Function to save individual objects to localStorage
  const handleClick = () => {
    clothes.forEach((cloth) => {
      localStorage.setItem(cloth.id, JSON.stringify(cloth));
    });
    alert("Clothes saved to localStorage!");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Dropzone */}
      <div
        {...getRootProps({ className: "dropzone" })}
        className="border-2 border-dashed border-gray-400 p-6 rounded-lg text-center cursor-pointer hover:border-blue-500 transition"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag and drop photos here, or click to select photos (.jpg, .png,
          .gif)
        </p>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Image Previews */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {clothes.length > 0 &&
          clothes.map((cloth, index) => (
            <div
              key={cloth.id}
              className="w-full h-24 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={cloth.image}
                alt={`preview-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>

      {/* Save Button */}
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4"
        onClick={handleClick}
      >
        Save to Local Storage
      </button>
    </div>
  );
};

export default Upload;
