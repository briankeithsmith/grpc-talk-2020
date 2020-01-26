import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class PresentationUpdate extends jspb.Message {
  getSlidename(): string;
  setSlidename(value: string): void;

  getSubslide(): number;
  setSubslide(value: number): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

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
    subslide: number,
    isactive: boolean,
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

  getCurrent(): PresentationUpdate | undefined;
  setCurrent(value?: PresentationUpdate): void;
  hasCurrent(): boolean;
  clearCurrent(): void;

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
    current?: PresentationUpdate.AsObject,
  }
}

export class UpdatePresentationRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  getSlidename(): string;
  setSlidename(value: string): void;

  getSubslide(): number;
  setSubslide(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePresentationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePresentationRequest): UpdatePresentationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePresentationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePresentationRequest;
  static deserializeBinaryFromReader(message: UpdatePresentationRequest, reader: jspb.BinaryReader): UpdatePresentationRequest;
}

export namespace UpdatePresentationRequest {
  export type AsObject = {
    password: string,
    isactive: boolean,
    slidename: string,
    subslide: number,
  }
}

export class UpdatePresentationResponse extends jspb.Message {
  getError(): boolean;
  setError(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePresentationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePresentationResponse): UpdatePresentationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePresentationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePresentationResponse;
  static deserializeBinaryFromReader(message: UpdatePresentationResponse, reader: jspb.BinaryReader): UpdatePresentationResponse;
}

export namespace UpdatePresentationResponse {
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

