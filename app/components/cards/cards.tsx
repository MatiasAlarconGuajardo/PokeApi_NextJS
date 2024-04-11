import { getPokemons } from '@/app/api/list';
import { CardProps, Pokemon } from '@/app/types/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import PokemonModal from '../pokemonModal/pokemonModal';
import { typeColors } from '@/app/types/types';


const PokemonCard:React.FC<CardProps>= ({url}) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [typeNames, setTypeNames] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemons.getData(url);
        setPokemon(response.data);
        const typePromises = response.data.types.map((type: { type: { url: string; }; }) =>
          getTypeNames(type.type.url)
        );
        
        const typeNamesArray = await Promise.all(typePromises);
        
        setTypeNames(typeNamesArray);

      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    fetchData();
  }, [url]);

  const getTypeNames = async(typeUrl:string) => {
    try{
        const response = await getPokemons.getData(typeUrl);
        const data = await response.data;
        const esNames=data.names.find(
         (name:any) => name.language.name === 'es'
        );
        if(esNames){
          return esNames.name;
        }else{
          return esNames.name="Nombre no encontrado";
        }
    }
    catch(error){
      console.error('Error al obtener los tipos:', error);
    }
  }
  
  if(pokemon && pokemon.id>151){
    return null;
}else{
  return (
    <div className=' bg-white border border-solid border-bordes shadow-lg shadow-black rounded-lg  items-center m-4 top-8 pt-8 pb-1 w-4/5 h-3/5' onClick={() => setOpenModal(!openModal)}>
      <Image
        className='mx-auto z-1 bottom-20 relative w-24 h-24'
        width={100}
        height={100}
        src={pokemon?.sprites.versions['generation-v']['black-white'].animated.front_default || '/public/assets/placeholder.png'} 
        onError={e=>{e.currentTarget.src='../../assets/placeholder.png'}}
        alt={`${pokemon?.name} sprite`}
        priority
        />
        
        <h2 className='relative  mt-2.5 bottom-20 justify-center text-gray-500 text-sm font-sans'>Nº {pokemon?.id}</h2>
        <h2 className='relative bottom-20 justify-center  font-sans mt-0 text-colornombres text-lg font-bold'>{pokemon && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        
        <div className="flex relative bottom-20 justify-center m-2.5">
          {typeNames?.map((typeName, index) => (
        <div key={index}
             className={`m-2.5 justify-center font-sans text-white rounded-md w-16 mb-0 ${typeColors[typeName]}`}>
              <span>{typeName}</span>
         </div>
        ))}
        </div>
      {pokemon && (
        <PokemonModal isOpen={openModal} onClose={() => setOpenModal(false)} pokemon={pokemon} typeName={typeNames} />
      )}
    </div>
      
   
  );
}
}

export default PokemonCard
