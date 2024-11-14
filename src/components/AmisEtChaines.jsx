import React, { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/solid';
import './AmisChaines.css';
import Recherche from './Recherche';
import './AmisChaines.css';

const amisInitial = [
  { nom: 'Sanaa Hamliri', messages: 10 },
  { nom: 'Oualid Agourd', messages: 5 },
  { nom: 'El ghanname Muhammed', messages: 3 },
];

const chainesInitial = [
  { nom: 'Js_Pirates', messages: 2 },
  { nom: 'JavaScript', messages: 1 },
  { nom: 'JavaHaters', messages: 0 }
];

const ProfilItem = ({ profil }) => (
  <div className="container flex items-center justify-between p-2 rounded-lg mb-2">
    <div className="flex items-center">
      <UserCircleIcon className="h-8 w-8 text-white" />
      <div className="ml-2">
        <p className="text-sm text-white font-semibold">{profil.nom}</p>
        <p className="text-xs text-gray-400">{profil.messages} messages</p>
      </div>
    </div>
    {profil.messages > 0 && (
      <div className=" noti text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
        {profil.messages}
      </div>
    )}
  </div>
);

const AmisEtChaines = () => {
  const [query, setQuery] = useState('');
  
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery.toLowerCase());
  };

  const amisFiltered = amisInitial.filter(ami => ami.nom.toLowerCase().includes(query));
  const chainesFiltered = chainesInitial.filter(chaine => chaine.nom.toLowerCase().includes(query));

  return (
    <div className="p-4 bg-gray-100 h-full overflow-y-auto">
      <Recherche onSearch={handleSearch} />
      
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Amis</h2>
        {amisFiltered.map((ami, index) => (
          <ProfilItem key={index} profil={ami} />
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Chaînes</h2>
        {chainesFiltered.map((chaine, index) => (
          <ProfilItem key={index} profil={chaine} />
        ))}
      </div>
    </div>
  );
};

export default AmisEtChaines;
