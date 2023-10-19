import serverAuth from '@/app/libs/serverAuth'
import prismadb from '@/app/libs/prismadb'

interface Iparams{
    id:string |undefined
}


export default async function getMoviesbyId(params: Iparams) {

    const {id }= params

    try {
        if (!serverAuth) {
            throw new Error('Not signed in');

        }

        const getMoviesbyId = await prismadb.movie.findUnique({
            where:{
                id:id
            }       
        
        })

        if(!getMoviesbyId){
            return null
        }

        return getMoviesbyId;


    } catch (error) {

        console.log(error)
        return error

    }



}