import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

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

const getRandomColor = () => {
  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-indigo-400",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const initialEvents = [
  {
    title: "Meeting",
    start: new Date(2024, 10, 15, 10, 0),
    end: new Date(2024, 10, 15, 12, 0),
    allDay: false,
    color: getRandomColor(),
  },
  {
    title: "Conference",
    start: new Date(2024, 10, 20, 9, 0),
    end: new Date(2024, 10, 20, 11, 0),
    allDay: false,
    color: getRandomColor(),
  },
];

const CalendarPage = () => {
  const [events, setEvents] = useState(initialEvents);
  const [showModal, setShowModal] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    patientName: "",
    start: null,
    end: null,
    color: "",
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [view, setView] = useState("month"); // Track the current view

  // Define working hours
  const startWorkHour = 9; // Start hour (9 AM)
  const endWorkHour = 17; // End hour (5 PM)

  const isDisabled = (date) => {
    const hour = date.getHours();
    return hour < startWorkHour || hour >= endWorkHour; // Disable slots outside working hours
  };

  const handleSelectSlot = (slotInfo) => {
    if (view === "month") {
      setSelectedDate(slotInfo.start);
      setShowTimePicker(true);
    } else {
      if (!isDisabled(slotInfo.start)) {
        setNewEvent({
          title: "",
          description: "",
          patientName: "",
          start: slotInfo.start,
          end: slotInfo.end,
          color: getRandomColor(),
        });
        setShowModal(true);
      }
    }
  };

  const handleTimeSelect = (hour) => {
    const start = new Date(selectedDate);
    const end = new Date(selectedDate);
    start.setHours(hour, 0, 0); // Set the selected hour
    end.setHours(hour + 1, 0, 0); // Set the end time one hour later

    setNewEvent({
      title: "",
      description: "",
      patientName: "",
      start: start,
      end: end,
      color: getRandomColor(),
    });
    setShowTimePicker(false);
    setShowModal(true);
  };

  const handleSelectEvent = (event) => {
    setNewEvent({
      title: event.title,
      description: event.description,
      patientName: event.patientName,
      start: event.start,
      end: event.end,
      color: event.color,
    });
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (newEvent.title.trim() === "") {
      alert("Title is required!");
      return;
    }

    setEvents([...events, newEvent]);
    setShowModal(false);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((event) => event !== selectedEvent));
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="h-[80vh]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: event.color,
            },
          })}
          onView={setView} // Update view state when view changes
          slotPropGetter={(date) => {
            return {
              className: isDisabled(date) ? "bg-gray-200" : "",
            };
          }}
        />
      </div>

      {/* Time Picker Modal */}
      {showTimePicker && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative z-50">
            <h3 className="text-lg font-semibold mb-4">Select a Time</h3>
            <div className="flex flex-col space-y-2">
              {[...Array(endWorkHour - startWorkHour)].map((_, index) => {
                const hour = startWorkHour + index;
                return (
                  <button
                    key={hour}
                    onClick={() => handleTimeSelect(hour)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    {hour}:00 - {hour + 1}:00
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setShowTimePicker(false)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Event Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative z-50">
            <h3 className="text-lg font-semibold mb-4">{newEvent.title ? "Edit Event" : "Add New Event"}</h3>
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
                Save
              </button>
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

export default CalendarPage;
