import { GraphQLClient } from 'graphql-request'

import { getSdkWithHooks } from '@lib/generated/sdk'

const nextGraphQlClient = new GraphQLClient(process.env.HYPGRAPH_ENDPOINT)

// Use this server side, it directly calls the Umbraco GraphQL endpoint
export const nextClient = getSdkWithHooks(nextGraphQlClient)
