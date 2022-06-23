window.onload = function(){

    //değişkenlerimizi tanımladık

    var selectedOperator = "";
    var degerA = "";
    var degerB = "";

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
            operator =  ""

        }
        element.value += operator
    }
    //numaralara click özelliği verdim

    var numbers = document.querySelectorAll(".num")

    for(var i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click", function(){

            if(selectedOperator == "+" || selectedOperator == "-" || selectedOperator == "/" || selectedOperator == "*"){
                
                degerA = this.value
                var inptA = document.getElementById("input").value += degerA
                degerA =  inptA.split(" ")
                console.log(degerA)

            }else if(selectedOperator == ""){

                degerB = this.value
                var inptB = document.getElementById("input").value += degerB

            }

        })
    }

    //operatorlere click özelliği verdim
    
    var operators = document.querySelectorAll(".operator")
    
    for(var i = 0;i < operators.length; i++){
        
        operators[i].addEventListener("click", function(){

            //oparatöelerin yan yana gelme sorunu
            
            var opList = ["+","-","*","/"," "]  
            var deger1 = document.getElementById("input").value
            var lastChar = deger1.substr(deger1.length-1)
            
            if (!opList.includes(lastChar)) {
                
                document.getElementById("input").value += this.value
            
            } else {
            
                var newStr = deger1.substr(0, deger1.length-1) + this.value
                document.getElementById("input").value = newStr
            
            }
            
            selectedOperator = this.value

            
            
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
        operator =  "";

    })
    //sssssssssssssssssssssssssss
    document.getElementById("esittir").addEventListener("click",function test(){
        
        var islem = degerA.join(" ")
        var sonuc = eval(islem)
        document.getElementById("input").value = sonuc



        selectedOperator = "";

    },false)


}
