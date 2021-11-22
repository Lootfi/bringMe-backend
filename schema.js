import {
    loadFilesSync
} from "@graphql-tools/load-files";
import {
    mergeResolvers,
    mergeTypeDefs
} from "@graphql-tools/merge";
import {
    makeExecutableSchema
} from '@graphql-tools/schema'

const loadedTypeDefs = loadFilesSync(`${__dirname}/apollo/**/*.typeDefs.js`)
const loadedResolvers = loadFilesSync(`${__dirname}/apollo/**/*.{mutations,queries,entity}.js`)

const typeDefs = mergeTypeDefs(loadedTypeDefs);
const resolvers = mergeResolvers(loadedResolvers);

const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default executableSchema;