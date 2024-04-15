import { instance } from "./base.api";



export const getPokemons={
    getList:(offset:number)=>{
        return instance.get(`list/${offset}`)
    },
    getData:(url:string)=>{
        return instance.get(url)
    },
}
