# Autotask PSA API in GraphQL

An [Apollo GraphQL](https://www.apollographql.com/) server, built with [Cloudflare Workers](https://workers.cloudflare.com). [Try a demo by looking at a deployed GraphQL playground](https://autotask.dipak.io/playground).

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/dipakparmar/autotask-graphql)

## Usage

You can run it locally by [installing Wrangler](https://workers.cloudflare.com/docs/quickstart/), the Workers command-line tool:

```sh
wrangler dev
```

### Global Headers

| Header Name                   | Value | Type   | Description                                                                                                                                                                                                                  |
| ----------------------------- | ----- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-Autotask-Integration-Code` |       | String | The integration code you received from the Autotask API.                                                                                                                                                                     |
| `X-Autotask-Secret`           |       | String | The secret you received from the Autotask API.                                                                                                                                                                               |
| `X-Autotask-User`             |       | String | The user you received from the Autotask API.                                                                                                                                                                                 |
| `X-Autotask-Zone`             | `5`   | Int    | The zone your Autotask is Running. More Info: [AutoTask API Zones](https://www.autotask.net/help/developerhelp/Content/APIs/General/API_Zones.htm#:~:text=Find%20your%20zone%27s%20API%20URL%C2%A0for%20the%20REST%C2%A0API) |

## License

This project is licensed with the [AGPL-3.0 License](https://github.com/dipakparmar/autotask-graphql/blob/main/LICENSE).
