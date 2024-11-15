import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AmisEtChaines from './components/AmisEtChaines';
import Conversation from './components/Conversation';
import VideoCall from './components/VideoCall';
import Background from './components/background';
import Utilisateurs from './components/Utilisateurs';

function App() {
  const [currentComponent, setCurrentComponent] = useState('amis');

  const handleIconClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <Router>
      <div className="bg-[#121112] w-full h-screen relative">
        <Background />
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar onIconClick={handleIconClick} />
            <div className="flex flex-1">
              <div className="w-1/4 p-4">
                {currentComponent === 'amis' ? <AmisEtChaines /> : <Utilisateurs />}
              </div>
              <div className="flex-1 p-4">
                <Conversation />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/call" element={<VideoCall />} />
      </Routes>
    </Router>
  );
}

export default App;
