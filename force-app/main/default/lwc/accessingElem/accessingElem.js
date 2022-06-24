import { LightningElement } from 'lwc';

export default class AccessingElem extends LightningElement {
 UserName = ["Mohit", "Shainky", "Sunny", "Raghav"];
fetchClick(){
        console.log('Enter in function')
         const  heading = this.template.querySelector('h1');
        console.log(heading);   
        heading.style.border="1px solid red";
         const elem =  this.template.querySelectorAll('.Name');
         Array.from(elem).forEach(ItemName => {
            console.log(ItemName.innerText);
            ItemName.setAttribute("title", ItemName.innerText);
         const ChildElem = this.template.querySelector('.Child');
         ChildElem.innerHTML = '<p>Hey This is Child</p>'   
         

         });
         
    }

}