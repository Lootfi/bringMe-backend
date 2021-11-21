import prisma from '../prisma'
import bcrypt from 'bcrypt'
export default {
    createUser: async (_, {
        username,
        email,
        password
    }) => {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        return prisma.user.create({
            data: {
                username,
                email,
                password
            }
        })
    },
    deleteUser: (_, {
        id
    }) => prisma.user.delete({
        where: id
    }),
    createDocument: (_, {
            title,
            userId
        }) =>
        prisma.document.create({
            data: {
                title,
                userId,
            },
        }),
    deleteDocument: (_, {
        id
    }) => prisma.document.delete({
        where: id
    })

}