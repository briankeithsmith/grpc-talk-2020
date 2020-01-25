import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  ActivePresentationResponse,
  ChatMessage,
  ChatMessageResponse,
  PostChatMessageResponse,
  PresentationUpdate,
  StartPresentationRequest,
  StartPresentationResponse} from './presentation_pb';

export class PresentationClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  activePresentation(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: ActivePresentationResponse) => void
  ): grpcWeb.ClientReadableStream<ActivePresentationResponse>;

  startPresentation(
    request: StartPresentationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: StartPresentationResponse) => void
  ): grpcWeb.ClientReadableStream<StartPresentationResponse>;

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

  activePresentation(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ActivePresentationResponse>;

  startPresentation(
    request: StartPresentationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<StartPresentationResponse>;

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

