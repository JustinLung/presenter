import * as dotenv from 'dotenv'
dotenv.config()
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.HYPGRAPH_ENDPOINT,
	documents: './lib/graphql/**/*.graphql',
	generates: {
		'./lib/generated/graphql.schema.json': {
			plugins: ['introspection'],
		},
		'./lib/generated/sdk.ts': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-graphql-request',
				'plugin-typescript-swr',
			],
			config: {
				fetcher: {
					endpoint: process.env.HYPGRAPH_ENDPOINT,
				},
				rawRequest: false,
				inlineFragmentTypes: 'combine',
				skipTypename: false,
				exportFragmentSpreadSubTypes: true,
				dedupeFragments: true,
				preResolveTypes: true,
				maybeValue: 'T',
			},
		},
	},
}

export default config
