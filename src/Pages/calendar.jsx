import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import Input from '../Components/InputEvent'; // تأكد من المسار الصحيح

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    const loadedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(loadedEvents);
  }, []);

  const saveEventsToLocalStorage = useCallback((updatedEvents) => {
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  }, []);

  // دالة لإضافة حدث جديد
  const handleCreateEvent = (newEvent) => {
    const validStart = moment(newEvent.start).isValid() ? newEvent.start : moment().toDate();
    const validEnd = moment(newEvent.end).isValid() ? newEvent.end : moment().add(1, 'hour').toDate();
  
    const updatedEvent = { ...newEvent, start: validStart, end: validEnd };
    const updatedEvents = [...events, updatedEvent];
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
    closeModal();
  };

  // دالة لتعديل حدث موجود
  const handleUpdateEvent = (updatedEvent) => {
    const validStart = moment(updatedEvent.start).isValid() ? updatedEvent.start : moment().toDate();
    const validEnd = moment(updatedEvent.end).isValid() ? updatedEvent.end : moment().add(1, 'hour').toDate();
  
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? { ...updatedEvent, start: validStart, end: validEnd } : event
    );
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
    closeModal();
  };

  // دالة لحذف حدث
  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
    closeModal();
  };

  // فتح نافذة الـ Modal لإضافة أو تعديل حدث
  const openModal = (slotInfo) => {
    // إذا كان الحدث جديدًا نضبط قيمه الافتراضية
    if (!slotInfo.hasOwnProperty('id')) {
      slotInfo.id = moment().format('x');
      slotInfo.title = '';
      slotInfo.location = '';
      slotInfo.start = slotInfo.start || new Date();
      slotInfo.end = slotInfo.end || new Date();
    }

    setCurrentEvent(slotInfo);
    setIsModalOpen(true);
  };

  // إغلاق نافذة الـ Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // عند تحديد حدث، نقوم بفتح نافذة الـ Modal لعرض أو تعديل الحدث
  const handleSelectEvent = (slotInfo) => {
    setCurrentEvent(slotInfo);
    setIsModalOpen(true);
  };

  // عند تحديد خانة جديدة (ليس حدثًا موجودًا)، نقوم بفتح نافذة الـ Modal لإضافة حدث جديد
  const handleSelectSlot = (slotInfo) => {
    const eventSlotInfo = {
      start: slotInfo.start,
      end: slotInfo.end,
      id: moment().format('x'),
      title: '',
      location: '',
    };
    openModal(eventSlotInfo);
  };

  // تخصيص ستايل الحدث بناءً على تاريخ الحدث
  const eventStyleGetter = (event, start, end, isSelected) => {
    const currentTime = moment().format('YYYY MM DD');
    const eventTime = moment(event.start).format('YYYY MM DD');
    const background = currentTime > eventTime ? '#DE6987' : '#8CBD4C';
    return {
      style: {
        backgroundColor: background,
      },
    };
  };

  // تحديث قيم الحدث في الـ Modal
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
        style={{ height: '600px' }}
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
        <h2 className="text-xl font-semibold mb-4">{currentEvent?.id ? 'Edit Event' : 'Create Event'}</h2>
        <div>
          <Input
            onChange={(value) => handleInputChange('title', value)}
            placeholder="Event Title"
            defaultValue={currentEvent?.title}
          />
          <Input
            onChange={(value) => handleInputChange('location', value)}
            placeholder="Event Location"
            defaultValue={currentEvent?.location}
          />
        </div>
        <div className="mt-6 flex justify-between">
          <button className="bg-red-500 text-white py-2 px-4 rounded-md" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md"
            onClick={() => {
              if (currentEvent?.id) {
                handleUpdateEvent(currentEvent); // تعديل الحدث
              } else {
                handleCreateEvent(currentEvent); // إضافة حدث جديد
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
