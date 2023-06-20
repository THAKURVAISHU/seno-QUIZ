function submit_quiz(){
    var a = 0;
    var q1 = document.MCQ.question1.value;
    var q2 = document.MCQ.question2.value;
    var q3 = document.MCQ.question3.value;
    var q4 = document.MCQ.question4.value;
    var q5 = document.MCQ.question5.value;
    if(q1=="Virtual DOM."){a++}
    if(q2=="User interface framework"){a++}
    if(q3=="Jordan Mike"){a++}
    if(q4=="Props"){a++}
    if(q5=="Javascript"){a++}
    document.getElementById('box2').innerHTML = "All"+a+ "answers are correct";
    
    if(q1!=="Year 1912."){{a++};
         document.getElementById('box2').innerHTML = "Only "+a+ " answers are correct";
     }
}