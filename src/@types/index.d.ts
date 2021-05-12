/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
export {};
declare global {
  namespace jest {
    interface MockInstance {
      mockResolve(data: any): void;
      mockReject(error: any): void;
    }
  }
}
