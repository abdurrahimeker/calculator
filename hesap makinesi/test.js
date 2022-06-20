window.onload = function(){
    
    var selectedOperator = "";
    var leftpart = "";
    var rigthpart = "";

    var numbers = document.querySelectorAll(".num")

    for(var i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click",function(){

            document.getElementById("inputDiv").innerHTML += this.value;

            leftpart += this.value

            if(selectedOperator == ""){
                leftpart = this.value

            }else if(selectedOperator != ""){
                rigthpart = this.value

            }

        },false)
    }
    var operators = document.querySelectorAll(".operator")

    for(var i = 0;i < operators.length; i++){
        operators[i].addEventListener("click",function(){

            document.getElementById("inputDiv").innerHTML += this.value;

            selectedOperator = this.value
        
        },false)
    }
    document.getElementById("esittir").addEventListener("click",function(){
        if(selectedOperator == "*"){

            document.getElementById("inputDiv").innerHTML = parseInt(leftpart) * parseInt(rigthpart);

        }else if(selectedOperator == "+"){

            document.getElementById("inputDiv").innerHTML = parseInt(leftpart) + parseInt(rigthpart);

        }else if(selectedOperator == "-"){

            document.getElementById("inputDiv").innerHTML = parseInt(leftpart) - parseInt(rigthpart);
            
        }else if(selectedOperator == "/"){

            document.getElementById("input").innerHTML = parseInt(leftpart) / parseInt(rigthpart);
            
        }
    },false)
    
}











for(var i = 96; i < 105; i++){

    if(tus.keyCode == i){

        a = i - 96;
        document.getElementById("input").value += a;

    }

}