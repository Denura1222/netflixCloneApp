import {prismaClient} from '@prismaClient'

declare global{
    namespace globalThis {
        var prismadb :prismaClient
    }
}