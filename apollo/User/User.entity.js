import prisma from '../../prisma'

export default {
    User: {
        id: (parent) => parent.id,
        username: (parent) => parent.username,
        email: (parent) => parent.email,
        password: (parent) => parent.password,
        created_at: (parent) => parent.created_at,
        updated_at: (parent) => parent.updated_at,
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