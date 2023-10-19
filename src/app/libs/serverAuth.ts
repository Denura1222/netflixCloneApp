import { getServerSession } from "next-auth";
import prismadb from './prismadb'
import { authOptions } from "../../../pages/api/auth/[...nextauth]";


const serverAuth = async ()=>{
    const session = await getServerSession(authOptions)

    console.log("serversession:",session?.user?.email)

    if(!session?.user?.email){
        throw new Error('Not Signed in')
    }

    const currentUser = await prismadb.user.findUnique({
        where:{
            email:session.user.email
        }
    })

    if(!currentUser){
        throw new Error ('not signed in')
    }

    return {currentUser}

}

export default serverAuth


