import { getPokemons } from '@/app/api/list';
import { DetailsProps } from '@/app/types/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { typeColors } from '@/app/types/types';

const PokemonDetails:React.FC<DetailsProps> = ({pokemon,typeName}) => {
  const [flavorText, setFlavorText] = useState<string>('');
  const [abilities,setAbilities] = useState<string[]>([]);
  

  useEffect(() => {
    const fetchFlavorText = async () => {
      try {
        
        const urlFlavor =`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`;
        const response = await getPokemons.getData(urlFlavor);
                   
        const data = response.data;

        const filteredEntries = data.flavor_text_entries.filter(
          (entry: any) => entry.language.name === 'es'
        );

        if (filteredEntries.length > 0) {
          setFlavorText(filteredEntries[0].flavor_text);
        } else {
          setFlavorText('No se encontró descripción en español.');
        }

        const abilitiesPromises = pokemon.abilities.map((ability: { ability: { url: string; }; }) =>
          fetchAbilities(ability.ability.url)
        );

        const abilitiesArray = await Promise.all(abilitiesPromises);
        setAbilities(abilitiesArray);

      } catch (error) {
        console.error('Error al obtener el texto:', error);
      }
    };

    fetchFlavorText();
  }, [pokemon]);

  const fetchAbilities = async (typeUrl:string) => {
    try{
      const response = await getPokemons.getData(typeUrl);
      const data = await response.data;
      const abilitesNames=data.names.find(
        (name:any) => name.language.name === 'es'
      );
      if (abilitesNames){
        return abilitesNames.name;
      }
      else{
        return abilitesNames.name="Nombre no encontrado"
      }
    }catch(error){
      console.error('Error al obtener las habilidades:', error);
    }
  }

  
  return (
    <div className=''>
      <div className={'sprite-position'}>
        
      <Image  
        height={200}
        width={200}
        src={pokemon.sprites.other['official-artwork'].front_default}
        onError={e=>{e.currentTarget.src='../assets/placeholder.png'}}
        alt={`${pokemon.name} sprite`}
        priority
        className='mx-auto z-1 relative pb-5 mt-10'
      />
      </div>

      <div>
      <h2 className='mt-5 text-gray-500 text-sm'>#{pokemon.id}</h2>
      <h2 className='mt-5 text-colornombres text-3xl font-bold'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      </div>

      <h4 className='mt-3 mb-3 font-bold'>Tipos:</h4>          
      <div className='flex justify-evenly'>
        {typeName?.map((typeName, index) => (
          <div key={index} className={`flex bottom-20 justify-center font-sans text-white rounded-md w-16 mb-0 ${typeColors[typeName]}`}>
            <span key={index}>
            {typeName}
          </span>
            </div>
        ))}
      </div>

      <h4 className='mt-5 mb-2.5 font-bold'  >Descripción:</h4>
      <p className='descriptionText'>{flavorText}</p>
    
      <h4 className='mt-5 mb-2.5 font-bold '>Habilidades:</h4>
      <div className='flex justify-evenly'>
      { abilities.map((ability,index)=>{
            return(
              <p className='border bg-gray-500 bg-opacity-10 border-solid border-colornombres rounded-lg w-2/5' key={index}>{ability}</p>
            )
          })
        }
      </div>
      
      <div className='flex justify-evenly mt-5 mb-2.5'>
      
      <span >
      <b>Peso:</b> <br/>
      <p className='mt-0 text-colornombres text-base font-bold content-center items-center bg-gray-500 bg-opacity-15 rounded-xl w-20'>{pokemon?.weight/10}Kg </p> 
     </span>
         
      <span>
        <b>Altura:</b> <br/>
        <p className='mt-0 text-colornombres text-base font-bold content-center items-center bg-gray-500 bg-opacity-15 rounded-xl w-20 '>
          {pokemon?.height/10}m
        </p>
      </span>
      <span>
         <b>Exp Base:</b><br/>
         <p className='mt-0 text-colornombres text-base font-bold content-center items-center bg-gray-500 bg-opacity-15 rounded-xl w-20 '>{pokemon.base_experience}</p>
         </span>
      </div>

      <h4 className='mt-10' ><b>Estadísticas:</b></h4>

      <div className='flex justify-evenly p-6 text-colornombres relative mt-0 font-bold '>
        <div className='bg-gray-500 rounded-2xl bg-opacity-10'>
        <p><span className='bg-colorhp rounded-full text-white font-bold w-9 h-9 flex justify-center items-center'> 
        HP</span>{pokemon.stats[0].base_stat} </p>
        </div>     
            <div className='bg-gray-500 rounded-2xl bg-opacity-10'>
            <p><span className="bg-coloratk rounded-full text-white font-bold w-9 h-9 flex justify-center items-center" > ATK</span>{pokemon.stats[1].base_stat} </p>
            </div>
            <div className='bg-gray-500 rounded-2xl bg-opacity-10'>
            <p><span className='bg-colordef rounded-full text-white font-bold w-9 h-9 flex justify-center items-center'> DEF</span>{pokemon.stats[2].base_stat} </p>
            </div>
            <div className='bg-gray-500 rounded-2xl bg-opacity-10'>
            <p><span className='bg-colorspA rounded-full text-white font-bold w-9 h-9 flex justify-center items-center' > SpA</span>{pokemon.stats[3].base_stat} </p>
            </div>
            <div className='bg-gray-500 rounded-2xl bg-opacity-10'>
            <p><span className='bg-colorspD rounded-full text-white font-bold w-9 h-9 flex justify-center items-center' > SpD</span>{pokemon.stats[4].base_stat}</p>
            </div>
            <div className='bg-gray-500 rounded-2xl bg-opacity-10'>
            <p><span className='bg-colorspd rounded-full text-white font-bold w-9 h-9 flex justify-center items-center'> SPD</span>{pokemon.stats[5].base_stat}</p>
            </div>
            <div className='bg-gray-500 rounded-2xl bg-opacity-10'>
            <p><span className='bg-colortot rounded-full text-white font-bold w-9 h-9 flex justify-center items-center'> TOT</span>{pokemon.stats[0].base_stat+pokemon.stats[1].base_stat+pokemon.stats[2].base_stat+pokemon.stats[3].base_stat+pokemon.stats[4].base_stat+pokemon.stats[5].base_stat}</p>
          </div>         
          
          
      </div>
      
    </div>
  )
}

export default PokemonDetails
