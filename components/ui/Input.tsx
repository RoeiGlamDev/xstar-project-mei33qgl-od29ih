import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, required = false, validationMessage }) => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (required && e.target.value.trim() === '') {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleBlur = () => {
    if (required && value.trim() === '') {
      setIsError(true);
    } else {
      setIsError(false);
    }
    setIsFocused(false);
  };

  return (
    <div className="mb-6">
      <label className={block text-lg font-bold text-orange-500 mb-2 ${isFocused || value ? 'text-orange-500' : 'text-white'}}>
        {label}
      </label>
      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        className={w-full p-4 rounded-md shadow-lg transition duration-300 ease-in-out 
          ${isError ? 'border-red-500' : 'border-white'} 
          bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      {isError && validationMessage && (
        <p className="text-red-500 text-sm mt-1">{validationMessage}</p>
      )}
    </div>
  );
};

export default Input;