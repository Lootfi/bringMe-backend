import prisma from '../prisma'

export default {
    documents: () => prisma.document.findMany(),
    users: () => prisma.user.findMany(),
    user: (_, {
            id
        }) =>
        prisma.user.findFirst({
            where: {
                id: Number(id)
            },
        }),
    document: (_, args) =>
        prisma.document.findFirst({
            where: {
                id: Number(args.id)
            },
        }),
}