import prisma from '../../prisma'

export default {
    Query: {
        users: () => prisma.user.findMany(),
        user: (_, {
                id
            }) =>
            prisma.user.findFirst({
                where: {
                    id: Number(id)
                },
            })
    }
}