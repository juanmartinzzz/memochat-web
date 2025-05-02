import React from 'react';

const ChatInputField = ({ label, value, onChange, type = 'text', widthClass = 'w-full' }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`${widthClass} px-3 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                 text-gray-800 placeholder-gray-400
                 transition-all duration-200 ease-in-out
                 hover:bg-white hover:border-gray-300`}
    />
  </div>
);

export default ChatInputField;