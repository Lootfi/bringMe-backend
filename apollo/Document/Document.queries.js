import prisma from '../../prisma'

export default {
    Query: {
        documents: () => prisma.document.findMany(),
        document: (_, args) =>
            prisma.document.findFirst({
                where: {
                    id: Number(args.id)
                },
            })
    }
}