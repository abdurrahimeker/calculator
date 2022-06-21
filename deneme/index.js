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
            operator =  ""

        }
        element.value += operator
    }
    //numaralara click özelliği verdim

    var numbers = document.querySelectorAll(".num")

    for(var i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click", function(){

            document.getElementById("input").value += this.value;
                    
            // console.log(this.value)

            if(selectedOperator == "+"){
                
                let deger1 = this.value
                console.log("değer1:".deger1)
                
                //degerleri topladım
                let toplam = parseInt(deger1)  + parseInt(deger5)
                console.log(toplam); 


            }else if(selectedOperator == "-"){
                
                let deger2 = this.value
                console.log(deger2)


            }else if(selectedOperator == "*"){
                
                let deger3 = this.value
                console.log(deger3)

            }else if(selectedOperator == "/"){
                
                let deger4 = this.value
                console.log(deger4)

            }else if(selectedOperator == ""){
                
                let deger5 = this.value
                console.log(deger5)

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
