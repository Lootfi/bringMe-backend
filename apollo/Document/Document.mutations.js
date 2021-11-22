import prisma from '../../prisma'

export default {
    Mutation: {
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
}