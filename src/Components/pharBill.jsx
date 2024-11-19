import React from "react";

const BillCard = () => {
    const patientName = "John Doe";
    const medicines = [
      { name: "Paracetamol", quantity: 2, price: 5.0 },
      { name: "Ibuprofen", quantity: 1, price: 8.5 },
      { name: "Amoxicillin", quantity: 3, price: 12.0 },
    ];
    const totalPrice = medicines.reduce(
      (total, med) => total + med.quantity * med.price,
      0
    );
    const sellDate = new Date().toLocaleDateString();
    
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 h-96 w-96">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-[#4f9451] mb-4">
          Patient Name: <span className="font-medium text-gray-700">{patientName}</span>
        </h2>
        <h3 className="text-lg font-semibold text-[#4f9451] mb-2">
          Medicines Bought:
        </h3>
        <ul className="list-disc pl-5 mb-4 ">
          {medicines.map((medicine, index) => (
            <li key={index} className="text-gray-700">
              {medicine.name} - {medicine.quantity} x ${medicine.price} = $
              {(medicine.quantity * medicine.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="border-t pt-4">
          <p className="text-lg font-bold text-[#4f9451] mb-2">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
          <p className="text-sm text-gray-700">Date: {sellDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BillCard;
