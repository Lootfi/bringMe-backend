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
    updateUser: async (_, {
        id,
        username,
        email,
        password
    }) => {
        data = {
            username,
            email
        }
        if (password) {
            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);
            data = {
                ...data,
                password
            }
        }
        return prisma.user.update({
            where: {
                id
            },
            data
        })
    },
    deleteUser: (_, {
        id
    }) => prisma.user.delete({
        where: {
            id
        }
    }),
    createDocument: (_, {
            name,
            userId
        }) =>
        prisma.document.create({
            data: {
                name,
                userId,
            },
        }),
    updateDocument: (_, {
        id,
        name
    }) => prisma.document.update({
        where: {
            id
        },
        data: {
            name
        }
    }),
    deleteDocument: (_, {
        id
    }) => prisma.document.delete({
        where: {
            id
        }
    })

}