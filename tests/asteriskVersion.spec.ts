// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// `AsteriskConfigs.asteriskVersion` must carry EXPLICIT PRESENCE.
//
// The field selects the docker image tag of the Asterisk image a VTSI project starts. The server
// falls back to its own `ONDEWO_VTSI_ASTERISK_IMAGE_TAG` default when the caller says nothing, so
// "the caller said nothing" and "the caller sent the empty string" have to stay distinguishable on
// the wire -- the first is a fallback, the second is a caller error. A plain proto3 scalar cannot
// express that difference: it reads back as '' either way and the generator emits no `has`/`clear`
// pair for it.
//
// These assertions drive the GENERATED stub directly, so dropping `optional` from the .proto makes
// them fail to compile rather than silently changing behaviour at run time.

import nodeTest from 'node:test';
import assert from 'node:assert/strict';

import { AsteriskConfigs } from '../api/ondewo/vtsi/projects_pb';

/** A real ONDEWO Asterisk image tag, so the value is representative rather than a placeholder. */
const ASTERISK_VERSION: string = 'alpine-3.18-18.20.2';

/** Builds an otherwise-valid AsteriskConfigs -- the oneof is set, as the server requires. */
function makeConfigs(): AsteriskConfigs {
	const configs: AsteriskConfigs = new AsteriskConfigs();
	configs.setAsteriskConfigsTargetDirectoryName('asterisk_configs_dir');
	configs.setAsteriskPort(5060);
	return configs;
}

nodeTest('an unset asteriskVersion is reported as absent', (): void => {
	const configs: AsteriskConfigs = makeConfigs();
	assert.equal(configs.hasAsteriskVersion(), false);
});

nodeTest('a set asteriskVersion is reported as present', (): void => {
	const configs: AsteriskConfigs = makeConfigs();
	configs.setAsteriskVersion(ASTERISK_VERSION);
	assert.equal(configs.hasAsteriskVersion(), true);
	assert.equal(configs.getAsteriskVersion(), ASTERISK_VERSION);
});

nodeTest('an explicitly empty asteriskVersion is present and not the same as unset', (): void => {
	const configs: AsteriskConfigs = makeConfigs();
	configs.setAsteriskVersion('');
	assert.equal(configs.hasAsteriskVersion(), true);
	assert.equal(configs.getAsteriskVersion(), '');
	// Both read back '' -- the distinction survives only in the presence bit and on the wire.
	assert.notDeepEqual(configs.serializeBinary(), makeConfigs().serializeBinary());
});

nodeTest('clearing asteriskVersion restores absence', (): void => {
	const configs: AsteriskConfigs = makeConfigs();
	configs.setAsteriskVersion(ASTERISK_VERSION);
	configs.clearAsteriskVersion();
	assert.equal(configs.hasAsteriskVersion(), false);
});

nodeTest('presence and absence both survive a binary round trip', (): void => {
	const values: string[] = [ASTERISK_VERSION, ''];
	for (const value of values) {
		const sent: AsteriskConfigs = makeConfigs();
		sent.setAsteriskVersion(value);
		const received: AsteriskConfigs = AsteriskConfigs.deserializeBinary(sent.serializeBinary());
		assert.equal(received.hasAsteriskVersion(), true, `presence lost for ${JSON.stringify(value)}`);
		assert.equal(received.getAsteriskVersion(), value);
	}
	const unset: AsteriskConfigs = AsteriskConfigs.deserializeBinary(makeConfigs().serializeBinary());
	assert.equal(unset.hasAsteriskVersion(), false);
});

nodeTest('asteriskVersion does not participate in the asterisk_configs oneof', (): void => {
	// `optional` compiles to a SYNTHETIC oneof. The server reads its configuration variant with
	// `WhichOneof("asterisk_configs_oneof")` and rejects an unset one as a caller error, so a
	// synthetic oneof sitting next to the real one must not change that answer in either direction.
	const versionOnly: AsteriskConfigs = new AsteriskConfigs();
	versionOnly.setAsteriskVersion(ASTERISK_VERSION);
	assert.equal(
		versionOnly.getAsteriskConfigsOneofCase(),
		AsteriskConfigs.AsteriskConfigsOneofCase.ASTERISK_CONFIGS_ONEOF_NOT_SET
	);

	const configs: AsteriskConfigs = makeConfigs();
	configs.setAsteriskVersion(ASTERISK_VERSION);
	assert.equal(
		configs.getAsteriskConfigsOneofCase(),
		AsteriskConfigs.AsteriskConfigsOneofCase.ASTERISK_CONFIGS_TARGET_DIRECTORY_NAME
	);
});

nodeTest('the presence assertions are falsifiable', (): void => {
	// A premise test. `asteriskPort` is the plain proto3 scalar sitting one field number below and
	// is the control: the generator emits NO `has`/`clear` pair for it. Dropping `optional` from the
	// .proto moves asteriskVersion into that column, and the assertions above then fail to compile
	// on a method the stub no longer declares.
	const configs: Record<string, unknown> = makeConfigs() as unknown as Record<string, unknown>;
	assert.equal(typeof configs['hasAsteriskPort'], 'undefined');
	assert.equal(typeof configs['clearAsteriskPort'], 'undefined');
});
