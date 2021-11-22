import prisma from '../../prisma'

export default {
    Document: {
        id: (parent) => parent.id,
        name: (parent) => parent.name,
        createdAt: (parent) => parent.createdAt,
        user: (parent) =>
            prisma.document
            .findUnique({
                where: {
                    id: parent.id
                },
            })
            .User(),
    }
}