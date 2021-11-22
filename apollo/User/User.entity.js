import prisma from '../../prisma'

export default {
    User: {
        id: (parent) => parent.id,
        username: (parent) => parent.username,
        email: (parent) => parent.email,
        password: (parent) => parent.password,
        documents: (parent) =>
            prisma.user
            .findUnique({
                where: {
                    id: parent.id
                },
            })
            .documents(),
    }
}