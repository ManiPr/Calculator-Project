 const $=document
 const calculatorOutput=$.querySelector('.calculator__output')
 const calculatorKeyEnter=$.querySelector('.calculator__key--enter')
 const calculatorValue=$.querySelectorAll('.calculator__key')
 const result=$.querySelector('.result')
 calculatorValue.forEach(key=>{
    key.addEventListener('click',()=>{
      if(calculatorOutput.value.length>=8){
        result.innerHTML='تعداد اعداد بیشتر از حد نصاب است'
        if(key.value=='AC'){
          key.addEventListener('click',()=>{
            result.innerHTML=''
            calculatorOutput.value=''
          })
        
        }
        else{
          key.removeEventListener('click',()=>{})
        }
      
      }
       else if(key.value=='AC'){
            calculatorOutput.value=''
        }
        else{
          console.log(key.dataset.val);
            calculatorOutput.value +=key.dataset.val
        }
    })
 })


 calculatorKeyEnter.addEventListener("click", () => {
      try {
        let inp_val = calculatorOutput.value;
          
        let solution = eval(inp_val);

        if (Number.isInteger(solution)) {
          calculatorOutput.value = solution;
          result.innerHTML=''
        } else {
          calculatorOutput.value = solution.toFixed(2);
          result.innerHTML=''
        }
      } catch (error) {
        result.innerHTML='مقدار وارد شده صحیح نمیباشد'
      }
           
        });
 

 window.onload = () => {
    calculatorOutput.value = '';
  };
  window.addEventListener('keydown',(event)=>{
    if(event.key==='Backspace'){
      calculatorOutput.value = calculatorOutput.value.substring(0, calculatorOutput.value.length - 1);
      if(calculatorOutput.value.length==0){
        result.innerHTML=''
      }
    }
  })