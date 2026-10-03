# Release History

*****************

## Release ONDEWO VTSI Nodejs Client 9.0.0

### Breaking changes

* Built against ondewo-vtsi-api 9.0.0 (commit `8ae9487` until that tag exists).
  `AsteriskConfigsFiles.sip_conf_file_string` is renamed to `pjsip_conf_file_string`, so
  `getSipConfFileString()` / `setSipConfFileString()` become `getPjsipConfFileString()` /
  `setPjsipConfFileString()`. The field number and type are unchanged, so the wire format is too.
* Eleven scalars in `ondewo/vtsi/calls.proto` became `optional`: ask `hasX()`, never the getter, to
  tell "unset" from the default value (see the API release notes for the list).

### New features

* `CampaignsService` / `CampaignsClient` (`api/ondewo/vtsi/campaigns_*`): campaign CRUD, start, stop,
  hard stop, resume, statistics, campaign calls with their attempts, and the server stream
  `streamCampaignStatus`. A campaign carries `maxParallelCalls`, `maxAttempts` and `retryDelay`.
* `CallsService` gains the unary RPCs `addCallersToCampaign` and `addScheduledCallersToCampaign`,
  whose requests carry a required `campaignAssignment` and whose responses carry the `campaign` and
  its `campaignCallNamesList`; `ScheduledCaller` gains `campaignName`. A server that predates them
  answers `UNIMPLEMENTED` and starts nothing, so a rolling update cannot dial a whole campaign at
  once. The campaign fields that 9.0.0 development builds put on `StartCallersRequest` /
  `StartScheduledCallersRequest` and their responses are gone (reserved upstream): move such calls
  to the two new RPCs.
* `StartCallersRequest`, `StartListenersRequest`, `StartScheduledCallersRequest`,
  `AddCallersToCampaignRequest` and `AddScheduledCallersToCampaignRequest` gain an optional
  `idempotencyKey` (at most 255 printable ASCII characters, no whitespace; empty means no dedupe).
  A retry with the same key returns the response of the first successful attempt, on whichever
  replica serves it, scoped to the project and the RPC and retained for 24 h by default. The same key
  with a different request is `INVALID_ARGUMENT`; a retry while the first attempt is still running is
  `ABORTED` (retry later); a failed first attempt stores nothing; a replayed response carries no
  `commonServicesConfig`. The single-resource RPCs take no key: send a batch of one.
* `AsteriskConfigsVariables` gains `softphonePermitCidrsList`, the source allow-list of a project's
  softphone accounts on both TLS ports, narrowed under the server's ceiling.
* `CallsService` gains the server streams `streamCallerStatus`, `streamListenerStatus` and
  `streamScheduledCallerStatus`.
* `EventsService` / `EventsClient` (`api/ondewo/vtsi/events_*`): the `VtsiEvent` enum, event
  subscription and webhook CRUD per VTSI project (custom header values are write-only),
  `testWebhook`, and the resumable server stream `subscribeVtsiEvents`.
* `SoftphonesService` / `SoftphonesClient`, answering machine detection on calls and the carrier TLS
  verification fields of the API 9.0.0 line are exported too.
* `tests/campaignsAndEvents.spec.ts` (run by `npm run test:protos`) pins the RPC descriptors, the
  `VtsiEvent` enum against the pinned `events.proto`, the campaign assignment oneof on the two
  enrollment RPCs (and its absence from the `Start*` requests), the idempotency key of the five
  batch-creating requests at its field number, the softphone allow-list, the webhook header map, and
  both new streams end to end against an in-process server.
* `updateWebhook` is documented: moving a webhook to another origin while custom headers are stored
  requires re-sending `customHeaders` with real values; the server rejects the masked value there.
* `BaseServiceConfig.setGrpcCert()` is now required for the S2T, NLU and T2S configs of a call unless the
  VTSI server runs with `ONDEWO_VTSI_ALLOW_INSECURE_UPSTREAM=True` (lab and CI only): an empty certificate is
  refused with `FAILED_PRECONDITION` (`UPSTREAM_TLS_REQUIRED`). Server behaviour, no wire change.

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
