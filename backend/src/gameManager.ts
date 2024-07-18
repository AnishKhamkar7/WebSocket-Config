import { WebSocket } from "ws";
import { INIT_GAME } from "./messages";


export class GameManager{
    private games: Game[];
    private pendingUser: WebSocket;
    private users: WebSocket[];
    constructor(){
        this.games = []
    }

    addUser(socket: WebSocket){ 
        this.users.push(socket)
        this.addHandler(socket)

    }

    removeUser(socket: WebSocket){
        this.users.filter(user => user !== socket);
        //stop the game here because the user left

    }

    private addHandler(socket: WebSocket){
        socket.on('message',(data)=>{
            //you can add grpc in this ection 
            const message = JSON.parse(data.toString());
            if(message.type == INIT_GAME){
                if(this.pendingUser){
                    //start the game
                }
            }
        })
    }
}