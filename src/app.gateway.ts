import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
 } from '@nestjs/websockets';
 import { Logger } from '@nestjs/common';
 import { Socket, Server } from 'socket.io';
 
//  @WebSocketGateway(3100)
//  export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
 
//   @WebSocketServer() server: Server;
//   private logger: Logger = new Logger('AppGateway');
 
//   @SubscribeMessage('msgToServer')
//   handleMessage(client: Socket, payload: string): void {
//    this.server.emit('msgToClient', payload);
//   }
 
//   afterInit(server: Server) {
//    this.logger.log('Init');
//   }
 
//   handleDisconnect(client: Socket) {
//    this.logger.log(`Client disconnected: ${client.id}`);
//   }
 
//   handleConnection(client: Socket, ...args: any[]) {
//    this.logger.log(`Client connected: ${client.id}`);
//   }
//  }


@WebSocketGateway(3001)
export class AppGateway implements OnGatewayInit {
  private logger: Logger = new Logger("AppGateway");

  afterInit(server: any) {
    // throw new Error('Method not implemented.'); - comment this
    this.logger.log("Initialized");
  }
  // export class AppGateway {
  @SubscribeMessage("message")
  handleMessage(client: any, payload: any): string {
    return "Hello world!";
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
   }

   handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
   }

}