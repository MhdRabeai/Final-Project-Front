
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

const TabelPharmaceutical = () => {
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

    return (

        <div className="flex justify-center my-6">
            <div className="overflow-x-auto min-h-[631px] w-full max-w-7xl">

                <div className="min-w-full inline-block align-middle border border-gray-300 rounded-lg">
                    <div className="py-3 px-4">

                        <h1 className="text-2xl font-bold text-center  ">
                            All Pharmaceutical
                        </h1>
                        <div className="relative max-w-xs">
                            <label htmlFor="search-input" className="sr-only">Search</label>
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
                        {sortedData.length === 0 ? (
                            <div className="flex justify-center items-center h-full">
                                <img
                                    src="/People search-amico.png"
                                    alt="No results found"
                                    className="w-1/2 h-auto"
                                />
                            </div>
                        ) : (
                            <table className="min-w-full table-auto">
                                <thead className="border-y border-gray-200 dark:border-neutral-700">
                                    <tr>
                                        <th></th>
                                        <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
                                            <button onClick={() => handleSort('name')} className="text-left">
                                                Name
                                            </button>
                                        </th>
                                        <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
                                            <button onClick={() => handleSort('age')} className="text-left">
                                                Age
                                            </button>
                                        </th>
                                        <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
                                            <button onClick={() => handleSort('address')} className="text-left">
                                                Address
                                            </button>
                                        </th>
                                        <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
                                            <button onClick={() => handleSort('email')} className="text-left">
                                                Email
                                            </button>
                                        </th>
                                        <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
                                            <button onClick={() => handleSort('phonenumber')} className="text-left">
                                                Phone Number
                                            </button>
                                        </th>
                                        <th className="py-3 px-2 text-left font-medium text-[#4F9451]">
                                            <button onClick={() => handleSort('gender')} className="text-left">
                                                Gender
                                            </button>
                                        </th>
                                        <th className="py-3 pr-10 text-right font-medium text-[#4F9451]">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                    {sortedData.map((row) => (
                                        <tr key={row.name} className="border-b border-gray-300 dark:border-neutral-700">
                                            <td className="py-3 px-3">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        type="checkbox"
                                                        className="border-gray-300 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
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
                                            <td className="p-3 text-sm text-gray-800 dark:text-neutral-200">
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
                                            <td className="p-3 text-sm text-gray-800 dark:text-neutral-200">
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
                                            <td className="p-3 text-sm text-gray-800 dark:text-neutral-200">
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
                                                    <span
                                                        onClick={() => handleSave(row.name)}
                                                        className="text-green-600 cursor-pointer hover:text-green-800"
                                                    >
                                                        <FontAwesomeIcon icon={faSave} />
                                                    </span>
                                                ) : (
                                                    <>
                                                        <span
                                                            onClick={() => handleEdit(row)}
                                                            className="text-blue-600 cursor-pointer hover:text-blue-800 mx-4"
                                                        >
                                                            <FontAwesomeIcon icon={faPencilAlt} />
                                                        </span>
                                                        <span
                                                            onClick={() => handleDelete(row.name)}
                                                            className="text-red-600 cursor-pointer hover:text-red-800"
                                                        >
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </span>
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
