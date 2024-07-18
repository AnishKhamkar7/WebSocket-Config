import { WebSocket } from "ws";

export class Game{
    private player1: WebSocket;
    private player2: WebSocket;
    private board: String;
    private moves: String[];
    private StartTime: Date;


    constructor(player1: WebSocket, player2: WebSocket){
        this.player1 = player1;
        this.player2 = player2;
        this.board ="";
        this.moves = [];
        this.StartTime = new Date();
    }
}