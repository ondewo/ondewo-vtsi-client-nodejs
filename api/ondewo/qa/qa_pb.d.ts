// package: ondewo.qa
// file: ondewo/qa/qa.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_session_pb from '../../ondewo/nlu/session_pb';

export class GetAnswerRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): GetAnswerRequest;

	hasText(): boolean;
	clearText(): void;
	getText(): ondewo_nlu_session_pb.TextInput | undefined;
	setText(value?: ondewo_nlu_session_pb.TextInput): GetAnswerRequest;
	getMaxNumAnswers(): number;
	setMaxNumAnswers(value: number): GetAnswerRequest;
	getThresholdReader(): number;
	setThresholdReader(value: number): GetAnswerRequest;
	getThresholdRetriever(): number;
	setThresholdRetriever(value: number): GetAnswerRequest;
	getThresholdOverall(): number;
	setThresholdOverall(value: number): GetAnswerRequest;
	getReaderModelName(): string;
	setReaderModelName(value: string): GetAnswerRequest;

	hasUrlFilter(): boolean;
	clearUrlFilter(): void;
	getUrlFilter(): UrlFilter | undefined;
	setUrlFilter(value?: UrlFilter): GetAnswerRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetAnswerRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetAnswerRequest): GetAnswerRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetAnswerRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetAnswerRequest;
	static deserializeBinaryFromReader(message: GetAnswerRequest, reader: jspb.BinaryReader): GetAnswerRequest;
}

export namespace GetAnswerRequest {
	export type AsObject = {
		sessionId: string;
		text?: ondewo_nlu_session_pb.TextInput.AsObject;
		maxNumAnswers: number;
		thresholdReader: number;
		thresholdRetriever: number;
		thresholdOverall: number;
		readerModelName: string;
		urlFilter?: UrlFilter.AsObject;
	};
}

export class GetAnswerResponse extends jspb.Message {
	hasQueryResult(): boolean;
	clearQueryResult(): void;
	getQueryResult(): ondewo_nlu_session_pb.DetectIntentResponse | undefined;
	setQueryResult(value?: ondewo_nlu_session_pb.DetectIntentResponse): GetAnswerResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetAnswerResponse.AsObject;
	static toObject(includeInstance: boolean, msg: GetAnswerResponse): GetAnswerResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetAnswerResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetAnswerResponse;
	static deserializeBinaryFromReader(message: GetAnswerResponse, reader: jspb.BinaryReader): GetAnswerResponse;
}

export namespace GetAnswerResponse {
	export type AsObject = {
		queryResult?: ondewo_nlu_session_pb.DetectIntentResponse.AsObject;
	};
}

export class RunScraperRequest extends jspb.Message {
	clearProjectIdsList(): void;
	getProjectIdsList(): Array<string>;
	setProjectIdsList(value: Array<string>): RunScraperRequest;
	addProjectIds(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): RunScraperRequest.AsObject;
	static toObject(includeInstance: boolean, msg: RunScraperRequest): RunScraperRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: RunScraperRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): RunScraperRequest;
	static deserializeBinaryFromReader(message: RunScraperRequest, reader: jspb.BinaryReader): RunScraperRequest;
}

export namespace RunScraperRequest {
	export type AsObject = {
		projectIdsList: Array<string>;
	};
}

export class RunScraperResponse extends jspb.Message {
	clearScraperContainersList(): void;
	getScraperContainersList(): Array<RunScraperResponse.ScraperContainer>;
	setScraperContainersList(value: Array<RunScraperResponse.ScraperContainer>): RunScraperResponse;
	addScraperContainers(
		value?: RunScraperResponse.ScraperContainer,
		index?: number
	): RunScraperResponse.ScraperContainer;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): RunScraperResponse.AsObject;
	static toObject(includeInstance: boolean, msg: RunScraperResponse): RunScraperResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: RunScraperResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): RunScraperResponse;
	static deserializeBinaryFromReader(message: RunScraperResponse, reader: jspb.BinaryReader): RunScraperResponse;
}

export namespace RunScraperResponse {
	export type AsObject = {
		scraperContainersList: Array<RunScraperResponse.ScraperContainer.AsObject>;
	};

	export class ScraperContainer extends jspb.Message {
		getContainerName(): string;
		setContainerName(value: string): ScraperContainer;
		getContainerId(): string;
		setContainerId(value: string): ScraperContainer;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): ScraperContainer.AsObject;
		static toObject(includeInstance: boolean, msg: ScraperContainer): ScraperContainer.AsObject;
		static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
		static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
		static serializeBinaryToWriter(message: ScraperContainer, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): ScraperContainer;
		static deserializeBinaryFromReader(message: ScraperContainer, reader: jspb.BinaryReader): ScraperContainer;
	}

	export namespace ScraperContainer {
		export type AsObject = {
			containerName: string;
			containerId: string;
		};
	}
}

export class RunTrainingResponse extends jspb.Message {
	getF1(): number;
	setF1(value: number): RunTrainingResponse;
	getAccuracy(): number;
	setAccuracy(value: number): RunTrainingResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): RunTrainingResponse.AsObject;
	static toObject(includeInstance: boolean, msg: RunTrainingResponse): RunTrainingResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: RunTrainingResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): RunTrainingResponse;
	static deserializeBinaryFromReader(message: RunTrainingResponse, reader: jspb.BinaryReader): RunTrainingResponse;
}

export namespace RunTrainingResponse {
	export type AsObject = {
		f1: number;
		accuracy: number;
	};
}

export class UrlFilter extends jspb.Message {
	clearAllowedValuesList(): void;
	getAllowedValuesList(): Array<string>;
	setAllowedValuesList(value: Array<string>): UrlFilter;
	addAllowedValues(value: string, index?: number): string;
	getRegexFilterInclude(): string;
	setRegexFilterInclude(value: string): UrlFilter;
	getRegexFilterExclude(): string;
	setRegexFilterExclude(value: string): UrlFilter;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): UrlFilter.AsObject;
	static toObject(includeInstance: boolean, msg: UrlFilter): UrlFilter.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: UrlFilter, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): UrlFilter;
	static deserializeBinaryFromReader(message: UrlFilter, reader: jspb.BinaryReader): UrlFilter;
}

export namespace UrlFilter {
	export type AsObject = {
		allowedValuesList: Array<string>;
		regexFilterInclude: string;
		regexFilterExclude: string;
	};
}

export class GetServerStateResponse extends jspb.Message {
	getServerIsReady(): boolean;
	setServerIsReady(value: boolean): GetServerStateResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetServerStateResponse.AsObject;
	static toObject(includeInstance: boolean, msg: GetServerStateResponse): GetServerStateResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetServerStateResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetServerStateResponse;
	static deserializeBinaryFromReader(
		message: GetServerStateResponse,
		reader: jspb.BinaryReader
	): GetServerStateResponse;
}

export namespace GetServerStateResponse {
	export type AsObject = {
		serverIsReady: boolean;
	};
}

export class ListProjectIdsResponse extends jspb.Message {
	clearProjectIdsList(): void;
	getProjectIdsList(): Array<string>;
	setProjectIdsList(value: Array<string>): ListProjectIdsResponse;
	addProjectIds(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListProjectIdsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListProjectIdsResponse): ListProjectIdsResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: ListProjectIdsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListProjectIdsResponse;
	static deserializeBinaryFromReader(
		message: ListProjectIdsResponse,
		reader: jspb.BinaryReader
	): ListProjectIdsResponse;
}

export namespace ListProjectIdsResponse {
	export type AsObject = {
		projectIdsList: Array<string>;
	};
}

export class GetProjectConfigRequest extends jspb.Message {
	getProjectId(): string;
	setProjectId(value: string): GetProjectConfigRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetProjectConfigRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetProjectConfigRequest): GetProjectConfigRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetProjectConfigRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetProjectConfigRequest;
	static deserializeBinaryFromReader(
		message: GetProjectConfigRequest,
		reader: jspb.BinaryReader
	): GetProjectConfigRequest;
}

export namespace GetProjectConfigRequest {
	export type AsObject = {
		projectId: string;
	};
}

export class GetProjectConfigResponse extends jspb.Message {
	getConfigSerialized(): string;
	setConfigSerialized(value: string): GetProjectConfigResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetProjectConfigResponse.AsObject;
	static toObject(includeInstance: boolean, msg: GetProjectConfigResponse): GetProjectConfigResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: GetProjectConfigResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetProjectConfigResponse;
	static deserializeBinaryFromReader(
		message: GetProjectConfigResponse,
		reader: jspb.BinaryReader
	): GetProjectConfigResponse;
}

export namespace GetProjectConfigResponse {
	export type AsObject = {
		configSerialized: string;
	};
}

export class UpdateDatabaseRequest extends jspb.Message {
	clearProjectIdsList(): void;
	getProjectIdsList(): Array<string>;
	setProjectIdsList(value: Array<string>): UpdateDatabaseRequest;
	addProjectIds(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): UpdateDatabaseRequest.AsObject;
	static toObject(includeInstance: boolean, msg: UpdateDatabaseRequest): UpdateDatabaseRequest.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: UpdateDatabaseRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): UpdateDatabaseRequest;
	static deserializeBinaryFromReader(message: UpdateDatabaseRequest, reader: jspb.BinaryReader): UpdateDatabaseRequest;
}

export namespace UpdateDatabaseRequest {
	export type AsObject = {
		projectIdsList: Array<string>;
	};
}

export class UpdateDatabaseResponse extends jspb.Message {
	clearErrorMessagesList(): void;
	getErrorMessagesList(): Array<string>;
	setErrorMessagesList(value: Array<string>): UpdateDatabaseResponse;
	addErrorMessages(value: string, index?: number): string;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): UpdateDatabaseResponse.AsObject;
	static toObject(includeInstance: boolean, msg: UpdateDatabaseResponse): UpdateDatabaseResponse.AsObject;
	static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
	static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
	static serializeBinaryToWriter(message: UpdateDatabaseResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): UpdateDatabaseResponse;
	static deserializeBinaryFromReader(
		message: UpdateDatabaseResponse,
		reader: jspb.BinaryReader
	): UpdateDatabaseResponse;
}

export namespace UpdateDatabaseResponse {
	export type AsObject = {
		errorMessagesList: Array<string>;
	};
}
