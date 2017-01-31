// JS Calculator
// Introduction
//
// Now that you have learned JavaScript syntax and been given an introduction to how JavaScript is used in the browser,
// it is time to apply your skills and get some experience using 'vanilla' JavaScript to create a user interface.
//
// Overview
//
// You will create a calculator with JavaScript. Your calculator should be added to the DOM on page load entirely with
// JavaScript (you shouldn't type any HTML to represent your calculator ** you can create a container div if you wish **).
//
// Grading
//
// As usual this is going to be a pass fail assignment. If your program meets all the listed requirements, you will receive
// a 1 on the assignment. If you fail to do so, you will receive a 0 and have until the following Monday to complete the program
// for .5 credit.
//
// Minimum Requirements
//
// [ ]: The calculator has a screen which displays numbers input by the user, or a summed total based on mathematical operations
//
// [ ]: The calculator has buttons (0-9, +, -, /, *, ., =, C)
//
// [ ]: The calculator can perform the following operations (i.e. is a working calculator:
//
// addition
// subtraction
// division
// multiplication
// [ ]: The 'C' button clears the running total/entered value (works like a clear button).
//
// [ ]: = returns the sum of the current operation
//
// [ ]: All calculator buttons are assigned click events which result in some action being performed
// (be it updating the displayed value, or performing math)
//
// Stretch Goals
//
// [ ]: Handles decimals
//
// [ ]: Users can enter values/perform math with keyboard input (keypress)
var firstNum;
var secondNum = 0;
var runningNumber = 0;
var calcFunc;
var lastKey;

$('#main-screen').text("");
$('#mini-screen').text("");

var clearScreen = function(x){
  runningNumber = 0;
  $('#mini-screen').text("");
  $('#main-screen').text("");
}

var continuation = function(){
  if(lastKey === "add"){
    $('#mini-screen').text(runningNumber + " " + "+");
    $('#main-screen').text("");
  } else if(lastKey === "subtract"){
    $('#mini-screen').text(runningNumber + " " + "-");
    $('#main-screen').text("");
  }else if(lastKey === "multiply"){
    $('#mini-screen').text(runningNumber + " " + "×");
    $('#main-screen').text("");
  }else if(lastKey === "divide"){
    $('#mini-screen').text(runningNumber + " " + "÷");
    $('#main-screen').text("");
  }
}

$('#zero').click(function(e){
  continuation();
  if($('#main-screen').text().length!=0 && screenLength() < 10){
    $('#main-screen').append(0);
  }
  lastKey = "zero";
});

$('#one').click(function(e){
  continuation();
  if(screenLength() < 10){
    $('#main-screen').append(1);
  }
  lastKey = "one";
});

$('#two').click(function(e){
  continuation();
  if(screenLength() < 10){
    $('#main-screen').append(2);
  }
  lastKey = "two";
});

$('#three').click(function(e){
  continuation();
  if(screenLength() < 10){
    $('#main-screen').append(3);
  }
  lastKey = "three";
});

$('#four').click(function(e){
  continuation();
  if(screenLength() < 10){
    $('#main-screen').append(4);
  }
  lastKey = "four";
});

$('#five').click(function(e){
  continuation();
  if(screenLength() < 10){
    $('#main-screen').append(5);
  }
  lastKey = "five";
});

$('#six').click(function(e){
  continuation();
  if(screenLength() < 10){
    $('#main-screen').append(6);
  }
  lastKey = "six";
});

$('#seven').click(function(e){
  continuation();
  if(screenLength() < 10){
    $('#main-screen').append(7);
  }
  lastKey = "seven";
});

$('#eight').click(function(e){
  continuation();
  if(screenLength() < 10){
    $('#main-screen').append(8);
  }
  lastKey = "eight";
});

$('#nine').click(function(e){
  continuation();
  if(screenLength() < 10){
    $('#main-screen').append(9);
  }
  lastKey = "nine";
});

$('#decimal').click(function(e){
  if(lastKey === "add" || lastKey === "subtract" || lastKey === "divide" || lastKey === "multiply"){
    runningNumber = $('#main-screen').text();
    $('#main-screen').text("");
  }
  if(screenLength() < 10 && !($('#main-screen').text().indexOf(".") >= 0)){
    $('#main-screen').append(".");
  }
  lastKey = "decimal";
});

$('#clear').click(function(e){
  clearScreen();
  lastKey = "clear";
  calcFunc = "clear";
});

$('#plusMinus').click(function(e){
  if(screenLength() > 0){
    if(document.getElementById('main-screen').textContent.charAt(0)!="-"){
      $('#main-screen').prepend("-");
    } else{
      var screenText = document.getElementById('main-screen');
      screenText.textContent = screenText.textContent.slice(1, screenText.length);
    }
  }
  lastKey = "plusMinus";
});


var completion = function(){
  if(calcFunc === "add"){
    runningNumber = runningNumber + parseFloat($('#main-screen').text());
  } else if(calcFunc === "subtract"){
    runningNumber = runningNumber - parseFloat($('#main-screen').text());
  }else if(calcFunc === "multiply"){
    runningNumber = runningNumber * parseFloat($('#main-screen').text());
  }else if(calcFunc === "divide"){
    runningNumber = runningNumber / parseFloat($('#main-screen').text());
  }
  $('#main-screen').text("");
}

$('#add').click(function(e){
  sum();
});

$('#subtract').click(function(e){
  difference();
});

$('#divide').click(function(e){
  quotient();
});

$('#multiply').click(function(e){
  product();
});

$('#percent').click(function(e){
  percent();
  calcFunc = "percent";
  lastKey = "percent";
});

$('#equals').click(function(e){
  equals();
});

var equals = function(){
  if(calcFunc === "add"){
    sum();
  }else if(calcFunc === "subtract"){
    difference();
  }else if(calcFunc === "divide"){
    quotient();
  }else if(calcFunc === "multiply"){
    product();
  }
  runningNumber =0;
  firstNum = 0;
  secondNum = 0;
  lastKey = "equals";
  calcFunc = "equals";
}


var sum = function(){
  if (lastKey === "add"){
    secondNum = firstNum;
    $('#mini-screen').text(runningNumber + " " + "+" + " " + secondNum);
    runningNumber = parseFloat(runningNumber) + parseFloat(secondNum);
    $('#main-screen').text(convertToExp(runningNumber));
    calcFunc = "";
  } else if(calcFunc != "add"){
    if (lastKey === "subtract" || lastKey === "multiply" || lastKey === "divide"){
      $('#mini-screen').text(firstNum + " " + "+");
    } else if($('#main-screen').text().length != 0 && runningNumber === 0){
      firstNum = parseFloat($('#main-screen').text());
      runningNumber = firstNum;
      $('#mini-screen').text(firstNum + " " + "+");
    } else{
      completion(); //completes previously started proceedure
      $('#mini-screen').text(runningNumber + " " + "+");
    }
    calcFunc = "add";
  } else if (calcFunc === "add"){
    secondNum = parseFloat($('#main-screen').text());
    $('#mini-screen').text(runningNumber + " " + "+" + " " + secondNum );
    runningNumber = parseFloat(runningNumber) + parseFloat(secondNum);
    $('#main-screen').text(convertToExp(runningNumber));
    calcFunc = "add";
  }

  lastKey = "add";
}

var difference = function(){
  if (lastKey === "subtract"){
    secondNum = firstNum;
    $('#mini-screen').text(runningNumber + " " + "-" + " " + secondNum);
    runningNumber = parseFloat(runningNumber) - parseFloat(secondNum);
    $('#main-screen').text(convertToExp(runningNumber));
    calcFunc = "";
  } else if(calcFunc != "subtract"){
    if (lastKey === "add" || lastKey === "multiply" || lastKey === "divide"){
      $('#mini-screen').text(firstNum + " " + "-");
    } else if($('#main-screen').text().length != 0 && runningNumber === 0){
      firstNum = parseFloat($('#main-screen').text());
      runningNumber = firstNum;
      $('#mini-screen').text(firstNum + " " + "-");
    } else{
      completion(); //completes previously started proceedure
      $('#mini-screen').text(runningNumber + " " + "-");
    }
    calcFunc = "subtract";
  } else if (calcFunc === "subtract"){
    secondNum = parseFloat($('#main-screen').text());
    $('#mini-screen').text(runningNumber + " " + "-" + " " + secondNum);
    runningNumber = parseFloat(runningNumber) - parseFloat(secondNum);
    $('#main-screen').text(convertToExp(runningNumber));
    calcFunc = "subtract";
  }

  lastKey = "subtract";
}

var quotient = function(){
  if (lastKey === "divide"){
    secondNum = firstNum;
    $('#mini-screen').text(runningNumber + " " + "÷" + " " + secondNum);
    runningNumber = parseFloat(runningNumber) / parseFloat(secondNum);
    $('#main-screen').text(convertToExp(runningNumber));
    calcFunc = "";
  } else if(calcFunc != "divide"){
    if (lastKey === "add" || lastKey === "multiply" || lastKey === "subtract"){
      $('#mini-screen').text(firstNum + " " + "÷");
    } else if($('#main-screen').text().length != 0 && runningNumber === 0){
      firstNum = parseFloat($('#main-screen').text());
      runningNumber = firstNum;
      $('#mini-screen').text(firstNum + " " + "÷");
    } else{
      completion(); //completes previously started proceedure
      $('#mini-screen').text(runningNumber + " " + "÷");
    }
    calcFunc = "divide";
  } else if (calcFunc === "divide"){
    secondNum = parseFloat($('#main-screen').text());
    $('#mini-screen').text(runningNumber + " " + "÷" + " " + secondNum );
    runningNumber = parseFloat(runningNumber) / parseFloat(secondNum);
    $('#main-screen').text(convertToExp(runningNumber));
    calcFunc = "divide";
  }

  lastKey = "divide";
}

var product = function(){
  if (lastKey === "multiply"){
    secondNum = firstNum;
    $('#mini-screen').text(runningNumber + " " + "×" + " " + secondNum);
    runningNumber = parseFloat(runningNumber) * parseFloat(secondNum);
    $('#main-screen').text(convertToExp(runningNumber));
    calcFunc = "";
  } else if(calcFunc != "multiply"){
    if (lastKey === "add" || lastKey === "divide" || lastKey === "subtract"){
      $('#mini-screen').text(firstNum + " " + "×");
    } else if($('#main-screen').text().length != 0 && runningNumber === 0){
      firstNum = parseFloat($('#main-screen').text());
      runningNumber = firstNum;
      $('#mini-screen').text(firstNum + " " + "×");
    } else{
      completion(); //completes previously started proceedure
      $('#mini-screen').text(runningNumber + " " + "×");
    }
    calcFunc = "multiply";
  } else if (calcFunc === "multiply"){
    secondNum = parseFloat($('#main-screen').text());
    $('#mini-screen').text(runningNumber + " " + "×" + " " + secondNum );
    runningNumber = parseFloat(runningNumber) * parseFloat(secondNum);
    $('#main-screen').text(convertToExp(runningNumber));
    calcFunc = "multiply";
  }

  lastKey = "multiply";
}

var percent = function(){
  runningNumber = parseFloat($('#main-screen').text()) / 100;
  $('#main-screen').text(runningNumber);
}

var convertToExp = function(num){
  if(num.toString().length > 10){
    return num.toPrecision(4);
  }
  else{
    return num;
  }
}

var screenLength = function(x){
  if($('#main-screen').text().indexOf(".") >= 0){
    return $('#main-screen').text().length - 1;
  } else{
    return $('#main-screen').text().length;
  }
}

$('body').keydown(function(e){
  console.log("Keydown: " + e.key);           //To add keyboard functionality later
});
