import React from 'react';

const Conversation = () => {
  return (
    <div className="flex-1 bg-white p-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Conversation</h2>
      
      <div className="flex mb-4">
        <div className="bg-gray-200 p-2 rounded-lg max-w-xs">
          <p>Salut, comment ça va ?</p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <div className="bg-blue-200 p-2 rounded-lg max-w-xs">
          <p>Ça va bien, merci ! Et toi ?</p>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="bg-gray-200 p-2 rounded-lg max-w-xs">
          <p>Message audio :</p>
          <div className="bg-gray-300 p-2 rounded-lg mt-2">
            <p>[Audio]</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <div className="bg-blue-200 p-2 rounded-lg max-w-xs">
          <p>Réponse audio :</p>
          <div className="bg-blue-300 p-2 rounded-lg mt-2">
            <p>[Audio]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
