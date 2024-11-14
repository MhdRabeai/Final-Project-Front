import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-modal";
import Input from "../Components/InputEvent"; // تأكد من المسار الصحيح

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const loadedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(loadedEvents);
  }, []);

  const saveEventsToLocalStorage = (updatedEvents) => {
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  const handleCreateEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
    closeModal();
  };

  const handleUpdateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
    closeModal(); // إغلاق النافذة المنبثقة
  };

  // دالة لحذف حدث
  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  };

  // فتح النافذة المنبثقة لإضافة أو تعديل حدث
  const openModal = (slotInfo) => {
    let newEvent = false;
    let popupTitle = "Create Event";

    if (!slotInfo.hasOwnProperty("id")) {
      slotInfo.id = moment().format("x");
      slotInfo.title = "";
      slotInfo.location = "";
      newEvent = true;
    }

    setCurrentEvent(slotInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectEvent = (slotInfo) => {
    setCurrentEvent(slotInfo);
    setIsModalOpen(true);
  };

  const handleSelectSlot = (slotInfo) => {
    const eventSlotInfo = {
      start: slotInfo.start,
      end: slotInfo.end,
      id: moment().format("x"),
      title: "",
      location: "",
    };
    openModal(eventSlotInfo);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    const currentTime = moment().format("YYYY MM DD");
    const eventTime = moment(event.start).format("YYYY MM DD");
    const background = currentTime > eventTime ? "#DE6987" : "#8CBD4C";
    return {
      style: {
        backgroundColor: background,
      },
    };
  };

  const handleInputChange = (field, value) => {
    setCurrentEvent((prevEvent) => ({
      ...prevEvent,
      [field]: value,
    }));
  };

  return (
    <div className="calendar-container">
      <Calendar
        popup
        selectable
        localizer={localizer}
        defaultView="month"
        events={events}
        style={{ height: "600px" }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventStyleGetter}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Event Modal"
        ariaHideApp={false}
        className="bg-white p-6 rounded-lg w-96 mx-auto"
        overlayClassName="bg-black bg-opacity-50 fixed inset-0 z-50"
      >
        <h2 className="text-xl font-semibold mb-4">
          {currentEvent?.id ? "Edit Event" : "Create Event"}
        </h2>
        <div>
          <Input
            onChange={(value) => handleInputChange("title", value)}
            placeholder="Event Title"
            defaultValue={currentEvent?.title}
          />
          <Input
            onChange={(value) => handleInputChange("location", value)}
            placeholder="Event Location"
            defaultValue={currentEvent?.location}
          />
        </div>
        <div className="mt-6 flex justify-between">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-md"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md"
            onClick={() => {
              if (currentEvent?.id) {
                handleUpdateEvent(currentEvent);
              } else {
                handleCreateEvent(currentEvent);
              }
            }}
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CalendarPage;
