window.onload = function(){

    //değişkenlerimizi tanımladık

    var selectedOperator = "";
    var leftpart = "";
    var rigthpart = "";

    //hesap makinesinin üzerinde bulunan tuşları klavyeye atadım

    window.onkeydown = function(tus){
        for(var i = 96; i < 105; i++){
            
            var b = i-48;
            
            if(tus.keyCode == i || tus.keyCode == b){

                var a = i - 96;
                document.getElementById("input").value += a;
                
                if(selectedOperator == ""){
                    leftpart += a;
                    
                }else if(selectedOperator != ""){
                    rigthpart += a;
    
                }

            }
    
        }
        var element = document.getElementById("input")
        var operator = ""

        if(tus.keyCode == 107){
            
            operator =  "+";
        
        }else if(tus.keyCode == 109){

            operator =  "-";
        
        }else if(tus.keyCode == 106){

            operator =  "*";

        }else if(tus.keyCode == 111){

            operator =  "/";

        }else if(tus.keyCode == 13){


        }else if(tus.keyCode == 8){


        }else if(tus.keyCode == 27){
            leftpart = ""
            rigthpart = ""
            element.value = ""
            operator =  "";

        }
        element.value += operator
    }
    //numaralara click özelliği verdim

    var numbers = document.querySelectorAll(".num")

    for(var i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click", function(){

            document.getElementById("input").value += this.value;
                    
            console.log(this.value)

            if(selectedOperator == ""){
                leftpart += this.value

            }else if(selectedOperator != ""){
                rigthpart += this.value

            }

        })
    }

    //operatorlere click özelliği verdim
    
    var operators = document.querySelectorAll(".operator")
    
    for(var i = 0;i < operators.length; i++){
        
        operators[i].addEventListener("click", function(){
            
            document.getElementById("input").value += this.value;
            
            selectedOperator = this.value
            
            //oparatorlerin yan yana yazılmama özelliği
            if(this.value == "+" || this.value == "-" || this.value == "*" || this.value == "/" ){

                var input = document.getElementById("input").value
                document.getElementById("input").value = input.slice(0,input.length-1)

            }
            console.log(this.value)
            
            
            operator =  "";
            
        })
    }
    


    //silme butonlarına click özelliği vermek

    var deleteC = document.getElementById("deleteC")
    var deleteB = document.getElementById("deleteB")
    
    //tek tek silen tuş
    deleteB.addEventListener("click", function(){
        var input = document.getElementById("input").value
        document.getElementById("input").value = input.slice(0,input.length-1)
        selectedOperator = "";
        leftpart = document.getElementById("input").value;
        rigthpart = "";
        
    })





    //hepsini silen tuş
    deleteC.addEventListener("click", function(){

        document.getElementById("input").value = ""
        selectedOperator = ""
        leftpart = ""
        rigthpart = ""
        element.value = ""
        operator =  "";

    })
    //sssssssssssssssssssssssssss
    document.getElementById("esittir").addEventListener("click",function test(){
        
        if(selectedOperator == "*"){

            document.getElementById("input").value = parseInt(leftpart) * parseInt(rigthpart);

        }else if(selectedOperator == "+"){

            document.getElementById("input").value = parseInt(leftpart) + parseInt(rigthpart);

        }else if(selectedOperator == "-"){

            document.getElementById("input").value = parseInt(leftpart) - parseInt(rigthpart);
            
        }else if(selectedOperator == "/"){

            document.getElementById("input").value = parseInt(leftpart) / parseInt(rigthpart);
            
        }

        selectedOperator = "";
        leftpart = document.getElementById("input").value;
        rigthpart = "";

    },false)


}
