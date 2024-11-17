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
    patientName: "",
    start: null,
    end: null,
    color: "",
  });
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Define working hours
  const startWorkHour = 9; // Adjust this to your actual start hour (24-hour format)
  const endWorkHour = 17; // Adjust this to your actual end hour (24-hour format)

  const isDisabled = (date) => {
    const hour = date.getHours();
    return hour < startWorkHour || hour > endWorkHour;
  };

  const handleSelectSlot = (slotInfo) => {
    // Check if slot falls within working hours before allowing selection
    if (!isDisabled(slotInfo.start)) {
      setNewEvent({
        title: "",
        description: "",
        patientName: "",
        start: slotInfo.start,
        end: slotInfo.end,
        color: getRandomColor(),
      });
      setSelectedEvent(null);
      setShowModal(true);
    } else {
      alert("This time slot is outside your working hours");
    }
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
          // views={['week', 'day', 'agenda']}
          // defaultView="week"
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
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <input
              type="text"
              placeholder="Patiat Name"
              value={newEvent.patientName}
              onChange={(e) =>
                setNewEvent({ ...newEvent, patientName: e.target.value })
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

// import React, { useState } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import format from 'date-fns/format';
// import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// import getDay from 'date-fns/getDay';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-datepicker/dist/react-datepicker.css';

// const locales = {
//   'en-US': require('date-fns/locale/en-US'),
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const initialEvents = [
//   {
//     title: 'Meeting',
//     start: new Date(2024, 10, 15, 10, 0),
//     end: new Date(2024, 10, 15, 12, 0),
//   },
//   {
//     title: 'Conference',
//     start: new Date(2024, 10, 20, 9, 0),
//     end: new Date(2024, 10, 20, 11, 0),
//   },
// ];

// const CalendarPage = () => {
//   const [events, setEvents] = useState(initialEvents);
//   const [showModal, setShowModal] = useState(false);
//   const [newEvent, setNewEvent] = useState({
//     title: '',
//     description: '',
//     start: null,
//     end: null,
//   });
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   // فتح نافذة الإضافة عند الضغط على مكان فارغ
//   const handleSelectSlot = (slotInfo) => {
//     setNewEvent({
//       title: '',
//       description: '',
//       start: slotInfo.start,
//       end: slotInfo.end,
//     });
//     setSelectedEvent(null);
//     setShowModal(true);
//   };

//   // فتح نافذة العرض عند الضغط على الحدث
//   const handleSelectEvent = (event) => {
//     setNewEvent({
//       title: event.title,
//       description: event.description,
//       start: event.start,
//       end: event.end,
//     });
//     setSelectedEvent(event);
//     setShowModal(true);
//   };

//   // حفظ أو تعديل الحدث
//   const handleSaveEvent = () => {
//     if (newEvent.title.trim() === '') {
//       alert('Title is required!');
//       return;
//     }

//     if (selectedEvent) {
//       // تعديل الحدث
//       setEvents(events.map((event) =>
//         event === selectedEvent ? { ...newEvent } : event
//       ));
//     } else {
//       // إضافة حدث جديد
//       setEvents([...events, newEvent]);
//     }

//     setShowModal(false);
//   };

//   // حذف الحدث
//   const handleDeleteEvent = () => {
//     setEvents(events.filter((event) => event !== selectedEvent));
//     setShowModal(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="h-[80vh]">
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: '100%' }}
//           selectable // تأكد من تفعيل selectable
//           onSelectSlot={handleSelectSlot} // تفعيل الحدث عند التحديد
//           onSelectEvent={handleSelectEvent} // تفعيل الحدث عند اختيار الحدث
//           views={['month', 'week', 'day', 'agenda']} // تخصيص الأنماط
//           defaultView="month" // تعيين العرض الافتراضي
//         />
//       </div>

//       {/* نافذة الإدخال */}
//       {showModal && (
//         <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg shadow-lg w-1/3 p-6 relative z-50">
//             <h3 className="text-lg font-semibold mb-4">{selectedEvent ? 'Edit Event' : 'Add New Event'}</h3>
//             <input
//               type="text"
//               placeholder="Title"
//               value={newEvent.title}
//               onChange={(e) =>
//                 setNewEvent({ ...newEvent, title: e.target.value })
//               }
//               className="w-full p-2 border border-gray-300 rounded-md mb-4"
//             />
//             <textarea
//               placeholder="Description"
//               value={newEvent.description}
//               onChange={(e) =>
//                 setNewEvent({ ...newEvent, description: e.target.value })
//               }
//               className="w-full p-2 border border-gray-300 rounded-md mb-4"
//             ></textarea>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={handleSaveEvent}
//                 className="bg-[#4F9451] text-white px-4 py-2 rounded-md hover:bg-[#4F9451]"
//               >
//                 {selectedEvent ? 'Save Changes' : 'Save'}
//               </button>
//               {selectedEvent && (
//                 <button
//                   onClick={handleDeleteEvent}
//                   className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               )}
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarPage;
