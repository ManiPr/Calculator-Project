// const answer=document.getElementById("answer")
// var queue = [];
// var input = 0;

// const numericButton=(arg)=>{
//     if ( answer.innerHTML ===  "ERROR" || (document.getElementById("answer").innerHTML == "0" && arg != "."))
//     {
//         answer.innerHTML = ""; 
//     }

//     if (!(arg === ".") || !input.match(/[.]/)) 
//     {
//         input += arg;
//         answer.innerHTML += arg;
//     }   
// }
// const operatorButton=(arg)=>{
//     if (input !== 0 && input !== "-") 
//     {
//         input = parseFloat(input);
//         addToQueue(input);
//         addToQueue(arg);
//         answer.innerHTML +=arg;
//         input = 0;
//     }
//     if (arg == "-"  && isNaN(queue[0]) && input !== "-")
//     {
//       input ="-";
//       answer.innerHTML = "-";
//     }
// }
// const addToQueue=(input)=>{
//     queue.push(input);
// }





//  calculatorValue.forEach(values=>{
//      values.addEventListener('click',()=>{
//          let calculateValue=values.innerHTML
//          if(calculateValue==='AC'){
//              calculatorOutput.value=''
//          }
//          else if(calculatorOutput.value.indexOf('.')==calculatorOutput.innerHTML.lastIndexOf('.'))
//          {
//             console.log(values.innerHTML);     
//             let calculaotrvalue= calculatorOutput.value +=values.innerHTML  
//             let d=calculaotrvalue       
//             console.log(typeof(calculaotrvalue));   
//             console.log(eval(d));                 
//          }
//          else{
//              alert('نمیتوان بیشتر از این از نقطه استفاده کرد')
//              calculatorOutput.innerHTML=''
//          }       
//          })
//  })







 const $=document
 const calculatorOutput=$.querySelector('.calculator__output')
 const calculatorKeyEnter=$.querySelector('.calculator__key--enter')
 const calculatorValue=$.querySelectorAll('.calculator__key')
 calculatorValue.forEach(key=>{
    key.addEventListener('click',()=>{
        if(key.value=='AC'){
            calculatorOutput.value=''
        }
        else{
            calculatorOutput.value +=key.value
        }
    })
 })


 calculatorKeyEnter.addEventListener("click", () => {
            let inp_val = calculatorOutput.value;
            let solution = eval(inp_val);
            console.log(solution);
            if (Number.isInteger(solution)) {
              calculatorOutput.value = solution;
              console.log(solution);
            } else {
                console.log(solution.toFixed(2));
              calculatorOutput.value = solution.toFixed(2);
            }
        });
 
 window.onload = () => {
    calculatorOutput.value = '';
  };
  