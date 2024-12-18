// package: ondewo.nlu
// file: ondewo/nlu/aiservices.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as ondewo_nlu_ccai_project_pb from "../../ondewo/nlu/ccai_project_pb";
import * as ondewo_nlu_intent_pb from "../../ondewo/nlu/intent_pb";
import * as ondewo_nlu_entity_type_pb from "../../ondewo/nlu/entity_type_pb";
import * as ondewo_nlu_session_pb from "../../ondewo/nlu/session_pb";

export class ListLlmModelsRequest extends jspb.Message { 
    getCcaiServiceName(): string;
    setCcaiServiceName(value: string): ListLlmModelsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmModelsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmModelsRequest): ListLlmModelsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmModelsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmModelsRequest;
    static deserializeBinaryFromReader(message: ListLlmModelsRequest, reader: jspb.BinaryReader): ListLlmModelsRequest;
}

export namespace ListLlmModelsRequest {
    export type AsObject = {
        ccaiServiceName: string,
    }
}

export class ListLlmModelsResponse extends jspb.Message { 
    clearLlmModelsList(): void;
    getLlmModelsList(): Array<LlmModel>;
    setLlmModelsList(value: Array<LlmModel>): ListLlmModelsResponse;
    addLlmModels(value?: LlmModel, index?: number): LlmModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListLlmModelsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListLlmModelsResponse): ListLlmModelsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListLlmModelsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListLlmModelsResponse;
    static deserializeBinaryFromReader(message: ListLlmModelsResponse, reader: jspb.BinaryReader): ListLlmModelsResponse;
}

export namespace ListLlmModelsResponse {
    export type AsObject = {
        llmModelsList: Array<LlmModel.AsObject>,
    }
}

export class LlmModel extends jspb.Message { 
    getName(): string;
    setName(value: string): LlmModel;
    getDisplayName(): string;
    setDisplayName(value: string): LlmModel;
    getDescription(): string;
    setDescription(value: string): LlmModel;
    getCcaiServiceName(): string;
    setCcaiServiceName(value: string): LlmModel;
    getCcaiServiceProvider(): ondewo_nlu_ccai_project_pb.CcaiServiceProvider;
    setCcaiServiceProvider(value: ondewo_nlu_ccai_project_pb.CcaiServiceProvider): LlmModel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmModel.AsObject;
    static toObject(includeInstance: boolean, msg: LlmModel): LlmModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmModel;
    static deserializeBinaryFromReader(message: LlmModel, reader: jspb.BinaryReader): LlmModel;
}

export namespace LlmModel {
    export type AsObject = {
        name: string,
        displayName: string,
        description: string,
        ccaiServiceName: string,
        ccaiServiceProvider: ondewo_nlu_ccai_project_pb.CcaiServiceProvider,
    }
}

export class LlmGenerateRequest extends jspb.Message { 

    hasLlmGenerationRequest(): boolean;
    clearLlmGenerationRequest(): void;
    getLlmGenerationRequest(): google_protobuf_struct_pb.Struct | undefined;
    setLlmGenerationRequest(value?: google_protobuf_struct_pb.Struct): LlmGenerateRequest;
    getCcaiServiceName(): string;
    setCcaiServiceName(value: string): LlmGenerateRequest;
    clearFileResourcesList(): void;
    getFileResourcesList(): Array<ondewo_nlu_session_pb.FileResource>;
    setFileResourcesList(value: Array<ondewo_nlu_session_pb.FileResource>): LlmGenerateRequest;
    addFileResources(value?: ondewo_nlu_session_pb.FileResource, index?: number): ondewo_nlu_session_pb.FileResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmGenerateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LlmGenerateRequest): LlmGenerateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmGenerateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmGenerateRequest;
    static deserializeBinaryFromReader(message: LlmGenerateRequest, reader: jspb.BinaryReader): LlmGenerateRequest;
}

export namespace LlmGenerateRequest {
    export type AsObject = {
        llmGenerationRequest?: google_protobuf_struct_pb.Struct.AsObject,
        ccaiServiceName: string,
        fileResourcesList: Array<ondewo_nlu_session_pb.FileResource.AsObject>,
    }
}

export class LlmGenerateResponse extends jspb.Message { 

    hasLlmGenerationResponse(): boolean;
    clearLlmGenerationResponse(): void;
    getLlmGenerationResponse(): google_protobuf_struct_pb.Struct | undefined;
    setLlmGenerationResponse(value?: google_protobuf_struct_pb.Struct): LlmGenerateResponse;
    clearFileResourcesList(): void;
    getFileResourcesList(): Array<ondewo_nlu_session_pb.FileResource>;
    setFileResourcesList(value: Array<ondewo_nlu_session_pb.FileResource>): LlmGenerateResponse;
    addFileResources(value?: ondewo_nlu_session_pb.FileResource, index?: number): ondewo_nlu_session_pb.FileResource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmGenerateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LlmGenerateResponse): LlmGenerateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmGenerateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmGenerateResponse;
    static deserializeBinaryFromReader(message: LlmGenerateResponse, reader: jspb.BinaryReader): LlmGenerateResponse;
}

export namespace LlmGenerateResponse {
    export type AsObject = {
        llmGenerationResponse?: google_protobuf_struct_pb.Struct.AsObject,
        fileResourcesList: Array<ondewo_nlu_session_pb.FileResource.AsObject>,
    }
}

export class StreamingLlmGenerateResponse extends jspb.Message { 

    hasLlmGenerationStreamResponse(): boolean;
    clearLlmGenerationStreamResponse(): void;
    getLlmGenerationStreamResponse(): google_protobuf_struct_pb.Struct | undefined;
    setLlmGenerationStreamResponse(value?: google_protobuf_struct_pb.Struct): StreamingLlmGenerateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingLlmGenerateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingLlmGenerateResponse): StreamingLlmGenerateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingLlmGenerateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingLlmGenerateResponse;
    static deserializeBinaryFromReader(message: StreamingLlmGenerateResponse, reader: jspb.BinaryReader): StreamingLlmGenerateResponse;
}

export namespace StreamingLlmGenerateResponse {
    export type AsObject = {
        llmGenerationStreamResponse?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class ExtractEntitiesRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ExtractEntitiesRequest;
    getText(): string;
    setText(value: string): ExtractEntitiesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ExtractEntitiesRequest;
    getIntentName(): string;
    setIntentName(value: string): ExtractEntitiesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtractEntitiesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExtractEntitiesRequest): ExtractEntitiesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtractEntitiesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtractEntitiesRequest;
    static deserializeBinaryFromReader(message: ExtractEntitiesRequest, reader: jspb.BinaryReader): ExtractEntitiesRequest;
}

export namespace ExtractEntitiesRequest {
    export type AsObject = {
        parent: string,
        text: string,
        languageCode: string,
        intentName: string,
    }
}

export class ExtractEntitiesFuzzyRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ExtractEntitiesFuzzyRequest;
    getText(): string;
    setText(value: string): ExtractEntitiesFuzzyRequest;
    clearPotentialEntitiesList(): void;
    getPotentialEntitiesList(): Array<EntityTypeFuzzyNerConfig>;
    setPotentialEntitiesList(value: Array<EntityTypeFuzzyNerConfig>): ExtractEntitiesFuzzyRequest;
    addPotentialEntities(value?: EntityTypeFuzzyNerConfig, index?: number): EntityTypeFuzzyNerConfig;
    getMinimalScore(): number;
    setMinimalScore(value: number): ExtractEntitiesFuzzyRequest;
    getAllowOverlaps(): boolean;
    setAllowOverlaps(value: boolean): ExtractEntitiesFuzzyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtractEntitiesFuzzyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExtractEntitiesFuzzyRequest): ExtractEntitiesFuzzyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtractEntitiesFuzzyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtractEntitiesFuzzyRequest;
    static deserializeBinaryFromReader(message: ExtractEntitiesFuzzyRequest, reader: jspb.BinaryReader): ExtractEntitiesFuzzyRequest;
}

export namespace ExtractEntitiesFuzzyRequest {
    export type AsObject = {
        parent: string,
        text: string,
        potentialEntitiesList: Array<EntityTypeFuzzyNerConfig.AsObject>,
        minimalScore: number,
        allowOverlaps: boolean,
    }
}

export class EntityTypeFuzzyNerConfig extends jspb.Message { 

    hasEntityType(): boolean;
    clearEntityType(): void;
    getEntityType(): ondewo_nlu_entity_type_pb.EntityType | undefined;
    setEntityType(value?: ondewo_nlu_entity_type_pb.EntityType): EntityTypeFuzzyNerConfig;
    getMinimalScore(): number;
    setMinimalScore(value: number): EntityTypeFuzzyNerConfig;
    clearEntityValuesList(): void;
    getEntityValuesList(): Array<string>;
    setEntityValuesList(value: Array<string>): EntityTypeFuzzyNerConfig;
    addEntityValues(value: string, index?: number): string;
    getAlgorithm(): EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm;
    setAlgorithm(value: EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm): EntityTypeFuzzyNerConfig;
    getAllowOverlaps(): boolean;
    setAllowOverlaps(value: boolean): EntityTypeFuzzyNerConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityTypeFuzzyNerConfig.AsObject;
    static toObject(includeInstance: boolean, msg: EntityTypeFuzzyNerConfig): EntityTypeFuzzyNerConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityTypeFuzzyNerConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityTypeFuzzyNerConfig;
    static deserializeBinaryFromReader(message: EntityTypeFuzzyNerConfig, reader: jspb.BinaryReader): EntityTypeFuzzyNerConfig;
}

export namespace EntityTypeFuzzyNerConfig {
    export type AsObject = {
        entityType?: ondewo_nlu_entity_type_pb.EntityType.AsObject,
        minimalScore: number,
        entityValuesList: Array<string>,
        algorithm: EntityTypeFuzzyNerConfig.FuzzyNerAlgorithm,
        allowOverlaps: boolean,
    }

    export enum FuzzyNerAlgorithm {
    PREFILTER_LEVENSHTEIN = 0,
    LOCAL_MAXIMUM = 1,
    }

}

export class EntityDetected extends jspb.Message { 

    hasEntity(): boolean;
    clearEntity(): void;
    getEntity(): ondewo_nlu_intent_pb.Intent.TrainingPhrase.Entity | undefined;
    setEntity(value?: ondewo_nlu_intent_pb.Intent.TrainingPhrase.Entity): EntityDetected;
    getExtractionMethod(): string;
    setExtractionMethod(value: string): EntityDetected;
    getScore(): number;
    setScore(value: number): EntityDetected;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityDetected.AsObject;
    static toObject(includeInstance: boolean, msg: EntityDetected): EntityDetected.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityDetected, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityDetected;
    static deserializeBinaryFromReader(message: EntityDetected, reader: jspb.BinaryReader): EntityDetected;
}

export namespace EntityDetected {
    export type AsObject = {
        entity?: ondewo_nlu_intent_pb.Intent.TrainingPhrase.Entity.AsObject,
        extractionMethod: string,
        score: number,
    }
}

export class ExtractEntitiesResponse extends jspb.Message { 
    clearEntitiesDetectedList(): void;
    getEntitiesDetectedList(): Array<EntityDetected>;
    setEntitiesDetectedList(value: Array<EntityDetected>): ExtractEntitiesResponse;
    addEntitiesDetected(value?: EntityDetected, index?: number): EntityDetected;
    getText(): string;
    setText(value: string): ExtractEntitiesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtractEntitiesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExtractEntitiesResponse): ExtractEntitiesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtractEntitiesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtractEntitiesResponse;
    static deserializeBinaryFromReader(message: ExtractEntitiesResponse, reader: jspb.BinaryReader): ExtractEntitiesResponse;
}

export namespace ExtractEntitiesResponse {
    export type AsObject = {
        entitiesDetectedList: Array<EntityDetected.AsObject>,
        text: string,
    }
}

export class GetAlternativeSentencesRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): DataEnrichmentConfig | undefined;
    setConfig(value?: DataEnrichmentConfig): GetAlternativeSentencesRequest;
    getSentence(): string;
    setSentence(value: string): GetAlternativeSentencesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetAlternativeSentencesRequest;
    getParent(): string;
    setParent(value: string): GetAlternativeSentencesRequest;
    clearProtectedWordsList(): void;
    getProtectedWordsList(): Array<string>;
    setProtectedWordsList(value: Array<string>): GetAlternativeSentencesRequest;
    addProtectedWords(value: string, index?: number): string;
    clearWordsToChangeList(): void;
    getWordsToChangeList(): Array<string>;
    setWordsToChangeList(value: Array<string>): GetAlternativeSentencesRequest;
    addWordsToChange(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAlternativeSentencesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAlternativeSentencesRequest): GetAlternativeSentencesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAlternativeSentencesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAlternativeSentencesRequest;
    static deserializeBinaryFromReader(message: GetAlternativeSentencesRequest, reader: jspb.BinaryReader): GetAlternativeSentencesRequest;
}

export namespace GetAlternativeSentencesRequest {
    export type AsObject = {
        config?: DataEnrichmentConfig.AsObject,
        sentence: string,
        languageCode: string,
        parent: string,
        protectedWordsList: Array<string>,
        wordsToChangeList: Array<string>,
    }
}

export class GenerateUserSaysRequest extends jspb.Message { 
    getLanguageCode(): string;
    setLanguageCode(value: string): GenerateUserSaysRequest;
    getParent(): string;
    setParent(value: string): GenerateUserSaysRequest;
    getNRepeatSynonym(): number;
    setNRepeatSynonym(value: number): GenerateUserSaysRequest;
    getBranch(): string;
    setBranch(value: string): GenerateUserSaysRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateUserSaysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateUserSaysRequest): GenerateUserSaysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateUserSaysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateUserSaysRequest;
    static deserializeBinaryFromReader(message: GenerateUserSaysRequest, reader: jspb.BinaryReader): GenerateUserSaysRequest;
}

export namespace GenerateUserSaysRequest {
    export type AsObject = {
        languageCode: string,
        parent: string,
        nRepeatSynonym: number,
        branch: string,
    }
}

export class GenerateResponsesRequest extends jspb.Message { 
    getLanguageCode(): string;
    setLanguageCode(value: string): GenerateResponsesRequest;
    getParent(): string;
    setParent(value: string): GenerateResponsesRequest;
    getNRepeatSynonym(): number;
    setNRepeatSynonym(value: number): GenerateResponsesRequest;
    getBranch(): string;
    setBranch(value: string): GenerateResponsesRequest;
    getDropUnknownParameters(): boolean;
    setDropUnknownParameters(value: boolean): GenerateResponsesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateResponsesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateResponsesRequest): GenerateResponsesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateResponsesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateResponsesRequest;
    static deserializeBinaryFromReader(message: GenerateResponsesRequest, reader: jspb.BinaryReader): GenerateResponsesRequest;
}

export namespace GenerateResponsesRequest {
    export type AsObject = {
        languageCode: string,
        parent: string,
        nRepeatSynonym: number,
        branch: string,
        dropUnknownParameters: boolean,
    }
}

export class GetAlternativeTrainingPhrasesRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): DataEnrichmentConfig | undefined;
    setConfig(value?: DataEnrichmentConfig): GetAlternativeTrainingPhrasesRequest;

    hasTrainingPhrase(): boolean;
    clearTrainingPhrase(): void;
    getTrainingPhrase(): ondewo_nlu_intent_pb.Intent.TrainingPhrase | undefined;
    setTrainingPhrase(value?: ondewo_nlu_intent_pb.Intent.TrainingPhrase): GetAlternativeTrainingPhrasesRequest;
    getIntentName(): string;
    setIntentName(value: string): GetAlternativeTrainingPhrasesRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetAlternativeTrainingPhrasesRequest;
    getParent(): string;
    setParent(value: string): GetAlternativeTrainingPhrasesRequest;
    getDetectEntities(): boolean;
    setDetectEntities(value: boolean): GetAlternativeTrainingPhrasesRequest;
    getSimilarityThreshold(): number;
    setSimilarityThreshold(value: number): GetAlternativeTrainingPhrasesRequest;
    clearProtectedWordsList(): void;
    getProtectedWordsList(): Array<string>;
    setProtectedWordsList(value: Array<string>): GetAlternativeTrainingPhrasesRequest;
    addProtectedWords(value: string, index?: number): string;
    clearWordsToChangeList(): void;
    getWordsToChangeList(): Array<string>;
    setWordsToChangeList(value: Array<string>): GetAlternativeTrainingPhrasesRequest;
    addWordsToChange(value: string, index?: number): string;
    getBranch(): string;
    setBranch(value: string): GetAlternativeTrainingPhrasesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAlternativeTrainingPhrasesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAlternativeTrainingPhrasesRequest): GetAlternativeTrainingPhrasesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAlternativeTrainingPhrasesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAlternativeTrainingPhrasesRequest;
    static deserializeBinaryFromReader(message: GetAlternativeTrainingPhrasesRequest, reader: jspb.BinaryReader): GetAlternativeTrainingPhrasesRequest;
}

export namespace GetAlternativeTrainingPhrasesRequest {
    export type AsObject = {
        config?: DataEnrichmentConfig.AsObject,
        trainingPhrase?: ondewo_nlu_intent_pb.Intent.TrainingPhrase.AsObject,
        intentName: string,
        languageCode: string,
        parent: string,
        detectEntities: boolean,
        similarityThreshold: number,
        protectedWordsList: Array<string>,
        wordsToChangeList: Array<string>,
        branch: string,
    }
}

export class GetSynonymsRequest extends jspb.Message { 

    hasConfig(): boolean;
    clearConfig(): void;
    getConfig(): DataEnrichmentConfig | undefined;
    setConfig(value?: DataEnrichmentConfig): GetSynonymsRequest;
    getWord(): string;
    setWord(value: string): GetSynonymsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): GetSynonymsRequest;
    getParent(): string;
    setParent(value: string): GetSynonymsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSynonymsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetSynonymsRequest): GetSynonymsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSynonymsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSynonymsRequest;
    static deserializeBinaryFromReader(message: GetSynonymsRequest, reader: jspb.BinaryReader): GetSynonymsRequest;
}

export namespace GetSynonymsRequest {
    export type AsObject = {
        config?: DataEnrichmentConfig.AsObject,
        word: string,
        languageCode: string,
        parent: string,
    }
}

export class GetSynonymsResponse extends jspb.Message { 
    clearSynonymsList(): void;
    getSynonymsList(): Array<Synonym>;
    setSynonymsList(value: Array<Synonym>): GetSynonymsResponse;
    addSynonyms(value?: Synonym, index?: number): Synonym;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetSynonymsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetSynonymsResponse): GetSynonymsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetSynonymsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetSynonymsResponse;
    static deserializeBinaryFromReader(message: GetSynonymsResponse, reader: jspb.BinaryReader): GetSynonymsResponse;
}

export namespace GetSynonymsResponse {
    export type AsObject = {
        synonymsList: Array<Synonym.AsObject>,
    }
}

export class Synonym extends jspb.Message { 
    getSynonym(): string;
    setSynonym(value: string): Synonym;
    getScore(): number;
    setScore(value: number): Synonym;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Synonym.AsObject;
    static toObject(includeInstance: boolean, msg: Synonym): Synonym.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Synonym, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Synonym;
    static deserializeBinaryFromReader(message: Synonym, reader: jspb.BinaryReader): Synonym;
}

export namespace Synonym {
    export type AsObject = {
        synonym: string,
        score: number,
    }
}

export class GetAlternativeSentencesResponse extends jspb.Message { 
    clearAlternativeSentencesList(): void;
    getAlternativeSentencesList(): Array<AltSentence>;
    setAlternativeSentencesList(value: Array<AltSentence>): GetAlternativeSentencesResponse;
    addAlternativeSentences(value?: AltSentence, index?: number): AltSentence;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAlternativeSentencesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAlternativeSentencesResponse): GetAlternativeSentencesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAlternativeSentencesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAlternativeSentencesResponse;
    static deserializeBinaryFromReader(message: GetAlternativeSentencesResponse, reader: jspb.BinaryReader): GetAlternativeSentencesResponse;
}

export namespace GetAlternativeSentencesResponse {
    export type AsObject = {
        alternativeSentencesList: Array<AltSentence.AsObject>,
    }
}

export class GenerateResponsesResponse extends jspb.Message { 
    clearResponsesList(): void;
    getResponsesList(): Array<string>;
    setResponsesList(value: Array<string>): GenerateResponsesResponse;
    addResponses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateResponsesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateResponsesResponse): GenerateResponsesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateResponsesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateResponsesResponse;
    static deserializeBinaryFromReader(message: GenerateResponsesResponse, reader: jspb.BinaryReader): GenerateResponsesResponse;
}

export namespace GenerateResponsesResponse {
    export type AsObject = {
        responsesList: Array<string>,
    }
}

export class GenerateUserSaysResponse extends jspb.Message { 
    clearUserSaysList(): void;
    getUserSaysList(): Array<string>;
    setUserSaysList(value: Array<string>): GenerateUserSaysResponse;
    addUserSays(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateUserSaysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateUserSaysResponse): GenerateUserSaysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateUserSaysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateUserSaysResponse;
    static deserializeBinaryFromReader(message: GenerateUserSaysResponse, reader: jspb.BinaryReader): GenerateUserSaysResponse;
}

export namespace GenerateUserSaysResponse {
    export type AsObject = {
        userSaysList: Array<string>,
    }
}

export class GetAlternativeTrainingPhrasesResponse extends jspb.Message { 
    clearAlternativeTrainingPhrasesList(): void;
    getAlternativeTrainingPhrasesList(): Array<AltTrainingPhrase>;
    setAlternativeTrainingPhrasesList(value: Array<AltTrainingPhrase>): GetAlternativeTrainingPhrasesResponse;
    addAlternativeTrainingPhrases(value?: AltTrainingPhrase, index?: number): AltTrainingPhrase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAlternativeTrainingPhrasesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAlternativeTrainingPhrasesResponse): GetAlternativeTrainingPhrasesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAlternativeTrainingPhrasesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAlternativeTrainingPhrasesResponse;
    static deserializeBinaryFromReader(message: GetAlternativeTrainingPhrasesResponse, reader: jspb.BinaryReader): GetAlternativeTrainingPhrasesResponse;
}

export namespace GetAlternativeTrainingPhrasesResponse {
    export type AsObject = {
        alternativeTrainingPhrasesList: Array<AltTrainingPhrase.AsObject>,
    }
}

export class AltSentence extends jspb.Message { 
    getSentence(): string;
    setSentence(value: string): AltSentence;
    getScore(): number;
    setScore(value: number): AltSentence;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AltSentence.AsObject;
    static toObject(includeInstance: boolean, msg: AltSentence): AltSentence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AltSentence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AltSentence;
    static deserializeBinaryFromReader(message: AltSentence, reader: jspb.BinaryReader): AltSentence;
}

export namespace AltSentence {
    export type AsObject = {
        sentence: string,
        score: number,
    }
}

export class AltTrainingPhrase extends jspb.Message { 

    hasTrainingPhrase(): boolean;
    clearTrainingPhrase(): void;
    getTrainingPhrase(): ondewo_nlu_intent_pb.Intent.TrainingPhrase | undefined;
    setTrainingPhrase(value?: ondewo_nlu_intent_pb.Intent.TrainingPhrase): AltTrainingPhrase;
    getScore(): number;
    setScore(value: number): AltTrainingPhrase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AltTrainingPhrase.AsObject;
    static toObject(includeInstance: boolean, msg: AltTrainingPhrase): AltTrainingPhrase.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AltTrainingPhrase, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AltTrainingPhrase;
    static deserializeBinaryFromReader(message: AltTrainingPhrase, reader: jspb.BinaryReader): AltTrainingPhrase;
}

export namespace AltTrainingPhrase {
    export type AsObject = {
        trainingPhrase?: ondewo_nlu_intent_pb.Intent.TrainingPhrase.AsObject,
        score: number,
    }
}

export class DataEnrichmentConfig extends jspb.Message { 

    hasEntityEnrichment(): boolean;
    clearEntityEnrichment(): void;
    getEntityEnrichment(): EntityEnrichmentConfig | undefined;
    setEntityEnrichment(value?: EntityEnrichmentConfig): DataEnrichmentConfig;

    hasThesaurusEnrichment(): boolean;
    clearThesaurusEnrichment(): void;
    getThesaurusEnrichment(): ThesaurusEnrichmentConfig | undefined;
    setThesaurusEnrichment(value?: ThesaurusEnrichmentConfig): DataEnrichmentConfig;

    hasWord2vecEnrichment(): boolean;
    clearWord2vecEnrichment(): void;
    getWord2vecEnrichment(): Word2VecEnrichmentConfig | undefined;
    setWord2vecEnrichment(value?: Word2VecEnrichmentConfig): DataEnrichmentConfig;

    hasWordNetEnrichment(): boolean;
    clearWordNetEnrichment(): void;
    getWordNetEnrichment(): WordNetAugEnrichmentConfig | undefined;
    setWordNetEnrichment(value?: WordNetAugEnrichmentConfig): DataEnrichmentConfig;

    hasGpt2Enrichment(): boolean;
    clearGpt2Enrichment(): void;
    getGpt2Enrichment(): GPT2EnrichmentConfig | undefined;
    setGpt2Enrichment(value?: GPT2EnrichmentConfig): DataEnrichmentConfig;

    hasGloveEnrichment(): boolean;
    clearGloveEnrichment(): void;
    getGloveEnrichment(): GloVeEnrichmentConfig | undefined;
    setGloveEnrichment(value?: GloVeEnrichmentConfig): DataEnrichmentConfig;

    hasBertEnrichment(): boolean;
    clearBertEnrichment(): void;
    getBertEnrichment(): BertAugEnrichmentConfig | undefined;
    setBertEnrichment(value?: BertAugEnrichmentConfig): DataEnrichmentConfig;

    hasXlnetEnrichment(): boolean;
    clearXlnetEnrichment(): void;
    getXlnetEnrichment(): XLNetAugEnrichmentConfig | undefined;
    setXlnetEnrichment(value?: XLNetAugEnrichmentConfig): DataEnrichmentConfig;

    hasLlmEnrichment(): boolean;
    clearLlmEnrichment(): void;
    getLlmEnrichment(): LlmEnrichmentConfig | undefined;
    setLlmEnrichment(value?: LlmEnrichmentConfig): DataEnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataEnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: DataEnrichmentConfig): DataEnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataEnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataEnrichmentConfig;
    static deserializeBinaryFromReader(message: DataEnrichmentConfig, reader: jspb.BinaryReader): DataEnrichmentConfig;
}

export namespace DataEnrichmentConfig {
    export type AsObject = {
        entityEnrichment?: EntityEnrichmentConfig.AsObject,
        thesaurusEnrichment?: ThesaurusEnrichmentConfig.AsObject,
        word2vecEnrichment?: Word2VecEnrichmentConfig.AsObject,
        wordNetEnrichment?: WordNetAugEnrichmentConfig.AsObject,
        gpt2Enrichment?: GPT2EnrichmentConfig.AsObject,
        gloveEnrichment?: GloVeEnrichmentConfig.AsObject,
        bertEnrichment?: BertAugEnrichmentConfig.AsObject,
        xlnetEnrichment?: XLNetAugEnrichmentConfig.AsObject,
        llmEnrichment?: LlmEnrichmentConfig.AsObject,
    }
}

export class EntityEnrichmentConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): EntityEnrichmentConfig;
    getEnrichmentFactor(): number;
    setEnrichmentFactor(value: number): EntityEnrichmentConfig;
    getExecutionOrder(): number;
    setExecutionOrder(value: number): EntityEnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EntityEnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: EntityEnrichmentConfig): EntityEnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EntityEnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EntityEnrichmentConfig;
    static deserializeBinaryFromReader(message: EntityEnrichmentConfig, reader: jspb.BinaryReader): EntityEnrichmentConfig;
}

export namespace EntityEnrichmentConfig {
    export type AsObject = {
        isActive: boolean,
        enrichmentFactor: number,
        executionOrder: number,
    }
}

export class ThesaurusEnrichmentConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): ThesaurusEnrichmentConfig;
    getEnrichmentFactor(): number;
    setEnrichmentFactor(value: number): ThesaurusEnrichmentConfig;
    getExecutionOrder(): number;
    setExecutionOrder(value: number): ThesaurusEnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThesaurusEnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: ThesaurusEnrichmentConfig): ThesaurusEnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThesaurusEnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThesaurusEnrichmentConfig;
    static deserializeBinaryFromReader(message: ThesaurusEnrichmentConfig, reader: jspb.BinaryReader): ThesaurusEnrichmentConfig;
}

export namespace ThesaurusEnrichmentConfig {
    export type AsObject = {
        isActive: boolean,
        enrichmentFactor: number,
        executionOrder: number,
    }
}

export class BertAugEnrichmentConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): BertAugEnrichmentConfig;
    getEnrichmentFactor(): number;
    setEnrichmentFactor(value: number): BertAugEnrichmentConfig;
    getExecutionOrder(): number;
    setExecutionOrder(value: number): BertAugEnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BertAugEnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: BertAugEnrichmentConfig): BertAugEnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BertAugEnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BertAugEnrichmentConfig;
    static deserializeBinaryFromReader(message: BertAugEnrichmentConfig, reader: jspb.BinaryReader): BertAugEnrichmentConfig;
}

export namespace BertAugEnrichmentConfig {
    export type AsObject = {
        isActive: boolean,
        enrichmentFactor: number,
        executionOrder: number,
    }
}

export class GloVeEnrichmentConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): GloVeEnrichmentConfig;
    getEnrichmentFactor(): number;
    setEnrichmentFactor(value: number): GloVeEnrichmentConfig;
    getExecutionOrder(): number;
    setExecutionOrder(value: number): GloVeEnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GloVeEnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: GloVeEnrichmentConfig): GloVeEnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GloVeEnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GloVeEnrichmentConfig;
    static deserializeBinaryFromReader(message: GloVeEnrichmentConfig, reader: jspb.BinaryReader): GloVeEnrichmentConfig;
}

export namespace GloVeEnrichmentConfig {
    export type AsObject = {
        isActive: boolean,
        enrichmentFactor: number,
        executionOrder: number,
    }
}

export class GPT2EnrichmentConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): GPT2EnrichmentConfig;
    getEnrichmentFactor(): number;
    setEnrichmentFactor(value: number): GPT2EnrichmentConfig;
    getExecutionOrder(): number;
    setExecutionOrder(value: number): GPT2EnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GPT2EnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: GPT2EnrichmentConfig): GPT2EnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GPT2EnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GPT2EnrichmentConfig;
    static deserializeBinaryFromReader(message: GPT2EnrichmentConfig, reader: jspb.BinaryReader): GPT2EnrichmentConfig;
}

export namespace GPT2EnrichmentConfig {
    export type AsObject = {
        isActive: boolean,
        enrichmentFactor: number,
        executionOrder: number,
    }
}

export class Word2VecEnrichmentConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): Word2VecEnrichmentConfig;
    getEnrichmentFactor(): number;
    setEnrichmentFactor(value: number): Word2VecEnrichmentConfig;
    getExecutionOrder(): number;
    setExecutionOrder(value: number): Word2VecEnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Word2VecEnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: Word2VecEnrichmentConfig): Word2VecEnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Word2VecEnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Word2VecEnrichmentConfig;
    static deserializeBinaryFromReader(message: Word2VecEnrichmentConfig, reader: jspb.BinaryReader): Word2VecEnrichmentConfig;
}

export namespace Word2VecEnrichmentConfig {
    export type AsObject = {
        isActive: boolean,
        enrichmentFactor: number,
        executionOrder: number,
    }
}

export class WordNetAugEnrichmentConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): WordNetAugEnrichmentConfig;
    getEnrichmentFactor(): number;
    setEnrichmentFactor(value: number): WordNetAugEnrichmentConfig;
    getExecutionOrder(): number;
    setExecutionOrder(value: number): WordNetAugEnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WordNetAugEnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: WordNetAugEnrichmentConfig): WordNetAugEnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WordNetAugEnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WordNetAugEnrichmentConfig;
    static deserializeBinaryFromReader(message: WordNetAugEnrichmentConfig, reader: jspb.BinaryReader): WordNetAugEnrichmentConfig;
}

export namespace WordNetAugEnrichmentConfig {
    export type AsObject = {
        isActive: boolean,
        enrichmentFactor: number,
        executionOrder: number,
    }
}

export class XLNetAugEnrichmentConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): XLNetAugEnrichmentConfig;
    getEnrichmentFactor(): number;
    setEnrichmentFactor(value: number): XLNetAugEnrichmentConfig;
    getExecutionOrder(): number;
    setExecutionOrder(value: number): XLNetAugEnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XLNetAugEnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: XLNetAugEnrichmentConfig): XLNetAugEnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XLNetAugEnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XLNetAugEnrichmentConfig;
    static deserializeBinaryFromReader(message: XLNetAugEnrichmentConfig, reader: jspb.BinaryReader): XLNetAugEnrichmentConfig;
}

export namespace XLNetAugEnrichmentConfig {
    export type AsObject = {
        isActive: boolean,
        enrichmentFactor: number,
        executionOrder: number,
    }
}

export class LlmEnrichmentConfig extends jspb.Message { 
    getIsActive(): boolean;
    setIsActive(value: boolean): LlmEnrichmentConfig;
    getEnrichmentFactor(): number;
    setEnrichmentFactor(value: number): LlmEnrichmentConfig;
    getExecutionOrder(): number;
    setExecutionOrder(value: number): LlmEnrichmentConfig;
    getCcaiServiceName(): string;
    setCcaiServiceName(value: string): LlmEnrichmentConfig;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LlmEnrichmentConfig.AsObject;
    static toObject(includeInstance: boolean, msg: LlmEnrichmentConfig): LlmEnrichmentConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LlmEnrichmentConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LlmEnrichmentConfig;
    static deserializeBinaryFromReader(message: LlmEnrichmentConfig, reader: jspb.BinaryReader): LlmEnrichmentConfig;
}

export namespace LlmEnrichmentConfig {
    export type AsObject = {
        isActive: boolean,
        enrichmentFactor: number,
        executionOrder: number,
        ccaiServiceName: string,
    }
}

export class ClassifyIntentsRequest extends jspb.Message { 
    getParent(): string;
    setParent(value: string): ClassifyIntentsRequest;
    getText(): string;
    setText(value: string): ClassifyIntentsRequest;
    getLanguageCode(): string;
    setLanguageCode(value: string): ClassifyIntentsRequest;
    getActiveContexts(): boolean;
    setActiveContexts(value: boolean): ClassifyIntentsRequest;
    clearContextNamesList(): void;
    getContextNamesList(): Array<string>;
    setContextNamesList(value: Array<string>): ClassifyIntentsRequest;
    addContextNames(value: string, index?: number): string;
    getMode(): Mode;
    setMode(value: Mode): ClassifyIntentsRequest;
    clearAlgorithmsList(): void;
    getAlgorithmsList(): Array<IntentAlgorithms>;
    setAlgorithmsList(value: Array<IntentAlgorithms>): ClassifyIntentsRequest;
    addAlgorithms(value: IntentAlgorithms, index?: number): IntentAlgorithms;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassifyIntentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClassifyIntentsRequest): ClassifyIntentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassifyIntentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassifyIntentsRequest;
    static deserializeBinaryFromReader(message: ClassifyIntentsRequest, reader: jspb.BinaryReader): ClassifyIntentsRequest;
}

export namespace ClassifyIntentsRequest {
    export type AsObject = {
        parent: string,
        text: string,
        languageCode: string,
        activeContexts: boolean,
        contextNamesList: Array<string>,
        mode: Mode,
        algorithmsList: Array<IntentAlgorithms>,
    }
}

export class IntentClassified extends jspb.Message { 
    getIntentName(): string;
    setIntentName(value: string): IntentClassified;
    getIntentDisplayName(): string;
    setIntentDisplayName(value: string): IntentClassified;
    getClassifier(): string;
    setClassifier(value: string): IntentClassified;
    getScore(): number;
    setScore(value: number): IntentClassified;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentClassified.AsObject;
    static toObject(includeInstance: boolean, msg: IntentClassified): IntentClassified.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentClassified, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentClassified;
    static deserializeBinaryFromReader(message: IntentClassified, reader: jspb.BinaryReader): IntentClassified;
}

export namespace IntentClassified {
    export type AsObject = {
        intentName: string,
        intentDisplayName: string,
        classifier: string,
        score: number,
    }
}

export class ClassifyIntentsResponse extends jspb.Message { 
    clearIntentsClassifiedList(): void;
    getIntentsClassifiedList(): Array<IntentClassified>;
    setIntentsClassifiedList(value: Array<IntentClassified>): ClassifyIntentsResponse;
    addIntentsClassified(value?: IntentClassified, index?: number): IntentClassified;
    getText(): string;
    setText(value: string): ClassifyIntentsResponse;
    getActiveContexts(): boolean;
    setActiveContexts(value: boolean): ClassifyIntentsResponse;
    clearContextNamesList(): void;
    getContextNamesList(): Array<string>;
    setContextNamesList(value: Array<string>): ClassifyIntentsResponse;
    addContextNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassifyIntentsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ClassifyIntentsResponse): ClassifyIntentsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassifyIntentsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassifyIntentsResponse;
    static deserializeBinaryFromReader(message: ClassifyIntentsResponse, reader: jspb.BinaryReader): ClassifyIntentsResponse;
}

export namespace ClassifyIntentsResponse {
    export type AsObject = {
        intentsClassifiedList: Array<IntentClassified.AsObject>,
        text: string,
        activeContexts: boolean,
        contextNamesList: Array<string>,
    }
}

export enum Mode {
    UNSPECIFIED = 0,
    EXCLUSIVE = 1,
    INCLUSIVE = 2,
}

export enum IntentAlgorithms {
    ONDEWOINTENTEXACTCONTEXTDETECTOR = 0,
    ONDEWOINTENTEXACTMATCH = 1,
    ONDEWOINTENTNAMEDEXACTMATCH = 2,
    ONDEWOINTENTSIMILARITYMATCH = 3,
    ONDEWOINTENTNAMEDSIMILARITYMATCH = 4,
    ONDEWOINTENTBERTCLASSIFIER = 7,
    ONDEWOINTENTMETACLASSIFIER = 8,
    INTENTEXITDETECTOR = 10,
    ONDEWOINTENTRANKINGMATCH = 11,
    ONDEWOWEIGHTEDENSEMBLE = 13,
    ONDEWOINTENTEXITDETECTOR = 14,
    ONDEWOINTENTPARAMETERMATCH = 15,
}
