import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Roses Gatsby New`,
    siteUrl: `https://roses-gatsby-new.site`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "roses-gatsby-new.site",
        region: "ru-central1",
        protocol: "https",
        hostname: "storage.yandexcloud.net",
        customAwsEndpointHostname: 'storage.yandexcloud.net'
      },
    }
  ],
}

export default config
