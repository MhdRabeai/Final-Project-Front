// import React, { useState, useEffect, useCallback } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import Modal from 'react-modal';
// import Input from '../Components/InputEvent';

// const localizer = momentLocalizer(moment);

// const CalendarPage = () => {
//   const [events, setEvents] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentEvent, setCurrentEvent] = useState(null);

//   useEffect(() => {
//     const loadedEvents = JSON.parse(localStorage.getItem('events')) || [];
//     setEvents(loadedEvents);
//   }, []);

//   const saveEventsToLocalStorage = useCallback((updatedEvents) => {
//     localStorage.setItem('events', JSON.stringify(updatedEvents));
//   }, []);

//   const handleCreateEvent = (newEvent) => {
//     const validStart = moment(newEvent.start).isValid() ? newEvent.start : moment().toDate();
//     const validEnd = moment(newEvent.end).isValid() ? newEvent.end : moment().add(1, 'hour').toDate();
//   console.log(newEvent)
//     const updatedEvent = { ...newEvent, start: validStart, end: validEnd };
//     const updatedEvents = [...events, updatedEvent];
//     setEvents(updatedEvents);
//     saveEventsToLocalStorage(updatedEvents);
//     closeModal();
//   };

//   const handleUpdateEvent = (updatedEvent) => {
//     const validStart = moment(updatedEvent.start).isValid() ? updatedEvent.start : moment().toDate();
//     const validEnd = moment(updatedEvent.end).isValid() ? updatedEvent.end : moment().add(1, 'hour').toDate();
  
//     const updatedEvents = events.map((event) =>
//       event.id === updatedEvent.id ? { ...updatedEvent, start: validStart, end: validEnd } : event
//     );
//     setEvents(updatedEvents);
//     saveEventsToLocalStorage(updatedEvents);
//     closeModal();
//   };

//   // const handleDeleteEvent = (eventId) => {
//   //   const updatedEvents = events.filter((event) => event.id !== eventId);
//   //   setEvents(updatedEvents);
//   //   saveEventsToLocalStorage(updatedEvents);
//   //   closeModal();
//   // };

//   const openModal = (slotInfo) => {
//     if (!slotInfo.hasOwnProperty('id')) {
//       slotInfo.id = moment().format('x');
//       slotInfo.title = '';
//       slotInfo.location = '';
//       slotInfo.start = slotInfo.start || new Date();
//       slotInfo.end = slotInfo.end || new Date();
//     }

//     setCurrentEvent(slotInfo);
//     console.log(slotInfo)
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSelectEvent = (slotInfo) => {
//     setCurrentEvent(slotInfo);
//     setIsModalOpen(true);
//   };

//   const handleSelectSlot = (slotInfo) => {
//     const eventSlotInfo = {
//       start: slotInfo.start,
//       end: slotInfo.end,
//       id: moment().format('x'),
//       title: '',
//       location: '',
//     };
//     openModal(eventSlotInfo);
//   };

//   const eventStyleGetter = (event, start, end, isSelected) => {
//     const currentTime = moment().format('YYYY MM DD');
//     const eventTime = moment(event.start).format('YYYY MM DD');
//     const background = currentTime > eventTime ? '#DE6987' : '#8CBD4C';
//     return {
//       style: {
//         backgroundColor: background,
//       },
//     };
//   };

//   const handleInputChange = (field, value) => {
//     setCurrentEvent((prevEvent) => ({
//       ...prevEvent,
//       [field]: value,
//     }));
//   };

//   return (
//     <div className="calendar-container">
//       <Calendar
//         popup
//         selectable
//         localizer={localizer}
//         defaultView="month"
//         events={events}
//         style={{ height: '600px' }}
//         onSelectEvent={handleSelectEvent}
//         onSelectSlot={handleSelectSlot}
//         eventPropGetter={eventStyleGetter}
//       />

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Event Modal"
//         ariaHideApp={false}
//         className="bg-white p-6 rounded-lg w-96 mx-auto"
//         overlayClassName="bg-black bg-opacity-50 fixed inset-0 z-50"
//       >
//         <h2 className="text-xl font-semibold mb-4">{currentEvent?.id ? 'Edit Event' : 'Create Event'}</h2>
//         <div>
//           <Input
//             onChange={(value) => handleInputChange('title', value)}
//             placeholder="Event Title"
//             defaultValue={currentEvent?.title}
//           />
//           <Input
//             onChange={(value) => handleInputChange('location', value)}
//             placeholder="Event Location"
//             defaultValue={currentEvent?.location}
//           />
//         </div>
//         <div className="mt-6 flex justify-between">
//           <button className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={closeModal}>
//             Cancel
//           </button>
//           <button
//             className="bg-green-500 text-white py-2 px-4 rounded-md"
//             onClick={() => {
//               if (currentEvent?.id) {
//                 handleUpdateEvent(currentEvent);
//               } else {
//                 handleCreateEvent(currentEvent);
//               }
//             }}
//           >
//             Save
//           </button>
       
//         </div>
//       </Modal>
//     </div>
//   );
// };
// export default CalendarPage;

import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

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
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    start: null,
    end: null,
    color: "",
  });
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectSlot = (slotInfo) => {
    setNewEvent({
      title: "",
      description: "",
      start: slotInfo.start,
      end: slotInfo.end,
      color: getRandomColor(),
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
      color: event.color,
    });
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (newEvent.title.trim() === " ") {
      alert("Title is required!");
      return;
    }

    if (selectedEvent) {
      setEvents(events.map((event) =>
        event === selectedEvent ? { ...newEvent } : event
      ));
    } else {
      setEvents([...events, newEvent]);
    }

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
            style: { backgroundColor: event.color },
          })}
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
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
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

export default CalendarPage;
