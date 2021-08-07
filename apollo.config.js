// This config is need for Apollo VSCode extension to work
// https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
module.exports = {
    service: {
      name: 'graphql-BoS',
      localSchemaFile: './schema.graphql',
    },
    includes: ['src/**/*.graphql'],
};
