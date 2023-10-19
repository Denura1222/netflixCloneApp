import CredentialsProvider from 'next-auth/providers/credentials'
import { type } from "os";
import prismadb from '@/app/libs/prismadb';
import { compare } from 'bcrypt';
import NextAuth, { AuthOptions } from "next-auth"

import { PrismaAdapter } from "@next-auth/prisma-adapter"

import prisma from "@/app/libs/prismadb"


export const authOptions: AuthOptions={

    adapter: PrismaAdapter(prisma),

    providers:[


        CredentialsProvider({
            name:'credentials',


            credentials:{


                email:{
                    label:'email',
                    type:'text',                    
                },
                password:{
                    label:'password',
                    type:'password',
                }
            },

             async authorize(credentials){

                console.log("details:",credentials?.email,credentials?.password)

            if(!credentials?.email || !credentials?.password){

                throw new Error('Email and password required')

            }

            const User =await prismadb.user.findUnique({

                where:{ 
                   email:credentials.email
                }
            })

            if(!User || !User.hashedPassword){

                throw new Error('invalid credentails')
            }

           const  isCorrectPass = await compare(credentials.password,User.hashedPassword);

           if (!isCorrectPass) {
            throw new Error('Incorrect password');
          }
  
          return User;
        }

        })
    ],
    pages:{
        signIn:'/auth',

    },
    debug:process.env.NODE_ENV =='development',
    session:{
            strategy:'jwt'
    },

    jwt:{
        secret:process.env.NEXTAUTH_JWT_SECRET
    },
    secret:process.env.NEXTAUTH_SECRET
    


}
export default NextAuth(authOptions);