import React, { useState } from "react";

const TabelPataints = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([
        {
            name: "Christina Bersh",
            age: 45,
            address: "4222 River Rd, Columbus",
        },
        {
            name: "Endy Ruiz",
            age: 45,
            address: "1818 H St NW, Washington",
        },
        {
            name: "Jack Li",
            age: 27,
            address: "3 Grace Dr, New Mexico",
        },
    ]);
    const [editRow, setEditRow] = useState(null);  // لتخزين الصف الذي يتم تعديله
    const [editedData, setEditedData] = useState({ name: "", age: "", address: "" });  // البيانات المعدلة

    const filteredData = data.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDelete = (name) => {
        setData(data.filter((row) => row.name !== name));
    };

    const handleEdit = (row) => {
        setEditRow(row.name);  // تعيين الصف الذي يتم تعديله
        setEditedData({ name: row.name, age: row.age, address: row.address });  // تعيين البيانات المعدلة
    };

    const handleSave = (name) => {
        const updatedData = data.map((row) =>
            row.name === name ? { ...row, ...editedData } : row
        );
        setData(updatedData);
        setEditRow(null);  // إلغاء وضع التعديل بعد حفظ البيانات
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto min-h-[631px]">
                <div className="min-w-full inline-block align-middle">
                    <div className="py-3">
                        <div className="relative max-w-xs">
                            <label htmlFor="search-input" className="sr-only">
                                Search
                            </label>
                            <input
                                type="text"
                                id="search-input"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                placeholder="Search for items"
                            />
                        </div>
                    </div>

                    <div className="overflow-hidden min-h-[509px]">
                        <table className="min-w-full">
                            <thead className="border-y border-gray-200 dark:border-neutral-700">
                                <tr>
                                    <th className="py-1 px-3 pe-0">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                className="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                            />
                                        </div>
                                    </th>
                                    <th className="py-1 text-left font-normal">Name</th>
                                    <th className="py-1 text-left font-normal">Age</th>
                                    <th className="py-1 text-left font-normal">Address</th>
                                    <th className="py-2 px-3 text-right font-normal">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {filteredData.map((row) => (
                                    <tr key={row.name}>
                                        <td className="py-3 ps-3">
                                            <div className="flex items-center h-5">
                                                <input
                                                    type="checkbox"
                                                    className="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                />
                                            </div>
                                        </td>
                                        <td className="p-3 text-sm font-medium text-gray-800 dark:text-neutral-200">
                                            {editRow === row.name ? (
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editedData.name}
                                                    onChange={handleChange}
                                                    className="text-sm"
                                                />
                                            ) : (
                                                row.name
                                            )}
                                        </td>
                                        <td className="p-3 text-sm text-gray-800 dark:text-neutral-200">
                                            {editRow === row.name ? (
                                                <input
                                                    type="number"
                                                    name="age"
                                                    value={editedData.age}
                                                    onChange={handleChange}
                                                    className="text-sm"
                                                />
                                            ) : (
                                                row.age
                                            )}
                                        </td>
                                        <td className="p-3 text-sm text-gray-800 dark:text-neutral-200">
                                            {editRow === row.name ? (
                                                <input
                                                    type="text"
                                                    name="address"
                                                    value={editedData.address}
                                                    onChange={handleChange}
                                                    className="text-sm"
                                                />
                                            ) : (
                                                row.address
                                            )}
                                        </td>
                                        <td className="p-3 text-right text-sm font-medium">
                                            {editRow === row.name ? (
                                                <button
                                                    onClick={() => handleSave(row.name)}
                                                    className="text-green-600 hover:text-green-800"
                                                >
                                                    Save
                                                </button>
                                            ) : (
                                                <>
                                                    <button
                                                        onClick={() => handleEdit(row)}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(row.name)}
                                                        className="text-red-600 hover:text-red-800 ml-2"
                                                    >
                                                        Delete
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabelPataints;
