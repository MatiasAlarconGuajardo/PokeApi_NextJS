'use client'
import React, { useState } from 'react'
import { PokemonList } from '@/app/types/types'
import { getPokemons } from '@/app/api/list';
import PokemonCard from '../cards/cards';
import Loading from '../Loading/loading';

const CharacterList = () => {
    const [characters, setCharacters] = useState<PokemonList[]>([]);
    const [offset,setOffset]=useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
 
    React.useEffect(()=>{
      setLoading(true);
        getPokemons.getList(offset)
        .then((response)=>{
          setTimeout(() => {
            setLoading(false);
          }, 1000);
            setCharacters(response.data.results)
        }).catch((error)=>{
            console.log(error)
        })
    },[offset])

  if (loading) {
    return <Loading/>
  }
  else{
    return (
      <div>
        <div className=" grid grid-cols-1 grid-rows-3 gap-4 justify-items-center items-center 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1" >
          {
              characters.map((character,index)=>{
                  return(
                    
                      <PokemonCard key={index} url={character.url}/>
                  )
              })
          }       
        </div>
        <button className='bg-colorbtn border-none rounded-lg shadow-md shadow-black font-medium text-white text-base	m-2.5 p-2.5 cursor-pointer hover:bg-colorbtnhover hover:text-white active:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-white '
          onClick={()=>setOffset(offset-9)} disabled={offset===0}>Anterior</button>
        <button className='bg-colorbtn border-none rounded-lg shadow-md shadow-black font-medium text-white text-base	m-2.5 p-2.5 cursor-pointer hover:bg-colorbtnhover hover:text-white active:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-white '
          onClick={()=>setOffset(offset+9)} disabled={offset>=142} >Siguiente</button>
      </div>
    )
  }
  
}

export default CharacterList


  
