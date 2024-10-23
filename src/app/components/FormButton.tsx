
import React from 'react';

interface AddToWaitlistButtonProps {
  onClick: () => void;
  title : string,
}

const FormButton: React.FC<AddToWaitlistButtonProps> = ({ onClick ,title }) => {
  return (
    <button
      onClick={onClick}
      className="md:mt-6 md:px-6 py-2 w-40 md:w-60 font-semibold bg-blue-950 text-white border-white border-2 rounded-lg shadow hover:bg-blue-900 hover:scale-105 transform transition-transform duration-300"
    >
     {title}
    </button>
  );
};

export default FormButton;
