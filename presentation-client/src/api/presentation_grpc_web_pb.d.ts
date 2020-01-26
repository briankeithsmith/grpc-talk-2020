import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  ActivePresentationResponse,
  ChatMessage,
  ChatMessageResponse,
  PostChatMessageResponse,
  PresentationUpdate,
  UpdatePresentationRequest,
  UpdatePresentationResponse} from './presentation_pb';

export class PresentationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getPresentation(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ActivePresentationResponse) => void
  ): grpcWeb.ClientReadableStream<ActivePresentationResponse>;

  upsertPresentation(
    request: UpdatePresentationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: UpdatePresentationResponse) => void
  ): grpcWeb.ClientReadableStream<UpdatePresentationResponse>;

  joinPresentation(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<PresentationUpdate>;

  getChatMessages(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ChatMessageResponse>;

  postChatMessage(
    request: ChatMessage,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PostChatMessageResponse) => void
  ): grpcWeb.ClientReadableStream<PostChatMessageResponse>;

}

export class PresentationPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getPresentation(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ActivePresentationResponse>;

  upsertPresentation(
    request: UpdatePresentationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<UpdatePresentationResponse>;

  joinPresentation(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<PresentationUpdate>;

  getChatMessages(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ChatMessageResponse>;

  postChatMessage(
    request: ChatMessage,
    metadata?: grpcWeb.Metadata
  ): Promise<PostChatMessageResponse>;

}

