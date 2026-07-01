<div align="center">
  <table>
    <tr>
      <td>
        <a href="https://ondewo.com/en/products/natural-language-understanding/">
            <img width="400px" src="https://raw.githubusercontent.com/ondewo/ondewo-logos/master/ondewo_we_automate_your_phone_calls.png"/>
        </a>
      </td>
    </tr>
    <tr>
       <td align="center">
          <a href="https://www.linkedin.com/company/ondewo "><img width="40px" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"></a>
          <a href="https://www.facebook.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733547.png"></a>
          <a href="https://twitter.com/ondewo"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"> </a>
          <a href="https://www.instagram.com/ondewo.ai/"><img width="40px" src="https://cdn-icons-png.flaticon.com/512/174/174855.png"></a>
          <a href="https://badge.fury.io/js/%40ondewo%2Fvtsi-client-nodejs"><img src="https://badge.fury.io/js/%40ondewo%2Fvtsi-client-nodejs.svg" alt="npm version" height="32"></a>
       </td>
    </tr>
  </table>
  <h1 align="center">
    ONDEWO VTSI Client NodeJS
  </h1>
</div>

## Overview

`@ondewo/vtsi-client-nodejs` is a compiled version of the [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api) using the [ONDEWO PROTO COMPILER](https://github.com/ondewo/ondewo-proto-compiler). Here you can find the VTSI API [documentation](https://ondewo.github.io).

ONDEWO APIs use [Protocol Buffers](https://github.com/google/protobuf) version 3 (proto3) as their Interface Definition Language (IDL) to define the API interface and the structure of the payload messages. The same interface definition is used for gRPC versions of the API in all languages.

## Setup

Using NPM:

```shell
npm i --save @ondewo/vtsi-client-nodejs
```

Using GitHub:

```shell
git clone https://github.com/ondewo/ondewo-vtsi-client-nodejs.git ## Clone repository
cd ondewo-vtsi-client-nodejs                                      ## Change into repo-directoy
make setup_developer_environment_locally                         ## Install dependencies
```

## Authentication (Keycloak offline token)

For headless access, this package ships a reusable Keycloak auth helper. `login(...)` performs a
Resource-Owner-Password-Credentials (ROPC) grant with `scope=offline_access` against a **public**
Keycloak client (no `client_secret`), then auto-refreshes the short-lived access token from the
returned offline refresh token. Attach the resulting access token as the standard
`Authorization: Bearer <jwt>` gRPC metadata. The refresh loop stops once `tokenExpirationInS` has
elapsed (when given).

```typescript
import { Metadata } from '@grpc/grpc-js';
import { login } from '@ondewo/vtsi-client-nodejs';

const tokenProvider = await login({
	keycloakUrl: 'https://my-host/auth',
	realm: 'ondewo-ccai-platform',
	clientId: 'ondewo-nlu-cai-sdk-public', // public client, no secret
	username: 'tech-user@example.com',
	password: '<password>',
	tokenExpirationInS: 3600 // optional: stop auto-refresh after this many seconds
});

const metadata = new Metadata();
metadata.set('Authorization', `Bearer ${await tokenProvider.getAccessToken()}`);
// ... use `metadata` with any generated VTSI/NLU gRPC client call
```

## Examples

Runnable, self-contained examples live in [`examples/`](examples). They show how to construct a
generated gRPC client, attach the Keycloak bearer token as `Authorization` metadata, call an RPC, and
handle the response:

- [`examples/listCallers.ts`](examples/listCallers.ts) — construct a `CallsClient` and list a VTSI
  project's callers (the reusable, unit-tested RPC core).
- [`examples/loginAndListCallers.ts`](examples/loginAndListCallers.ts) — the end-to-end flow wiring
  `login(...)` to the ListCallers RPC.

```typescript
import { runListCallersExample } from './examples/loginAndListCallers';

const callerNames = await runListCallersExample({
	keycloakUrl: 'https://my-host/auth',
	realm: 'ondewo-ccai-platform',
	clientId: 'ondewo-nlu-cai-sdk-public', // public client, no secret
	username: 'tech-user@example.com',
	password: '<password>',
	grpcTarget: 'localhost:40051',
	vtsiProjectName: 'projects/my-vtsi-project'
});
console.log(callerNames);
```

The examples are covered by hermetic mock tests (`npm run test:examples`) that exercise the
request-building, bearer-metadata, and response-handling logic with the gRPC client mocked — no live
server required.

## Package structure

```
npm
├── api
│   ├── google
│   │   ├── api
│   │   │   ├── annotations_grpc_pb.js
│   │   │   ├── annotations_pb.d.ts
│   │   │   └── annotations_pb.js
│   │   ├── protobuf
│   │   │   ├── any_grpc_pb.js
│   │   │   ├── any_pb.d.ts
│   │   │   ├── any_pb.js
│   │   │   ├── empty_grpc_pb.js
│   │   │   ├── empty_pb.d.ts
│   │   │   ├── empty_pb.js
│   │   │   ├── field_mask_grpc_pb.js
│   │   │   ├── field_mask_pb.d.ts
│   │   │   ├── field_mask_pb.js
│   │   │   ├── struct_grpc_pb.js
│   │   │   ├── struct_pb.d.ts
│   │   │   ├── struct_pb.js
│   │   │   ├── timestamp_grpc_pb.js
│   │   │   ├── timestamp_pb.d.ts
│   │   │   └── timestamp_pb.js
│   │   ├── rpc
│   │   │   ├── status_grpc_pb.js
│   │   │   ├── status_pb.d.ts
│   │   │   └── status_pb.js
│   │   └── type
│   │       ├── latlng_grpc_pb.js
│   │       ├── latlng_pb.d.ts
│   │       └── latlng_pb.js
│   └── ondewo
│       ├── nlu
│       │   ├── agent_grpc_pb.d.ts
│       │   ├── agent_grpc_pb.js
│       │   ├── agent_pb.d.ts
│       │   ├── agent_pb.js
│       │   ├── aiservices_grpc_pb.d.ts
│       │   ├── aiservices_grpc_pb.js
│       │   ├── aiservices_pb.d.ts
│       │   ├── aiservices_pb.js
│       │   ├── common_grpc_pb.js
│       │   ├── common_pb.d.ts
│       │   ├── common_pb.js
│       │   ├── context_grpc_pb.d.ts
│       │   ├── context_grpc_pb.js
│       │   ├── context_pb.d.ts
│       │   ├── context_pb.js
│       │   ├── entity_type_grpc_pb.d.ts
│       │   ├── entity_type_grpc_pb.js
│       │   ├── entity_type_pb.d.ts
│       │   ├── entity_type_pb.js
│       │   ├── intent_grpc_pb.d.ts
│       │   ├── intent_grpc_pb.js
│       │   ├── intent_pb.d.ts
│       │   ├── intent_pb.js
│       │   ├── operation_metadata_grpc_pb.js
│       │   ├── operation_metadata_pb.d.ts
│       │   ├── operation_metadata_pb.js
│       │   ├── operations_grpc_pb.d.ts
│       │   ├── operations_grpc_pb.js
│       │   ├── operations_pb.d.ts
│       │   ├── operations_pb.js
│       │   ├── project_role_grpc_pb.d.ts
│       │   ├── project_role_grpc_pb.js
│       │   ├── project_role_pb.d.ts
│       │   ├── project_role_pb.js
│       │   ├── project_statistics_grpc_pb.d.ts
│       │   ├── project_statistics_grpc_pb.js
│       │   ├── project_statistics_pb.d.ts
│       │   ├── project_statistics_pb.js
│       │   ├── server_statistics_grpc_pb.d.ts
│       │   ├── server_statistics_grpc_pb.js
│       │   ├── server_statistics_pb.d.ts
│       │   ├── server_statistics_pb.js
│       │   ├── session_grpc_pb.d.ts
│       │   ├── session_grpc_pb.js
│       │   ├── session_pb.d.ts
│       │   ├── session_pb.js
│       │   ├── user_grpc_pb.d.ts
│       │   ├── user_grpc_pb.js
│       │   ├── user_pb.d.ts
│       │   ├── user_pb.js
│       │   ├── utility_grpc_pb.d.ts
│       │   ├── utility_grpc_pb.js
│       │   ├── utility_pb.d.ts
│       │   ├── utility_pb.js
│       │   ├── webhook_grpc_pb.d.ts
│       │   ├── webhook_grpc_pb.js
│       │   ├── webhook_pb.d.ts
│       │   └── webhook_pb.js
│       ├── qa
│       │   ├── qa_grpc_pb.d.ts
│       │   ├── qa_grpc_pb.js
│       │   ├── qa_pb.d.ts
│       │   └── qa_pb.js
│       ├── s2t
│       │   ├── speech-to-text_grpc_pb.d.ts
│       │   ├── speech-to-text_grpc_pb.js
│       │   ├── speech-to-text_pb.d.ts
│       │   └── speech-to-text_pb.js
│       ├── sip
│       │   ├── sip_grpc_pb.d.ts
│       │   ├── sip_grpc_pb.js
│       │   ├── sip_pb.d.ts
│       │   └── sip_pb.js
│       ├── t2s
│       │   ├── text-to-speech_grpc_pb.d.ts
│       │   ├── text-to-speech_grpc_pb.js
│       │   ├── text-to-speech_pb.d.ts
│       │   └── text-to-speech_pb.js
│       └── vtsi
│           ├── voip_grpc_pb.d.ts
│           ├── voip_grpc_pb.js
│           ├── voip_pb.d.ts
│           └── voip_pb.js
├── LICENSE
├── package.json
├── public-api.d.ts
├── public-api.js
└── README.md
```

[comment]: <> (START OF GITHUB README)

## Build

The `make build` command is dependent on 2 `repositories` and their speciefied `version`:

- [ondewo-vtsi-api](https://github.com/ondewo/ondewo-vtsi-api) -- `VTSI_API_GIT_BRANCH` in `Makefile`
- [ondewo-proto-compiler](https://github.com/ondewo/ondewo-proto-compiler) -- `ONDEWO_PROTO_COMPILER_GIT_BRANCH` in `Makefile`

Other than creating the proto-code, `build` also installs the `dev-dependencies` and changes the owner of the proto-code-files from `root` to the `current user`.

In the case that some `google .protos` were not automatically generated, exists the option of creating a `proto-deps.txt` inside of the `src` folder. There, import statements can be written the same way as they are in `.proto` files.

```
import "google/api/http.proto"; //Example
  <---- New Line
```

> :warning: The last line in the `proto-deps.txt` needs to be an empty new line, otherwise the compiler will fail

## GitHub Repository - Release Automation

The repository is published to GitHub and NPM by the Automated Release Process of ONDEWO.

TODO after PR merge:

- checkout master
  ```shell
  git checkout master
  ```
- pull newest state
  ```shell
  git pull
  ```
- Adjust `ONDEWO_VTSI_VERSION` in the `Makefile` <br><br>
- Add new Release Notes to `src/RELEASE.md` in following format:

  ```
  ## Release ONDEWO VTSI Nodejs Client X.X.X    <----- Beginning of Notes

  ...<NOTES>...

  *****************                             <----- End of Notes
  ```

- release
  ```shell
  make ondewo_release
  ```
  <br>
  The release process can be divided into 6 Steps:

1. `build` specified version of the `ondewo-vtsi-api`
2. `commit and push` all changes in code resulting from the `build`
3. Publish the created `npm` folder to `npmjs.com`
4. Create and push the `release branch` e.g. `release/1.3.20`
5. Create and push the `release tag` e.g. `1.3.20`
6. Create a new `Release` on GitHub

> :warning: The Release Automation checks if the build has created all the proto-code files, but it does not check the code-integrity. Please build and test the generated code prior to starting the release process.

[comment]: <> (END OF GITHUB README)
