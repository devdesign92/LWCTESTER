import Name from '@salesforce/schema/Account.Name';
import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {


title = "My home"
ChangeHandler(event){
    console.log("Get In Touch");
    this.title = event.target.value;
       
}
pro = {
    city:"Indore",
    country: "India",
    course: this.title
}

TrackObj(event){
    console.log(this.pro.city);
    this.pro ={...this.pro, "city":event.target.value};

}

num1 = 10;
num2 = 20;
arr = ["surya", "mohit", "rohit"];
get FirstName(){
    return this.arr[0].toUpperCase();
}
get result(){
    return this.num1+this.num2;
}

}