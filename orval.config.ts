import { defineConfig } from 'orval';

export default defineConfig({
  cipherapi: {
    output: {
      mode: 'single',
      target: 'src/handlers.ts',
      schemas: 'src/http-schemas',
      client: 'mcp',
      // baseUrl: 'http://localhost:3000/api/v1',
      baseUrl: 'https://api.cipher42.ai/api/v1',
      // headers: true,
      // mock: true,
      prettier: true,
      override: {
        mutator: {
          path: 'src/api/mutator/custom-instance.ts',
          name: 'customFetchInstance'
        },
      },
    },
    input: {
      target: './swagger.json',
      filters: {
        mode: "include",
        tags: ['datasources', "tables", "users"]
      }
    }
  },
});