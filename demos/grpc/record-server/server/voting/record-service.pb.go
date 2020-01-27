// Code generated by protoc-gen-go. DO NOT EDIT.
// source: record-service.proto

package voting

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	empty "github.com/golang/protobuf/ptypes/empty"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type VotingRecord struct {
	Id                   string   `protobuf:"bytes,1,opt,name=Id,proto3" json:"Id,omitempty"`
	Sequence             int64    `protobuf:"varint,2,opt,name=Sequence,proto3" json:"Sequence,omitempty"`
	Vote                 *Vote    `protobuf:"bytes,3,opt,name=Vote,proto3" json:"Vote,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *VotingRecord) Reset()         { *m = VotingRecord{} }
func (m *VotingRecord) String() string { return proto.CompactTextString(m) }
func (*VotingRecord) ProtoMessage()    {}
func (*VotingRecord) Descriptor() ([]byte, []int) {
	return fileDescriptor_b70d781b7bef2b00, []int{0}
}

func (m *VotingRecord) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VotingRecord.Unmarshal(m, b)
}
func (m *VotingRecord) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VotingRecord.Marshal(b, m, deterministic)
}
func (m *VotingRecord) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VotingRecord.Merge(m, src)
}
func (m *VotingRecord) XXX_Size() int {
	return xxx_messageInfo_VotingRecord.Size(m)
}
func (m *VotingRecord) XXX_DiscardUnknown() {
	xxx_messageInfo_VotingRecord.DiscardUnknown(m)
}

var xxx_messageInfo_VotingRecord proto.InternalMessageInfo

func (m *VotingRecord) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *VotingRecord) GetSequence() int64 {
	if m != nil {
		return m.Sequence
	}
	return 0
}

func (m *VotingRecord) GetVote() *Vote {
	if m != nil {
		return m.Vote
	}
	return nil
}

type GetPollsResponse struct {
	Error                bool     `protobuf:"varint,1,opt,name=Error,proto3" json:"Error,omitempty"`
	Polls                []*Poll  `protobuf:"bytes,2,rep,name=Polls,proto3" json:"Polls,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetPollsResponse) Reset()         { *m = GetPollsResponse{} }
func (m *GetPollsResponse) String() string { return proto.CompactTextString(m) }
func (*GetPollsResponse) ProtoMessage()    {}
func (*GetPollsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_b70d781b7bef2b00, []int{1}
}

func (m *GetPollsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetPollsResponse.Unmarshal(m, b)
}
func (m *GetPollsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetPollsResponse.Marshal(b, m, deterministic)
}
func (m *GetPollsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetPollsResponse.Merge(m, src)
}
func (m *GetPollsResponse) XXX_Size() int {
	return xxx_messageInfo_GetPollsResponse.Size(m)
}
func (m *GetPollsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetPollsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetPollsResponse proto.InternalMessageInfo

func (m *GetPollsResponse) GetError() bool {
	if m != nil {
		return m.Error
	}
	return false
}

func (m *GetPollsResponse) GetPolls() []*Poll {
	if m != nil {
		return m.Polls
	}
	return nil
}

type RecordVoteResponse struct {
	Error                bool     `protobuf:"varint,1,opt,name=Error,proto3" json:"Error,omitempty"`
	ErrorMessage         string   `protobuf:"bytes,2,opt,name=ErrorMessage,proto3" json:"ErrorMessage,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RecordVoteResponse) Reset()         { *m = RecordVoteResponse{} }
func (m *RecordVoteResponse) String() string { return proto.CompactTextString(m) }
func (*RecordVoteResponse) ProtoMessage()    {}
func (*RecordVoteResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_b70d781b7bef2b00, []int{2}
}

func (m *RecordVoteResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RecordVoteResponse.Unmarshal(m, b)
}
func (m *RecordVoteResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RecordVoteResponse.Marshal(b, m, deterministic)
}
func (m *RecordVoteResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RecordVoteResponse.Merge(m, src)
}
func (m *RecordVoteResponse) XXX_Size() int {
	return xxx_messageInfo_RecordVoteResponse.Size(m)
}
func (m *RecordVoteResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_RecordVoteResponse.DiscardUnknown(m)
}

var xxx_messageInfo_RecordVoteResponse proto.InternalMessageInfo

func (m *RecordVoteResponse) GetError() bool {
	if m != nil {
		return m.Error
	}
	return false
}

func (m *RecordVoteResponse) GetErrorMessage() string {
	if m != nil {
		return m.ErrorMessage
	}
	return ""
}

type StreamRecordsRequest struct {
	StartSequence        int64    `protobuf:"varint,1,opt,name=StartSequence,proto3" json:"StartSequence,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *StreamRecordsRequest) Reset()         { *m = StreamRecordsRequest{} }
func (m *StreamRecordsRequest) String() string { return proto.CompactTextString(m) }
func (*StreamRecordsRequest) ProtoMessage()    {}
func (*StreamRecordsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_b70d781b7bef2b00, []int{3}
}

func (m *StreamRecordsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StreamRecordsRequest.Unmarshal(m, b)
}
func (m *StreamRecordsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StreamRecordsRequest.Marshal(b, m, deterministic)
}
func (m *StreamRecordsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StreamRecordsRequest.Merge(m, src)
}
func (m *StreamRecordsRequest) XXX_Size() int {
	return xxx_messageInfo_StreamRecordsRequest.Size(m)
}
func (m *StreamRecordsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_StreamRecordsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_StreamRecordsRequest proto.InternalMessageInfo

func (m *StreamRecordsRequest) GetStartSequence() int64 {
	if m != nil {
		return m.StartSequence
	}
	return 0
}

func init() {
	proto.RegisterType((*VotingRecord)(nil), "voting.record.VotingRecord")
	proto.RegisterType((*GetPollsResponse)(nil), "voting.record.GetPollsResponse")
	proto.RegisterType((*RecordVoteResponse)(nil), "voting.record.RecordVoteResponse")
	proto.RegisterType((*StreamRecordsRequest)(nil), "voting.record.StreamRecordsRequest")
}

func init() { proto.RegisterFile("record-service.proto", fileDescriptor_b70d781b7bef2b00) }

var fileDescriptor_b70d781b7bef2b00 = []byte{
	// 348 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x52, 0x41, 0x4f, 0xf2, 0x40,
	0x14, 0xcc, 0x96, 0x0f, 0x52, 0xde, 0x07, 0x86, 0xac, 0xc4, 0x34, 0xe5, 0x60, 0xad, 0x26, 0xe2,
	0xc1, 0xc5, 0xe0, 0xd5, 0x93, 0x4a, 0x0c, 0x07, 0x8d, 0xd9, 0x26, 0x1c, 0xbc, 0x41, 0xfb, 0x6c,
	0x48, 0x4a, 0x17, 0x77, 0x17, 0x12, 0xff, 0xb6, 0xbf, 0xc0, 0x74, 0x17, 0x10, 0x6a, 0xe3, 0xad,
	0x6f, 0x67, 0xde, 0xec, 0xce, 0x4c, 0xa1, 0x2b, 0x31, 0x16, 0x32, 0xb9, 0x56, 0x28, 0xd7, 0xf3,
	0x18, 0xd9, 0x52, 0x0a, 0x2d, 0x68, 0x7b, 0x2d, 0xf4, 0x3c, 0x4f, 0x99, 0x05, 0xfd, 0x5e, 0x2a,
	0x44, 0x9a, 0xe1, 0xc0, 0x80, 0xb3, 0xd5, 0xfb, 0x00, 0x17, 0x4b, 0xfd, 0x69, 0xb9, 0x7e, 0x6b,
	0x21, 0x12, 0xcc, 0x94, 0x9d, 0xc2, 0x18, 0x5a, 0x13, 0xb3, 0xcb, 0xcd, 0x2a, 0x3d, 0x02, 0x67,
	0x9c, 0x78, 0x24, 0x20, 0xfd, 0x26, 0x77, 0xc6, 0x09, 0xf5, 0xc1, 0x8d, 0xf0, 0x63, 0x85, 0x79,
	0x8c, 0x9e, 0x13, 0x90, 0x7e, 0x8d, 0xef, 0x66, 0x7a, 0x09, 0xff, 0x26, 0x42, 0xa3, 0x57, 0x0b,
	0x48, 0xff, 0xff, 0xf0, 0x98, 0x6d, 0x1e, 0xb1, 0xd1, 0x2f, 0x20, 0x6e, 0x08, 0x61, 0x04, 0x9d,
	0x27, 0xd4, 0xaf, 0x22, 0xcb, 0x14, 0x47, 0xb5, 0x14, 0xb9, 0x42, 0xda, 0x85, 0xfa, 0x48, 0x4a,
	0x21, 0xcd, 0x5d, 0x2e, 0xb7, 0x03, 0xbd, 0x82, 0xba, 0xa1, 0x79, 0x4e, 0x50, 0xab, 0xd0, 0x2c,
	0x30, 0x6e, 0x19, 0xe1, 0x0b, 0x50, 0xfb, 0x66, 0x73, 0xd1, 0xdf, 0xb2, 0x21, 0xb4, 0xcc, 0xc7,
	0x33, 0x2a, 0x35, 0x4d, 0xad, 0x93, 0x26, 0x3f, 0x38, 0x0b, 0xef, 0xa0, 0x1b, 0x69, 0x89, 0xd3,
	0x85, 0x55, 0x55, 0xbc, 0xb0, 0xa9, 0x34, 0xbd, 0x80, 0x76, 0xa4, 0xa7, 0x52, 0xef, 0x62, 0x20,
	0x26, 0x86, 0xc3, 0xc3, 0xe1, 0x17, 0x81, 0x8e, 0x5d, 0x9c, 0xe7, 0x69, 0x64, 0xcb, 0xa1, 0x0f,
	0xe0, 0x6e, 0x7d, 0xd3, 0x13, 0x66, 0x4b, 0x61, 0xdb, 0x52, 0xd8, 0xa8, 0x28, 0xc5, 0x3f, 0x65,
	0x07, 0xdd, 0xb1, 0x5f, 0x41, 0x3d, 0x02, 0xfc, 0xf8, 0xa4, 0x55, 0x29, 0xfb, 0x67, 0x25, 0x8d,
	0x8a, 0x5c, 0xa2, 0xc2, 0xc5, 0x9e, 0x3b, 0x7a, 0x5e, 0xda, 0xa9, 0xf2, 0xee, 0xf7, 0x4a, 0xa4,
	0xfd, 0x5f, 0xe5, 0x86, 0xdc, 0xbb, 0x6f, 0x0d, 0x8b, 0xcf, 0x1a, 0xc6, 0xd5, 0xed, 0x77, 0x00,
	0x00, 0x00, 0xff, 0xff, 0x99, 0xd8, 0x98, 0xab, 0x9f, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// RecordingServiceClient is the client API for RecordingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type RecordingServiceClient interface {
	GetPolls(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*GetPollsResponse, error)
	RecordVote(ctx context.Context, in *Vote, opts ...grpc.CallOption) (*RecordVoteResponse, error)
	StreamRecords(ctx context.Context, in *StreamRecordsRequest, opts ...grpc.CallOption) (RecordingService_StreamRecordsClient, error)
}

type recordingServiceClient struct {
	cc *grpc.ClientConn
}

func NewRecordingServiceClient(cc *grpc.ClientConn) RecordingServiceClient {
	return &recordingServiceClient{cc}
}

func (c *recordingServiceClient) GetPolls(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*GetPollsResponse, error) {
	out := new(GetPollsResponse)
	err := c.cc.Invoke(ctx, "/voting.record.RecordingService/GetPolls", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recordingServiceClient) RecordVote(ctx context.Context, in *Vote, opts ...grpc.CallOption) (*RecordVoteResponse, error) {
	out := new(RecordVoteResponse)
	err := c.cc.Invoke(ctx, "/voting.record.RecordingService/RecordVote", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *recordingServiceClient) StreamRecords(ctx context.Context, in *StreamRecordsRequest, opts ...grpc.CallOption) (RecordingService_StreamRecordsClient, error) {
	stream, err := c.cc.NewStream(ctx, &_RecordingService_serviceDesc.Streams[0], "/voting.record.RecordingService/StreamRecords", opts...)
	if err != nil {
		return nil, err
	}
	x := &recordingServiceStreamRecordsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type RecordingService_StreamRecordsClient interface {
	Recv() (*VotingRecord, error)
	grpc.ClientStream
}

type recordingServiceStreamRecordsClient struct {
	grpc.ClientStream
}

func (x *recordingServiceStreamRecordsClient) Recv() (*VotingRecord, error) {
	m := new(VotingRecord)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// RecordingServiceServer is the server API for RecordingService service.
type RecordingServiceServer interface {
	GetPolls(context.Context, *empty.Empty) (*GetPollsResponse, error)
	RecordVote(context.Context, *Vote) (*RecordVoteResponse, error)
	StreamRecords(*StreamRecordsRequest, RecordingService_StreamRecordsServer) error
}

// UnimplementedRecordingServiceServer can be embedded to have forward compatible implementations.
type UnimplementedRecordingServiceServer struct {
}

func (*UnimplementedRecordingServiceServer) GetPolls(ctx context.Context, req *empty.Empty) (*GetPollsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPolls not implemented")
}
func (*UnimplementedRecordingServiceServer) RecordVote(ctx context.Context, req *Vote) (*RecordVoteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RecordVote not implemented")
}
func (*UnimplementedRecordingServiceServer) StreamRecords(req *StreamRecordsRequest, srv RecordingService_StreamRecordsServer) error {
	return status.Errorf(codes.Unimplemented, "method StreamRecords not implemented")
}

func RegisterRecordingServiceServer(s *grpc.Server, srv RecordingServiceServer) {
	s.RegisterService(&_RecordingService_serviceDesc, srv)
}

func _RecordingService_GetPolls_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecordingServiceServer).GetPolls(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/voting.record.RecordingService/GetPolls",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecordingServiceServer).GetPolls(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecordingService_RecordVote_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Vote)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RecordingServiceServer).RecordVote(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/voting.record.RecordingService/RecordVote",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RecordingServiceServer).RecordVote(ctx, req.(*Vote))
	}
	return interceptor(ctx, in, info, handler)
}

func _RecordingService_StreamRecords_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(StreamRecordsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(RecordingServiceServer).StreamRecords(m, &recordingServiceStreamRecordsServer{stream})
}

type RecordingService_StreamRecordsServer interface {
	Send(*VotingRecord) error
	grpc.ServerStream
}

type recordingServiceStreamRecordsServer struct {
	grpc.ServerStream
}

func (x *recordingServiceStreamRecordsServer) Send(m *VotingRecord) error {
	return x.ServerStream.SendMsg(m)
}

var _RecordingService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "voting.record.RecordingService",
	HandlerType: (*RecordingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetPolls",
			Handler:    _RecordingService_GetPolls_Handler,
		},
		{
			MethodName: "RecordVote",
			Handler:    _RecordingService_RecordVote_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "StreamRecords",
			Handler:       _RecordingService_StreamRecords_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "record-service.proto",
}
