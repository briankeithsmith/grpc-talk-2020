import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class PresentationUpdate extends jspb.Message {
  getSlidename(): string;
  setSlidename(value: string): void;

  getSubslide(): string;
  setSubslide(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PresentationUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: PresentationUpdate): PresentationUpdate.AsObject;
  static serializeBinaryToWriter(message: PresentationUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PresentationUpdate;
  static deserializeBinaryFromReader(message: PresentationUpdate, reader: jspb.BinaryReader): PresentationUpdate;
}

export namespace PresentationUpdate {
  export type AsObject = {
    slidename: string,
    subslide: string,
  }
}

export class ChatMessage extends jspb.Message {
  getUser(): string;
  setUser(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    user: string,
    message: string,
    timestamp: number,
    messageid: string,
  }
}

export class ChatMessageResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  getMessage(): ChatMessage | undefined;
  setMessage(value?: ChatMessage): void;
  hasMessage(): boolean;
  clearMessage(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageResponse): ChatMessageResponse.AsObject;
  static serializeBinaryToWriter(message: ChatMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageResponse;
  static deserializeBinaryFromReader(message: ChatMessageResponse, reader: jspb.BinaryReader): ChatMessageResponse;
}

export namespace ChatMessageResponse {
  export type AsObject = {
    error: boolean,
    errormessage: string,
    message?: ChatMessage.AsObject,
  }
}

export class ActivePresentationResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivePresentationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivePresentationResponse): ActivePresentationResponse.AsObject;
  static serializeBinaryToWriter(message: ActivePresentationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivePresentationResponse;
  static deserializeBinaryFromReader(message: ActivePresentationResponse, reader: jspb.BinaryReader): ActivePresentationResponse;
}

export namespace ActivePresentationResponse {
  export type AsObject = {
    error: boolean,
    isactive: boolean,
  }
}

export class StartPresentationRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartPresentationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartPresentationRequest): StartPresentationRequest.AsObject;
  static serializeBinaryToWriter(message: StartPresentationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartPresentationRequest;
  static deserializeBinaryFromReader(message: StartPresentationRequest, reader: jspb.BinaryReader): StartPresentationRequest;
}

export namespace StartPresentationRequest {
  export type AsObject = {
    password: string,
  }
}

export class StartPresentationResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartPresentationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartPresentationResponse): StartPresentationResponse.AsObject;
  static serializeBinaryToWriter(message: StartPresentationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartPresentationResponse;
  static deserializeBinaryFromReader(message: StartPresentationResponse, reader: jspb.BinaryReader): StartPresentationResponse;
}

export namespace StartPresentationResponse {
  export type AsObject = {
    error: boolean,
  }
}

export class PostChatMessageResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  getMessageid(): string;
  setMessageid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostChatMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostChatMessageResponse): PostChatMessageResponse.AsObject;
  static serializeBinaryToWriter(message: PostChatMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostChatMessageResponse;
  static deserializeBinaryFromReader(message: PostChatMessageResponse, reader: jspb.BinaryReader): PostChatMessageResponse;
}

export namespace PostChatMessageResponse {
  export type AsObject = {
    error: boolean,
    errormessage: string,
    messageid: string,
  }
}

