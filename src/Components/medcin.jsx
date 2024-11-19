import React, { useState } from "react";

const MedicineCard = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddMedicine = () => {
    alert(`Added ${quantity} medicine(s) to the cart.`);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      <div className="p-6">
        <h2 className="text-xl text-[#4f9451] font-semibold mb-2">
          Patient Name: <span className="font-medium text-gray-600">John Doe</span>
        </h2>
        <h3 className="text-lg font-semibold text-[#4f9451] mb-2">
          Medicine: <span className="font-medium text-gray-600">Paracetamol</span>
        </h3>
        <p className=" mb-4 text-[#2e6430]">
          Description: <p className="text-gray-700">This medicine is used to treat mild to moderate pain and reduce fever.</p>
        </p>
        <p className="text-gray-800 font-bold mb-4">Price: <p className="text-[#4f9451]">$10.00</p></p>

        <div className="flex flex-col items-start space-y-2 relative">
  <label
    htmlFor="quantity"
    className="block text-sm font-medium text-gray-600"
  >
    Amount
  </label>
  <select
    id="quantity"
    value={quantity}
    onChange={(e) => setQuantity(Number(e.target.value))}
    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm z-10"
  >
    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
      <option key={num} value={num}>
        {num}
      </option>
    ))}
  </select>
</div>

          <button
            onClick={handleAddMedicine}
            className="bg-[#4f9451] hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mt-5 "
          >
            Add Medicine
          </button>
        </div>
      </div>
    
  );
};

export default MedicineCard;
