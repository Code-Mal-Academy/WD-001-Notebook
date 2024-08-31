import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {

    const users = await prisma.user.findMany({
        include: {
            follower: {
                include: {
                    follower: true
                }
            }
        }
    })



    console.log(users[0].follower)

}

main()