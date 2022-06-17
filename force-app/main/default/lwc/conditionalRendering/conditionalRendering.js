
import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    name;
    
    isValid = false;

    handleClick(){
        console.log("BUTTON click");
        this.isValid = true;
        console.log(this.isValid);
    }

    handle(event){
       this.name = event.target.value;
       
   
    }
    get expression(){
    
   return this.name === "HELLO"
    }

}