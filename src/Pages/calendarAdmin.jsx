import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const doctors = [
  { id: 1, name: "Dr. John Doe" },
  { id: 2, name: "Dr. Jane Smith" },
  { id: 3, name: "Dr. Adam Johnson" },
];

const initialEvents = [
  {
    id: uuidv4(),
    title: "Meeting",
    start: new Date(2024, 10, 15, 10, 0),
    end: new Date(2024, 10, 15, 12, 0),
    allDay: false,
    doctorId: 1,
  },
  {
    id: uuidv4(),
    title: "Conference",
    start: new Date(2024, 10, 20, 9, 0),
    end: new Date(2024, 10, 20, 11, 0),
    allDay: false,
    doctorId: 2, 
  },
];

const CalendarAdmin = () => {
  const [events, setEvents] = useState(initialEvents);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    start: null,
    end: null,
    doctorId: null,
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredEvents = selectedDoctor
    ? events.filter((event) => event.doctorId === selectedDoctor.id)
    : events;

  const handleSelectSlot = (slotInfo) => {
    setNewEvent({
      title: "",
      description: "",
      start: slotInfo.start,
      end: slotInfo.end,
      doctorId: selectedDoctor ? selectedDoctor.id : null,
    });
    setSelectedEvent(null);
    setShowModal(true);
  };

  const handleSelectEvent = (event) => {
    setNewEvent({
      title: event.title,
      description: event.description,
      start: event.start,
      end: event.end,
      doctorId: event.doctorId,
    });
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (newEvent.title.trim() === "") {
      alert("Title is required!");
      return;
    }

    if (selectedEvent) {
      setEvents(events.map((event) =>
        event.id === selectedEvent.id ? { ...newEvent, id: event.id } : event
      ));
    } else {
      setEvents([...events, { ...newEvent, id: uuidv4() }]);
    
    }

    setShowModal(false);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((event) => event.id !== selectedEvent.id));
    setShowModal(false);
  };


  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="doctor" className="block text-lg font-medium">
          Select Doctor
        </label>
        <select
          id="doctor"
          value={selectedDoctor ? selectedDoctor.id : ""}
          onChange={(e) => {
            const doctor = doctors.find((doc) => doc.id === +e.target.value);
            setSelectedDoctor(doctor);
          }}
          className="peer py-2 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0 dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          >
          <option value="">All Doctors</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>

      <div className="h-[80vh]">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
          views={['week', 'day', 'agenda']}
          defaultView="week"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative z-50">
            <h3 className="text-lg font-semibold mb-4">{selectedEvent ? "Edit Event" : "Add New Event"}</h3>
            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="Patient Name"
              value={newEvent.patientName}
              onChange={(e) => setNewEvent({ ...newEvent, patientName: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            ></textarea>

            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSaveEvent}
                className="bg-[#4F9451] text-white px-4 py-2 rounded-md hover:bg-[#4F9451]"
              >
                {selectedEvent ? "Save Changes" : "Save"}
              </button>
              {selectedEvent && (
                <button
                  onClick={handleDeleteEvent}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              )}
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarAdmin;
