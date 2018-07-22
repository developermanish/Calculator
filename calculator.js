/* Made by - Manish kumar srivastava */
function runProgram(){

	var resultNum,theNum,oldNum,operator;
    theNum="";
    oldNum='';
    resultNum='';
    operator='';
    function getNum()
    {
        if (theNum==='')//It checks the condition whether string is empty or some numbers are present there 
        {
            theNum=this.getAttribute("data-num");
            document.querySelector(".calc-typed").textContent=theNum;
        }
        else
        {
            theNum+=this.getAttribute("data-num");//It takes the attribute from div tag having name as data-num
            document.querySelector(".calc-typed").textContent=theNum;
        }

        //console.log(theNum);
    }
    function getOperator()
    {
        theNum = parseFloat(theNum);//it changes the string into float
        operator=this.getAttribute("id");
        oldNum=theNum;
        theNum='';
        document.querySelector(".calc-operation").textContent=oldNum+operator;
        oldNum = parseFloat(oldNum);//it changes the string into float
        //console.log(oldNum);
        //console.log(operator);

    }
    function clearAll()
    {
        theNum="";
        oldNum='';
        resultNum='';
        operator='';
        document.querySelector(".calc-operation").textContent=oldNum+operator+theNum;
        document.querySelector(".calc-typed").textContent=0;
    }
    //Here is actual equal function made    
    function equals()
    {
        if(oldNum!==''&&theNum!==''&&operator!=='')
        {
            theNum = parseFloat(theNum);//it changes the string into float
             switch (operator) {
          case "+":
            resultNum = oldNum + theNum;
            break;

          case "-":
            resultNum = oldNum - theNum;
            break;

          case "*":
            resultNum = oldNum * theNum;
            break;

          case "/":
            resultNum = oldNum / theNum;
            break;
          case "%":
            resultNum = (oldNum*theNum)/100;
            break;

            // If equal is pressed without an operator, keep number and continue
          default:
            resultNum = theNum;
        }
        document.querySelector(".calc-operation").textContent=oldNum+operator+theNum;
        theNum='';
        oldNum='';
        operator='';
        document.querySelector(".calc-typed").textContent=resultNum;
        //console.log(resultNum);
        }
        else
        {
            document.querySelector(".calc-typed").style.fontSize='20px';
            document.querySelector(".calc-typed").textContent="You Broke It!";
        }
    }
    
    //Here is function of all the buttons from 0 to 9 including '.'
    
	var a0=document.querySelector('.button0');
	a0.addEventListener("click",getNum);

	var a1=document.querySelector('.button1');
	a1.addEventListener("click",getNum);

	var a2=document.querySelector('.button2');
	a2.addEventListener("click",getNum);

	var a3=document.querySelector('.button3');
	a3.addEventListener("click",getNum);

	var a4=document.querySelector('.button4');
	a4.addEventListener("click",getNum);

	var a5=document.querySelector('.button5');
	a5.addEventListener("click",getNum);

	var a6=document.querySelector('.button6');
	a6.addEventListener("click",getNum);

	var a7=document.querySelector('.button7');
	a7.addEventListener("click",getNum);

	var a8=document.querySelector('.button8');
	a8.addEventListener("click",getNum);

	var a9=document.querySelector('.button9');
	a9.addEventListener("click",getNum);

	var a10=document.querySelector('.button_dot');
	a10.addEventListener("click",getNum);

//Here is functionality of all the operators
    
	var b1=document.querySelector('.button_per');
	b1.addEventListener("click",getOperator);

	var b2=document.querySelector('.button_div');
	b2.addEventListener("click",getOperator);

	var b3=document.querySelector('.button_mul');
	b3.addEventListener("click",getOperator);

	var b4=document.querySelector('.button_min');
	b4.addEventListener("click",getOperator);

	var b5=document.querySelector('.button_plu');
	b5.addEventListener("click",getOperator);

    
//Here I put the functionality of equals button
    
	var c=document.querySelector('.equals');
	c.addEventListener("click",equals);
    
//Here I put the functionality of clear all button
	
    var d=document.querySelector('.button_c');
	d.addEventListener("click",clearAll);

 /* var setNum = function() {
    if (resultNum) { // If a result was displayed, reset number
      theNum = this.getAttribute("id");
      resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
      theNum += this.getAttribute("id");
    }

    viewer.innerHTML = theNum; // Display current number

  };*/

}  
;
runProgram();