import { createServer } from '@graphql-yoga/common';
import type { RequestEvent } from '@sveltejs/kit/types/private';

const yogaApp = createServer<RequestEvent>({
	graphiql: {
		endpoint: '/api/graphql'
	}
});
export { yogaApp as get, yogaApp as post };
