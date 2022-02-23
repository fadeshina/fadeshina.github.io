function players (){
    count = 1
    counter = document.getElementById("turn")
    yourTurn = document.getElementById("yourTurn")
    yourTurn.innerHTML= "Start!"
    counter.onclick = function () {
        count++
        if (count%2==0){
            yourTurn.innerHTML = "It's Player O's Turn!"
        }
        else
        yourTurn.innerHTML = "It's Player X's Turn!"
    }
    
}

function whenClicked () {
    counting = 1
    b1=box1.innerHTML
    b2=box2.innerHTML
    b3=box3.innerHTML
    b4=box4.innerHTML
    b5=box5.innerHTML
    b6=box6.innerHTML
    b7=box7.innerHTML
    b8=box8.innerHTML
    b9=box9.innerHTML
    
    value1 = document.getElementById("box1").innerText;


    box1.onclick = function () {
        if(value1 == "Click Me"  && counting%2==1){
            box1.innerHTML = "X"
            b1 = box1.innerHTML
        } else if (value1== "Click Me"  && counting%2==0){
            box1.innerHTML = "O"
            b1 = box1.innerHTML

        }
        counting++
        
         if (b1 =="X" && b2 =="X" && b3=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b1,b2,b3)
        } else if (b1 =="O" && b2 =="O" && b3=="O" ) {
                     alert("Game Over! Congrats Player O!")
                console.log(b1,b2,b3)

        } else if (b1 =="X" && b5 =="X" && b9=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b1,b5,b9)
        }
        else if (b1 =="O" && b5 =="O" && b9=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b1,b5,b9)
        }
        else if (b1 =="X" && b4 =="X" && b7=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b1,b4,b7)
        }
        else if (b1 =="O" && b4 =="O" && b7=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b1,b4,b7)
        }
        else if ((b1=="X" || b1=="O") && (b2 =="O" || b2 =="X") && (b3=="O" || b3 =="X") && (b4 =="O" || b4 =="X")&& (b5 =="O" || b5 =="X") && (b6=="O" || b6=="X") && (b7 =="O" || b7 =="X" ) && (b8 =="O" || b8 =="X") && (b9=="O" || b9=="X")){
            alert("Stalemate! Thanks for Playing!")
            console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)

        }

        
        
    }
    
    value2 = document.getElementById("box2").innerText;
    box2.onclick = function () {
        if(value2== "Click Me" && counting%2==1 ){
            box2.innerHTML = "X"
            b2 = box2.innerHTML

        } else if (value1== "Click Me"  && counting%2==0){
            box2.innerHTML = "O"
            b2 = box2.innerHTML

        }
        counting++
        
        if (b1 =="X" && b2 =="X" && b3=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b1,b2,b3)
        } else if (b1 =="O" && b2 =="O" && b3=="O" ) {
                     alert("Game Over! Congrats Player O!")
                console.log(b1,b2,b3)

        }
        else if (b2 =="X" && b5 =="X" && b8=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b2,b5,b8)
        }
        else if (b2 =="O" && b5 =="O" && b8=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b2,b5,b8)
        }
        else if ((b1=="X" || b1=="O") && (b2 =="O" || b2 =="X") && (b3=="O" || b3 =="X") && (b4 =="O" || b4 =="X")&& (b5 =="O" || b5 =="X") && (b6=="O" || b6=="X") && (b7 =="O" || b7 =="X" ) && (b8 =="O" || b8 =="X") && (b9=="O" || b9=="X")){
            alert("Stalemate! Thanks for Playing!")
            console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)

        }
        
    }
    
    value3 = document.getElementById("box3").innerText;
    box3.onclick = function () {
        if(value3== "Click Me"  && counting%2==1){
            box3.innerHTML = "X"
            b3 = box3.innerHTML

        } else if (value3== "Click Me"  && counting%2==0){
            box3.innerHTML = "O"
            b3 = box3.innerHTML

        }
        counting++
        if (b1 =="X" && b2 =="X" && b3=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b1,b2,b3)
        } else if (b1 =="O" && b2 =="O" && b3=="O" ) {
                     alert("Game Over! Congrats Player O!")
                console.log(b1,b2,b3)

        }
        else if (b3 =="X" && b5 =="X" && b7=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b3,b5,b7)
        }
        else if (b3 =="O" && b5 =="O" && b7=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b3,b5,b7)
        }
        else if (b3 =="X" && b6 =="X" && b9=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b3,b6,b9)
        }
        else if (b3 =="O" && b6 =="O" && b9=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b3,b6,b9)
        }

        else if ((b1=="X" || b1=="O") && (b2 =="O" || b2 =="X") && (b3=="O" || b3 =="X") && (b4 =="O" || b4 =="X")&& (b5 =="O" || b5 =="X") && (b6=="O" || b6=="X") && (b7 =="O" || b7 =="X" ) && (b8 =="O" || b8 =="X") && (b9=="O" || b9=="X")){
            alert("Stalemate! Thanks for Playing!")
            console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)

        }

    }
    
    value4 = document.getElementById("box4").innerText;
    box4.onclick = function () {
        if(value4== "Click Me"  && counting%2==1){
            box4.innerHTML = "X"
            b4 = box4.innerHTML
        } else if (value4== "Click Me"  && counting%2==0){
            box4.innerHTML = "O"
            b4 = box4.innerHTML
        }
        counting++
        if (b4 =="X" && b5 =="X" && b6=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b4,b5,b6)
        } else if (b4 =="O" && b5 =="O" && b6=="O" ) {
                     alert("Game Over! Congrats Player O!")
                console.log(b4,b5,b6)

        }
        else if (b1 =="X" && b4 =="X" && b7=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b1,b4,b7)
        }
        else if (b1 =="O" && b4 =="O" && b7=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b1,b4,b7)
        }
        else if ((b1=="X" || b1=="O") && (b2 =="O" || b2 =="X") && (b3=="O" || b3 =="X") && (b4 =="O" || b4 =="X")&& (b5 =="O" || b5 =="X") && (b6=="O" || b6=="X") && (b7 =="O" || b7 =="X" ) && (b8 =="O" || b8 =="X") && (b9=="O" || b9=="X")){
            alert("Stalemate! Thanks for Playing!")
            console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)

        }
       
    
    }

    value5 = document.getElementById("box5").innerText;
    box5.onclick = function () {
        if(value5== "Click Me"  && counting%2==1){
            box5.innerHTML = "X"
            b5 = box5.innerHTML
        } else if (value5== "Click Me"  && counting%2==0){
            box5.innerHTML = "O"
            b5 = box5.innerHTML
        }
        counting++
        if (b4 =="X" && b5 =="X" && b6=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b4,b5,b6)
        } else if (b4 =="O" && b5 =="O" && b6=="O" ) {
                     alert("Game Over! Congrats Player O!")
                console.log(b4,b5,b6)

        }
        else if (b1 =="X" && b5 =="X" && b9=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b1,b5,b9)
        }
        else if (b1 =="O" && b5 =="O" && b9=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b1,b5,b9)
        }
        else if (b3 =="X" && b5 =="X" && b7=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b3,b5,b7)
        }
        else if (b3 =="O" && b5 =="O" && b7=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b3,b5,b7)
        }
        else if (b2 =="X" && b5 =="X" && b8=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b2,b5,b8)
        }
        else if (b2 =="O" && b5 =="O" && b8=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b2,b5,b8)
        }
        else if ((b1=="X" || b1=="O") && (b2 =="O" || b2 =="X") && (b3=="O" || b3 =="X") && (b4 =="O" || b4 =="X")&& (b5 =="O" || b5 =="X") && (b6=="O" || b6=="X") && (b7 =="O" || b7 =="X" ) && (b8 =="O" || b8 =="X") && (b9=="O" || b9=="X")){
            alert("Stalemate! Thanks for Playing!")
            console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)

        }
       
    
    }

    value6 = document.getElementById("box6").innerText;
    box6.onclick = function () {
        if(value6== "Click Me"  && counting%2==1){
            box6.innerHTML = "X"
            b6 = box6.innerHTML
        } else if (value6== "Click Me"  && counting%2==0){
            box6.innerHTML = "O"
            b6 = box6.innerHTML
        }
        counting++
        if (b4 =="X" && b5 =="X" && b6=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b4,b5,b6)
        } else if (b4 =="O" && b5 =="O" && b6=="O" ) {
                     alert("Game Over! Congrats Player O!")
                console.log(b4,b5,b6)

        }
        else if (b3 =="X" && b6 =="X" && b9=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b3,b6,b9)
        }
        else if (b3 =="O" && b6 =="O" && b9=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b3,b6,b9)
        }
        else if ((b1=="X" || b1=="O") && (b2 =="O" || b2 =="X") && (b3=="O" || b3 =="X") && (b4 =="O" || b4 =="X")&& (b5 =="O" || b5 =="X") && (b6=="O" || b6=="X") && (b7 =="O" || b7 =="X" ) && (b8 =="O" || b8 =="X") && (b9=="O" || b9=="X")){
            alert("Stalemate! Thanks for Playing!")
            console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)

        }
        
    
    }

    value7 = document.getElementById("box7").innerText;
    box7.onclick = function () {
        if(value7== "Click Me"  && counting%2==1){
            box7.innerHTML = "X"
            b7 = box7.innerHTML
        } else if (value7== "Click Me"  && counting%2==0){
            box7.innerHTML = "O"
            b7 = box7.innerHTML
        }
        counting++
        if (b7 =="X" && b8 =="X" && b9=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b7,b8,b9)
        } else if (b7 =="O" && b8 =="O" && b9=="O" ) {
                     alert("Game Over! Congrats Player O!")
                console.log(b7,b8,b9)

        }
        else if (b3 =="X" && b5 =="X" && b7=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b3,b5,b7)
        }
        else if (b3 =="O" && b5 =="O" && b7=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b3,b5,b7)
        }
        else if (b1 =="X" && b4 =="X" && b7=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b1,b4,b7)
        }
        else if (b1 =="O" && b4 =="O" && b7=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b1,b4,b7)
        }
        else if ((b1=="X" || b1=="O") && (b2 =="O" || b2 =="X") && (b3=="O" || b3 =="X") && (b4 =="O" || b4 =="X")&& (b5 =="O" || b5 =="X") && (b6=="O" || b6=="X") && (b7 =="O" || b7 =="X" ) && (b8 =="O" || b8 =="X") && (b9=="O" || b9=="X")){
            alert("Stalemate! Thanks for Playing!")
            console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)

        }
       
    
    }

    value8 = document.getElementById("box8").innerText;
    box8.onclick = function () {
        if(value8== "Click Me"  && counting%2==1){
            box8.innerHTML = "X"
            b8 = box8.innerHTML
        } else if (value8== "Click Me"  && counting%2==0){
            box8.innerHTML = "O"
            b8 = box8.innerHTML
        }
        counting++
        if (b7 =="X" && b8 =="X" && b9=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b7,b8,b9)
        } else if (b7 =="O" && b8 =="O" && b9=="O" ) {
                     alert("Game Over! Congrats Player O!")
                console.log(b7,b8,b9)

        }
        else if (b2 =="X" && b5 =="X" && b8=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b2,b5,b8)
        }
        else if (b2 =="O" && b5 =="O" && b8=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b2,b5,b8)
        }
        else if ((b1=="X" || b1=="O") && (b2 =="O" || b2 =="X") && (b3=="O" || b3 =="X") && (b4 =="O" || b4 =="X")&& (b5 =="O" || b5 =="X") && (b6=="O" || b6=="X") && (b7 =="O" || b7 =="X" ) && (b8 =="O" || b8 =="X") && (b9=="O" || b9=="X")){
            alert("Stalemate! Thanks for Playing!")
            console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)

        }
    
    }

    value9 = document.getElementById("box9").innerText;
    box9.onclick = function () {
        if(value9== "Click Me"  && counting%2==1){
            box9.innerHTML = "X"
            b9 = box9.innerHTML
        } else if (value9== "Click Me"  && counting%2==0){
            box9.innerHTML = "O"
            b9 = box9.innerHTML
        }
        counting++
        
        if (b7 =="X" && b8 =="X" && b9=="X"){
            alert("Game Over! Congrats Player X!")
            console.log(b7,b8,b9)
        } else if (b7 =="O" && b8 =="O" && b9=="O" ) {
                     alert("Game Over! Congrats Player O!")
                console.log(b7,b8,b9)

        }
        else if (b1 =="X" && b5 =="X" && b9=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b1,b5,b9)
        }
        else if (b1 =="O" && b5 =="O" && b9=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b1,b5,b9)
        }
        else if (b3 =="X" && b6 =="X" && b9=="X" ){
            alert("Game Over! Congrats Player X!")
            console.log(b3,b6,b9)
        }
        else if (b3 =="O" && b6 =="O" && b9=="O" ){
            alert("Game Over! Congrats Player O!")
            console.log(b3,b6,b9)
        } 
        else if ((b1=="X" || b1=="O") && (b2 =="O" || b2 =="X") && (b3=="O" || b3 =="X") && (b4 =="O" || b4 =="X")&& (b5 =="O" || b5 =="X") && (b6=="O" || b6=="X") && (b7 =="O" || b7 =="X" ) && (b8 =="O" || b8 =="X") && (b9=="O" || b9=="X")){
            alert("Stalemate! Thanks for Playing!")
            console.log(b1,b2,b3,b4,b5,b6,b7,b8,b9)

        }
    }
}
players()


