import React from 'react';
import { Timeline } from 'antd';

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

  const items = events.map(event => ({
    label: event.date,
    children: (
      <div>
        <h3 style={{ fontWeight: 'bold', color: '#4CAF50' }}>{event.title}</h3>
        <p style={{ color: '#555' }}>{event.description}</p>
      </div>
    ),
  }));

  return (
    <Timeline mode="left" items={items} />
  );
};

export default Sessions;