import React from 'react';

const Sessions = () => {
  const events = [
    {
      title: 'Event 1',
      description: 'This is the first event.',
      date: '2023-11-14',
    },
    {
      title: 'Event 2',
      description: 'This is the second event.',
      date: '2023-11-15',
    },
    {
      title: 'Event 3',
      description: 'This is the third event.',
      date: '2023-11-16',
    },
  ];

  return (
    <ul className="timeline">
      {events.map((event, index) => (
        <li key={index} className="timeline-item">
          <div className="timeline-marker bg-blue-500 rounded-full"></div>
          <div className="timeline-content p-4 border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p className="text-gray-700">{event.description}</p>
            <p className="text-gray-500 text-sm">{event.date}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Sessions;