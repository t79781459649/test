import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Roses-Crimea>>`,
    siteUrl: `roses-crimea`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "<<YOUR_DOMAIN_NAME>>",
        region: "ru-central1",
        protocol: "https",
        hostname: "storage.yandexcloud.net",
        customAwsEndpointHostname: 'storage.yandexcloud.net'
      },
    }
  ],
}

export default config
