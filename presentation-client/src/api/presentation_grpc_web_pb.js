/**
 * @fileoverview gRPC-Web generated client stub for presentation
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.presentation = require('./presentation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.presentation.PresentationClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.presentation.PresentationPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.presentation.ActivePresentationResponse>}
 */
const methodDescriptor_Presentation_GetPresentation = new grpc.web.MethodDescriptor(
  '/presentation.Presentation/GetPresentation',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.presentation.ActivePresentationResponse,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.ActivePresentationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.presentation.ActivePresentationResponse>}
 */
const methodInfo_Presentation_GetPresentation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.presentation.ActivePresentationResponse,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.ActivePresentationResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.presentation.ActivePresentationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.presentation.ActivePresentationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.presentation.PresentationClient.prototype.getPresentation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/presentation.Presentation/GetPresentation',
      request,
      metadata || {},
      methodDescriptor_Presentation_GetPresentation,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.presentation.ActivePresentationResponse>}
 *     A native promise that resolves to the response
 */
proto.presentation.PresentationPromiseClient.prototype.getPresentation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/presentation.Presentation/GetPresentation',
      request,
      metadata || {},
      methodDescriptor_Presentation_GetPresentation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.presentation.UpdatePresentationRequest,
 *   !proto.presentation.UpdatePresentationResponse>}
 */
const methodDescriptor_Presentation_UpsertPresentation = new grpc.web.MethodDescriptor(
  '/presentation.Presentation/UpsertPresentation',
  grpc.web.MethodType.UNARY,
  proto.presentation.UpdatePresentationRequest,
  proto.presentation.UpdatePresentationResponse,
  /** @param {!proto.presentation.UpdatePresentationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.UpdatePresentationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.presentation.UpdatePresentationRequest,
 *   !proto.presentation.UpdatePresentationResponse>}
 */
const methodInfo_Presentation_UpsertPresentation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.presentation.UpdatePresentationResponse,
  /** @param {!proto.presentation.UpdatePresentationRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.UpdatePresentationResponse.deserializeBinary
);


/**
 * @param {!proto.presentation.UpdatePresentationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.presentation.UpdatePresentationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.presentation.UpdatePresentationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.presentation.PresentationClient.prototype.upsertPresentation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/presentation.Presentation/UpsertPresentation',
      request,
      metadata || {},
      methodDescriptor_Presentation_UpsertPresentation,
      callback);
};


/**
 * @param {!proto.presentation.UpdatePresentationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.presentation.UpdatePresentationResponse>}
 *     A native promise that resolves to the response
 */
proto.presentation.PresentationPromiseClient.prototype.upsertPresentation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/presentation.Presentation/UpsertPresentation',
      request,
      metadata || {},
      methodDescriptor_Presentation_UpsertPresentation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.presentation.PresentationUpdate>}
 */
const methodDescriptor_Presentation_JoinPresentation = new grpc.web.MethodDescriptor(
  '/presentation.Presentation/JoinPresentation',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.presentation.PresentationUpdate,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.PresentationUpdate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.presentation.PresentationUpdate>}
 */
const methodInfo_Presentation_JoinPresentation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.presentation.PresentationUpdate,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.PresentationUpdate.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.presentation.PresentationUpdate>}
 *     The XHR Node Readable Stream
 */
proto.presentation.PresentationClient.prototype.joinPresentation =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/presentation.Presentation/JoinPresentation',
      request,
      metadata || {},
      methodDescriptor_Presentation_JoinPresentation);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.presentation.PresentationUpdate>}
 *     The XHR Node Readable Stream
 */
proto.presentation.PresentationPromiseClient.prototype.joinPresentation =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/presentation.Presentation/JoinPresentation',
      request,
      metadata || {},
      methodDescriptor_Presentation_JoinPresentation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.presentation.ChatMessageResponse>}
 */
const methodDescriptor_Presentation_GetChatMessages = new grpc.web.MethodDescriptor(
  '/presentation.Presentation/GetChatMessages',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.presentation.ChatMessageResponse,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.ChatMessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.presentation.ChatMessageResponse>}
 */
const methodInfo_Presentation_GetChatMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.presentation.ChatMessageResponse,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.ChatMessageResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.presentation.ChatMessageResponse>}
 *     The XHR Node Readable Stream
 */
proto.presentation.PresentationClient.prototype.getChatMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/presentation.Presentation/GetChatMessages',
      request,
      metadata || {},
      methodDescriptor_Presentation_GetChatMessages);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.presentation.ChatMessageResponse>}
 *     The XHR Node Readable Stream
 */
proto.presentation.PresentationPromiseClient.prototype.getChatMessages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/presentation.Presentation/GetChatMessages',
      request,
      metadata || {},
      methodDescriptor_Presentation_GetChatMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.presentation.ChatMessage,
 *   !proto.presentation.PostChatMessageResponse>}
 */
const methodDescriptor_Presentation_PostChatMessage = new grpc.web.MethodDescriptor(
  '/presentation.Presentation/PostChatMessage',
  grpc.web.MethodType.UNARY,
  proto.presentation.ChatMessage,
  proto.presentation.PostChatMessageResponse,
  /** @param {!proto.presentation.ChatMessage} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.PostChatMessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.presentation.ChatMessage,
 *   !proto.presentation.PostChatMessageResponse>}
 */
const methodInfo_Presentation_PostChatMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.presentation.PostChatMessageResponse,
  /** @param {!proto.presentation.ChatMessage} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.presentation.PostChatMessageResponse.deserializeBinary
);


/**
 * @param {!proto.presentation.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.presentation.PostChatMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.presentation.PostChatMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.presentation.PresentationClient.prototype.postChatMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/presentation.Presentation/PostChatMessage',
      request,
      metadata || {},
      methodDescriptor_Presentation_PostChatMessage,
      callback);
};


/**
 * @param {!proto.presentation.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.presentation.PostChatMessageResponse>}
 *     A native promise that resolves to the response
 */
proto.presentation.PresentationPromiseClient.prototype.postChatMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/presentation.Presentation/PostChatMessage',
      request,
      metadata || {},
      methodDescriptor_Presentation_PostChatMessage);
};


module.exports = proto.presentation;

