import { WebSocket } from "ws";

export class Game{
    public player1: WebSocket;
    public player2: WebSocket;
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

    makeMove(socket: WebSocket, move: String){
        //validate move
        //is it this users Move
        //is the move valid



        //then
        //update the board
        //push the move
        

        //check if the game is over

        //send the updated board to both the users
    }
}