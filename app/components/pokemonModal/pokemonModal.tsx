import React from 'react';  
import { ModalProps } from '@/app/types/types';
import PokemonDetails from '../pokemonDetails/pokemonDetails';
import Sidebar from '../sideBar/sideBar';



const PokemonModal: React.FC<ModalProps> = ({ isOpen, onClose, pokemon, typeName }) => {
  return (
    <Sidebar isOpen={isOpen} onClose={onClose}>
      <PokemonDetails pokemon={pokemon} typeName={typeName} />
    </Sidebar>
  );
};

export default PokemonModal;