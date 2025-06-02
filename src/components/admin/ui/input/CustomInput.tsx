// components/CustomFileInput.tsx
import React, { useRef } from "react";

interface CustomFileInputProps {
  onFileSelect: (file: File) => void;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="px-4 py-2 bg-gradient-to-t from-blue-600 to-blue-500 text-white w-[97%] xl:w-[350px] h-[40px] rounded-lg hover:bg-blue-700 transition"
      >
        Chose Your Image
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default CustomFileInput;
