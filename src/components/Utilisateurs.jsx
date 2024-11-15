import React, { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/solid';
import Recherche from './Recherche';

const utilisateursInitial = [
  { nom: 'Utilisateur 1' },
  { nom: 'Utilisateur 2' },
  { nom: 'Utilisateur 3' },
  { nom: 'Utilisateur 4' }
];

const chainesInitial = [
  { nom: 'Chaîne 1' },
  { nom: 'Chaîne 2' },
  { nom: 'Chaîne 3' }
];

const UtilisateurItem = ({ utilisateur }) => (
  <div className="container flex items-center justify-between p-2 rounded-lg mb-2">
    <div className="flex items-center">
      <UserCircleIcon className="h-8 w-8 text-white" />
      <div className="ml-2">
        <p className="text-sm text-white font-semibold">{utilisateur.nom}</p>
      </div>
    </div>
  </div>
);

const ProfilItem = ({ profil }) => (
  <div className="container flex items-center justify-between p-2 rounded-lg mb-2">
    <div className="flex items-center">
      <UserCircleIcon className="h-8 w-8 text-white" />
      <div className="ml-2">
        <p className="text-sm text-white font-semibold">{profil.nom}</p>
      </div>
    </div>
  </div>
);

const Utilisateurs = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery.toLowerCase());
  };

  const utilisateursFiltered = utilisateursInitial.filter(utilisateur =>
    utilisateur.nom.toLowerCase().includes(query)
  );

  const chainesFiltered = chainesInitial.filter(chaine =>
    chaine.nom.toLowerCase().includes(query)
  );

  return (
    <div className="p-4 bg-gray-100 h-full overflow-y-auto">
      <Recherche onSearch={handleSearch} />
      <h2 className="text-xl font-bold mb-2">Tous les utilisateurs</h2>
      {utilisateursFiltered.map((utilisateur, index) => (
        <UtilisateurItem key={index} utilisateur={utilisateur} />
      ))}

      <div>
        <h2 className="text-xl font-bold mb-2">Toutes les Chaînes</h2>
        {chainesFiltered.map((chaine, index) => (
          <ProfilItem key={index} profil={chaine} />
        ))}
      </div>
    </div>
  );
};

export default Utilisateurs;
