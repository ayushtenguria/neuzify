"use client";

import { useState } from "react";
import Animation from "./Animation";

// Define an interface for form data
interface FormData {
  name: string;
  email: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setIsSubmitted(true); // Show thank you message
      } else {
        console.error("Error submitting form data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-blue-950 p-5 rounded-xl">
      {isSubmitted ? (
        <>
          <div className="flex justify-center items-center">
            <h2 className="text-2xl font-bold text-white">
              Thank you for subscribing to Beta Testing!
            </h2>
            <div className="h-32 w-32">
              <Animation />
            </div>
           
          </div>
        </>
      ) : (
        <form
          className="bg-blue-950/90 rounded-xl p-6 text-white shadow-md m-5 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-4 text-center">
            Subscribe to Beta Testing
          </h1>

          <div className="mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900 border-white border transition-colors"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
