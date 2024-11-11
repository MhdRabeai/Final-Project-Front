import React from "react";
import PropTypes from "prop-types";
export const Input = ({
  inputLabel,
  inputType,
  inputPlaceHolder,
  inputName,
}) => {
  Input.propTypes = {
    inputLabel: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputPlaceHolder: PropTypes.string,
    inputName: PropTypes.string.isRequired,
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="hs-hero-name-2"
        className="block text-sm font-medium dark:text-white"
      >
        <span className="sr-only">{inputLabel}</span>
      </label>
      <input
        type={inputType}
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder={inputPlaceHolder}
        name={inputName}
      />
    </div>
  );
};
