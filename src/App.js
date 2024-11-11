import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CallParticipants from './components/CallParticipants';
import Conversation from './components/Conversation';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1">
          <div className="w-1/3 bg-gray-100 p-4">
            <CallParticipants />
          </div>
          <div className="flex-1 bg-gray-200 p-4">
            <Conversation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
