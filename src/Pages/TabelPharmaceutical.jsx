
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
const TabelPharmaceutical = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([
        {
            name: "Christina Bersh",
            age: 45,
            address: "4222 River Rd, Columbus",
            email: "christina@example.com",
            password: "******",
            gender: "Female",
            phonenumber: "123-456-7890"
        },
        {
            name: "Endy Ruiz",
            age: 45,
            address: "1818 H St NW, Washington",
            email: "endy@example.com",
            password: "******",
            gender: "Male",
            phonenumber: "987-654-3210"
        },
        {
            name: "Jack Li",
            age: 27,
            address: "3 Grace Dr, New Mexico",
            email: "jack@example.com",
            password: "******",
            gender: "Male",
            phonenumber: "555-123-4567"
        },
    ]);
    const [editRow, setEditRow] = useState(null);
    const [editedData, setEditedData] = useState({
        name: "",
        age: "",
        address: "",
        email: "",
        password: "",
        gender: "",
        phonenumber: ""
    });

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const filteredData = data.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedData = React.useMemo(() => {
        let sortableData = [...filteredData];
        if (sortConfig.key) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [filteredData, sortConfig]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDelete = (name) => {
        setData(data.filter((row) => row.name !== name));
    };

    const handleEdit = (row) => {
        setEditRow(row.name);
        setEditedData({ ...row });
    };

    const handleSave = (name) => {
        const updatedData = data.map((row) =>
            row.name === name ? { ...row, ...editedData } : row
        );
        setData(updatedData);
        setEditRow(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };
    const handleAddPharmaceutical = () => {
        navigate("/dashboard/admin/CreateAccountPharmaceutical");
    };
    return (
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 h-full">
            <div className="overflow-x-auto w-full max-w-7xl">
                <div className="min-w-full inline-block align-middle border border-gray-300 rounded-lg">
                    <div className="py-5 px-4 relative">
                        <h1 className="text-xl sm:text-2xl font-bold text-center my-4">All Pharmaceutical</h1>
                        <button
                            onClick={handleAddPharmaceutical}
                            className="px-4 py-2 w-full sm:w-auto text-center text-white bg-[#4F9451] rounded-lg hover:bg-[#3a763e] transition duration-300"
                        >
                            Add Pharmaceutical
                        </button>
                        </div>
                    <div className="relative max-w-xs sm:max-w-md lg:max-w-lg mx-auto my-4">
                        <label htmlFor="p-5 search-input" className="sr-only">
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
                  

                    <div className="overflow-x-auto">
                        {sortedData.length === 0 ? (
                            <div className="flex justify-center items-center h-full">
                                <img
                                    src="/People search-amico.png"
                                    alt="No results found"
                                    className="w-1/2 h-auto"
                                />
                            </div>
                        ) : (
                                <table className="min-w-full table-auto text-sm sm:text-base">
                                    <thead className="border-y border-gray-200 dark:border-neutral-700 bg-[#4F9451]">
                                        <tr>
                                            <th></th>
                                            <th className="py-3 px-2 text-left font-medium text-white">
                                                <button onClick={() => handleSort("name")} className="text-left text-white">Name</button>
                                            </th>
                                            <th className="py-3 px-2 text-left font-medium text-white">
                                                <button onClick={() => handleSort("age")} className="text-left text-white">Age</button>
                                            </th>
                                            <th className="py-3 px-2 text-left font-medium text-white hidden lg:table-cell">
                                                <button onClick={() => handleSort("address")} className="text-left text-white">Address</button>
                                            </th>
                                            <th className="py-3 px-2 text-left font-medium text-white">
                                                <button onClick={() => handleSort("email")} className="text-left text-white">Email</button>
                                            </th>
                                            <th className="py-3 px-2 text-left font-medium text-white hidden sm:table-cell">
                                                <button onClick={() => handleSort("phonenumber")} className="text-left text-white">Phone Number</button>
                                            </th>
                                            <th className="py-3 px-2 text-left font-medium text-white hidden sm:table-cell">
                                                <button onClick={() => handleSort("gender")} className="text-left text-white">Gender</button>
                                            </th>
                                            <th className="py-3 px-2 text-left font-medium text-white hidden md:table-cell">Action</th>
                                        </tr>
                                    </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    {sortedData.map((row) => (
                                        <tr key={row.name} className="border-b border-gray-300 dark:border-neutral-700">
                                            <td className="py-3 px-3">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        type="checkbox"
                                                        className="shrink-0 mt-0.5 border-gray-200 rounded text-[#4f9451] focus:ring-[#4f9451] dark:bg-neutral-800 dark:border-neutral-700"
                                                    />
                                                </div>
                                            </td>
                                            <td className="p-3 text-sm text-gray-800 dark:text-neutral-200">
                                                {editRow === row.name ? (
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={editedData.name}
                                                        onChange={handleChange}
                                                        className="text-sm border p-2 rounded-md"
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
                                                        className="text-sm border p-2 rounded-md"
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
                                                        className="text-sm border p-2 rounded-md"
                                                    />
                                                ) : (
                                                    row.address
                                                )}
                                            </td>
                                            <td className="p-3 text-sm text-gray-800 dark:text-neutral-200 hidden lg:table-cell">
                                                {editRow === row.name ? (
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={editedData.email}
                                                        onChange={handleChange}
                                                        className="text-sm border p-2 rounded-md"
                                                    />
                                                ) : (
                                                    row.email
                                                )}
                                            </td>
                                            <td className="p-3 text-sm text-gray-800 dark:text-neutral-200 hidden sm:table-cell">
                                                {editRow === row.name ? (
                                                    <input
                                                        type="text"
                                                        name="phonenumber"
                                                        value={editedData.phonenumber}
                                                        onChange={handleChange}
                                                        className="text-sm border p-2 rounded-md"
                                                    />
                                                ) : (
                                                    row.phonenumber
                                                )}
                                            </td>
                                            <td className="p-3 text-sm text-gray-800 dark:text-neutral-200 hidden lg:table-cell">
                                                {editRow === row.name ? (
                                                    <select
                                                        name="gender"
                                                        value={editedData.gender}
                                                        onChange={handleChange}
                                                        className="text-sm border p-2 rounded-md"
                                                    >
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                ) : (
                                                    row.gender
                                                )}
                                            </td>
                                            <td className="p-3 text-right">
                                                {editRow === row.name ? (
                                                    <div className="bg-green-100 rounded-full p-2 cursor-pointer" onClick={() => handleSave(row.name)}>
                                                        <FontAwesomeIcon icon={faSave} className="text-green-500" />
                                                    </div>
                                                ) : (
                                                    <>
                                                            <div className="flex items-center">
                                                                <div className="bg-blue-100 rounded-full p-2 cursor-pointer mx-2"
                                                                    onClick={() => handleEdit(row)}>
                                                                    <FontAwesomeIcon icon={faPencilAlt} className="text-blue-500" />
                                                                </div>
                                                                <div className="bg-red-100 rounded-full p-2 cursor-pointer" onClick={() => handleDelete(row.name)}>
                                                                    <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                                                                </div>
                                                            </div>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabelPharmaceutical;
