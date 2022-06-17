import { LightningElement, track } from 'lwc';

export default class QuizzApplication extends LightningElement {
    isAnswer = false;
    Select = {}
   coorectAnsWEred = 0;
    Questions = [
        {
    ID: 1,
    Question: 'What is Salesforce',
 Answers:
    {
        a: "Web App",
        b: "WebSite",
        c: "CRM"
    },
    correctAns: "c" 
       },
       {
        ID: 2,
        Question: 'What is LWC',
     Answers:
        {
            a: "Classic",
            b: "Lightning",
            c: "Lightning Component"
        },
        correctAns: "c"
},
           {
       ID: 3,
            Question: 'Why we add Aura?',
         Answers:
            {
                a: "For Component",
                b: "for Designing",
                c: "for Standard Use"
            },
            correctAns:"a"
    
               }
     ]
     
     handler(event){
     //   console.log(event.target.name);
     //   console.log(event.target.value);
        const Name = event.target.name;
        const Value = event.target.value;
        this.Select = {...this.Select,[Name]:Value};
         console.log(this.Select);
     }
     get ScoreNumber(){
        return this.coorectAnsWEred;
     }
   

    submit(event){
        event.preventDefault();
        console.log("submit")
      
      //  console.log('select value'+this.Select[1]);
    // keyVal = Object.keys(this.Select)
    let correct = this.Questions.filter(item=>this.Select[item.ID] === item.correctAns)
       console.log('Correct Answer'+correct.length);
       this.coorectAnsWEred = correct.length;
       this.isAnswer = true;
      // console.log(Object.keys(this.Select));
    }
    ResetHandler(){
        console.log("rest");
        this.Select= {}
        this.coorectAnsWEred =0
        this.isAnswer = false;
    }
 
   get isShow(){
    console.log('Lennght' +Object.keys(this.Select))
    console.log(this.Questions.length);
    return !(Object.keys(this.Select).length === this.Questions.length);
   }
  get outOfQues(){
    return this.Questions.length;
  }
  get isScoreFull(){
    return `slds-text-heading_large ${this.Questions.length === this.coorectAnsWEred?
        'slds-text-color_success':'slds-text-color_error'}`
}
   
}

