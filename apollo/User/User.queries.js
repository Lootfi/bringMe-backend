import prisma from '../../prisma'

export default {
    Query: {
        users: () => prisma.user.findMany(),
        user: (_, {
                username
            }) =>
            prisma.user.findUnique({
                where: {
                    username
                },
            })
    }
}