export * from './presentation_pb';
export * from './presentation_grpc_web_pb';
export { Empty } from 'google-protobuf/google/protobuf/empty_pb';

export function WithDeadline(timeoutSeconds: number, existingHeaders?: any): any {
    var deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + timeoutSeconds);

    if (existingHeaders) {
        existingHeaders.deadline = deadline.getTime();
        return existingHeaders
    }
    return {
        deadline: deadline.getTime(),
    };
}