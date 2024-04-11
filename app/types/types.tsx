type pokeType = {
    type: {
      name: string;
      url: string;
    };
  };
  
type abilities = {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
};
type stats = {
    base_stat: number;
    stat: {
        name: string;
        url: string;
    };
};


export interface Pokemon{
    id:number;
    name:string;
    weight:number;
    height:number;
    stats:stats[] ;
    base_experience:number;
    abilities: abilities[];
    types: pokeType[];
    sprites: {
        other:{
            "official-artwork": {
                front_default: string;
            };
        }
        versions: {
                "generation-v": {
                "black-white": {
                    animated: {
                        front_default: string;
                       
                    };
                };
            };
        };
    };
}

export interface PokemonList{
    name:string;
    url:string;
}



export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    pokemon: Pokemon;
    typeName:string[];
  }


export interface DetailsProps {
    pokemon: Pokemon;
    typeName:string[];
  }

  
export interface CardProps {
    url: string;
  }

export const typeColors: { [key: string]: string } = {
    Normal: "bg-Normal",
    Fuego: "bg-Fuego",
    Agua: "bg-Agua",
    Eléctrico: 'bg-Eléctrico',
    Planta: 'bg-Planta',
    Hielo: 'bg-Hielo',
    Lucha: 'bg-Lucha',
    Veneno: 'bg-Veneno',
    Tierra: 'bg-Tierra',
    Volador: 'bg-Volador',
    Psíquico: 'bg-Psíquico',
    Bicho: 'bg-Bicho',
    Roca: 'bg-Roca',
    Fantasma: 'bg-Fantasma',
    Dragón: 'bg-Dragón',
    Acero: 'bg-Acero',
    Hada: 'bg-Hada'
  };