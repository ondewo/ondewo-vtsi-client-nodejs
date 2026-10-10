# Release History

*****************

## Release ONDEWO VTSI Nodejs Client 9.0.0

### Breaking Changes

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Tracking API Version [9.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/9.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) ), a major API release: binary wire-compatible in both directions, source-breaking.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `AsteriskConfigsFiles.sip_conf_file_string` is renamed to `pjsip_conf_file_string` (field number and type unchanged). **Migration:** replace `getSipConfFileString()` / `setSipConfFileString()` with `getPjsipConfFileString()` / `setPjsipConfFileString()`, and the `sipConfFileString` key of `toObject()` / JSON mappings with `pjsipConfFileString`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Eleven scalars in `ondewo/vtsi/calls.proto` gained explicit presence (`optional`): `InterruptionHandlingConfig.transcribe_on_disabled_interruptions`, `TurnDetectionConfig.turn_detection_system_prompt` / `turn_detection_user_prompt`, `AudioObjectStorageConfig.activate_audio_object_storage`, `AudioObjectStorageServicesActivationConfig.activate_s2t` / `activate_t2s`, `MessageBrokerConfig.activate_message_broker` and `MessageBrokerServicesActivationConfig.activate_s2t` / `activate_nlu` / `activate_t2s` / `activate_sip`. Getters and setters keep their names and gain `has…()` / `clear…()`; in the typings the getters now return `boolean | undefined` / `string | undefined`. **Migration:** handle `undefined` where a getter result is used as a plain `boolean` / `string`; a value set explicitly to its default (`false`, `""`) is now sent on the wire and read by the server as set; call `clear…()` (or do not call the setter) to leave a field unset. An 8.7.x client that sets a default still sends nothing, so regenerate before relying on an explicit default reaching the server.

### New Features

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) New generated clients, exported from the package root: `CampaignsClient` (service `Campaigns`, `ondewo/vtsi/campaigns.proto`: campaign CRUD, start / stop / hard stop / resume, statistics, campaign calls and the `StreamCampaignStatus` stream), `EventsClient` (service `Events`, `ondewo/vtsi/events.proto`: `VtsiEvent` subscriptions, webhooks incl. `TestWebhook`, and the `SubscribeVtsiEvents` stream) and `SoftphonesClient` (service `Softphones`, `ondewo/vtsi/softphones.proto`: softphone accounts, credential rotation, certificates and provisioning). They take the same `createGrpcClient` / `createChannelCredentials` TLS and mutual TLS setup as the existing clients.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `CallsClient` gains `AddCallersToCampaign`, `AddScheduledCallersToCampaign`, the status streams `StreamCallerStatus` / `StreamListenerStatus` / `StreamScheduledCallerStatus`, and call control: `InviteToCall`, `RemoveCallParticipant`, `SetCallMediaControl`, `StreamCallAudio` and `ListenCallAudio`. Typed, truthful transfers (`TransferCallRequest.target` / `mode` / `headers` / `ring_timeout_s`, `TransferCallResponse.outcome`), `idempotency_key` on the five batch-creating `Calls` requests, answering machine detection (`VoiceInteractionConfig.answering_machine_detection_config`) and the redial marker on `Call`, plus `Call.media_control` / `participants` / `last_transfer` / `sip_call_id`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `AsteriskConfigsVariables` gains the SIP trunk transport (`sip_trunk_transport`, `sip_trunk_source_cidr`), carrier certificate verification (`sip_trunk_ca_certificates_pem`, `sip_trunk_verify_server`) and `softphone_permit_cidrs`; `VtsiProject` gains `transfer_phone_number_allowlist`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) The vendored `ondewo/sip` stubs follow ondewo-sip-api 5.5.0 (byte-identical to `@ondewo/sip-client-nodejs` 5.5.0): answering machine detection, call-id scoping, `SipSetCallMediaControl`, `SipStreamCallAudio` and truthful transfers.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Regenerated with ondewo-proto-compiler 5.15.5. `tests/entryPoint.spec.ts` pins the three new clients and every RPC of their protos, the new `Calls` RPCs and the `pjsip_conf_file_string` rename; the README package structure lists the generated `vtsi` files.

Server-side requirements of the new RPCs (roles, auth mode, rolling-update behaviour) are described in the [API release notes](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/9.0.0).

*****************

## Release ONDEWO VTSI Nodejs Client 8.7.1

### Improvements

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) New TLS / mutual TLS helper `auth/grpcChannel`, exported from the package root: `GrpcClientConfig`, `createChannelCredentials` and `createGrpcClient` build `@grpc/grpc-js` credentials and channel options from PEM **content** (`grpcCert`, `grpcClientCert`, `grpcClientKey`), never a file path. An empty `grpcCert` trusts the system roots. Same contract as the Python SDKs (ondewo-client-utils 4.1.x).
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Refused before gRPC sees them: half a client identity (certificate without key or key without certificate), a value that is not PEM content (e.g. a path), and `useSecureChannel: false` together with a client identity. Empty strings on both mean plain TLS. Error messages name the field and `host:port`, never a PEM, a key or the config object.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) A plaintext channel logs a warning naming `host:port`; bare IPv6 hosts are bracketed (`[::1]:50051`); CRLF PEMs work; the client key renders as `***REDACTED***` in `toString`, `util.inspect` and `JSON.stringify`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Channel defaults: max message length `2**31 - 1` in both directions, `grpc.max_reconnect_backoff_ms` 5000, `grpc.keepalive_timeout_ms` 20000, `grpc.keepalive_permit_without_calls` 0. `grpc.keepalive_time_ms` is deliberately left unset: grpc-js has no `grpc.http2.max_pings_without_data`, so keepalive pings on a silent stream make a grpc-core server answer GOAWAY `too_many_pings`.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) README section "TLS, mutual TLS and certificates": modes, loading PEMs from files, a test PKI with openssl, security notes and troubleshooting.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Tests: real handshakes against an in-process grpc-js server with an openssl test PKI generated at test time (TLS, mutual TLS, missing or foreign client identity rejected, wrong CA, CRLF PEMs, IPv6 where available), plus the refusal and redaction cases. CI runs on Node 20, 22 and 24 with `npm ci`, and fails when the committed `auth/` build output drifts from its source.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `auth/` (the TLS helper and the Keycloak offline-token helper `auth/offlineTokenProvider`) now ships in the npm package and is re-exported from the package root; 8.7.0's package contained no `auth/` at all.

### Bug Fixes

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Regenerated with ondewo-proto-compiler 5.15.5: `public-api.js` (the package `main`) is now a CommonJS barrel, so `require('@ondewo/vtsi-client-nodejs')` works. With earlier compilers it contained `export * from` lines and failed with `ERR_MODULE_NOT_FOUND`. CI now `require()`s the package root. The missing `google/api/experimental/authorization_config` stubs are generated.
* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `tests/releaseNotes.spec.ts` pins the release-notes slice: every heading's spelling, every section's `*****` separator, `src/RELEASE.md` == `RELEASE.md` and non-empty notes for the current version.

API unchanged: tracking API Version [8.7.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.7.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Nodejs Client 8.7.0

### Improvements

* Built against [ondewo-vtsi-api 8.7.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.7.0),
  which re-vendors [ondewo-nlu-api 7.1.0](https://github.com/ondewo/ondewo-nlu-api/releases/tag/7.1.0)
  (was 7.0.0) and [ondewo-s2t-api 7.5.0](https://github.com/ondewo/ondewo-s2t-api/releases/tag/7.5.0)
  (was 7.4.0). `ondewo/vtsi/**` is unchanged in that API release, so the VTSI service surface is
  identical and this client stays wire-compatible with 8.6.0.
* What the re-exported surface gains: `speech-to-text.proto` adds the `VadMethod` and `TsdMethod`
  enums and the `Silero` and `WespeakerTsd` messages (voice-activity and turn-shift detection
  configuration); `rag.proto` adds `RagCrawlerIncrementalConfig`.
* `RagCrawlerFilters` re-declares four fields as `[deprecated = true]` -- `allow_internal_links`,
  `allow_social_media_links`, `allowed_paths` and `disallowed_paths`. Every field number, name and
  type is preserved and no number is reused, so nothing on the wire changes; the two path lists are
  superseded by `allowed_regex` / `disallowed_regex`.

*****************

## Release ONDEWO VTSI Nodejs Client 8.6.0

### Improvements

* Tracking API Version [8.6.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.6.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Nodejs Client 8.5.0

### Improvements

* Tracking API Version [8.5.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.5.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Nodejs Client 8.4.0

### Improvements

* Tracking API Version [8.4.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.4.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Nodejs Client 8.3.0

### Improvements

* Tracking API Version [8.3.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.3.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )
* Added the generated client for `ondewo/vtsi/logs.proto` (container log capture and streaming)
* Added the optional field `asterisk_version` to `AsteriskConfigs`. It carries the docker image tag of the
  ONDEWO Asterisk image a VTSI project should start (e.g. `alpine-3.18-18.20.2`), so the Asterisk version is a
  per-project setting instead of a server-wide one. Leaving it unset keeps the server default
  (`ONDEWO_VTSI_ASTERISK_IMAGE_TAG`); an empty string is rejected
* The field has **explicit presence**: use `hasAsteriskVersion()` / `clearAsteriskVersion()`, because
  `getAsteriskVersion()` returns `''` both for "unset" and for "explicitly empty" and cannot tell them apart

*****************

## Release ONDEWO VTSI Nodejs Client 8.2.0

### Improvements

* Tracking API Version [8.2.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.2.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Nodejs Client 8.1.0

### Improvements

* Tracking API Version [8.1.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.1.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Nodejs Client 8.0.0

### Improvements

* Tracking API Version [8.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/8.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Nodejs Client 7.0.0

### Improvements

* Tracking API Version [7.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/7.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Nodejs Client 5.0.0

### Improvements

* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-vtsi-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-vtsi-api/) )

*****************

## Release ONDEWO VTSI Nodejs Client 4.0.0

### Improvements

* Track version 4.0.0 of [ONDEWO VTSI API](https://github.com/ondewo/ondewo-vtsi-api/releases/4.0.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************
