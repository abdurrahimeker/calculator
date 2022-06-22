window.onload = function(){

    //değişkenlerimizi tanımladık

    var selectedOperator = "";
    var degerA = "";
    var degerB = "";

    //numaralara click özelliği verdim

    var numbers = document.querySelectorAll(".num")

    for(var i = 0; i < numbers.length; i++){
        numbers[i].addEventListener("click", function(){

            // console.log(this.value)

            if(selectedOperator == "+" || selectedOperator == "-" || selectedOperator == "/" || selectedOperator == "*"){
                
                degerA = this.value
                var inptA = document.getElementById("input").value += degerA
                degerA =  inptA.split("+")
                console.log(degerA)

            }else if(selectedOperator == ""){

                degerB = this.value
                var inptB = document.getElementById("input").value += degerB
                console.log(degerB)

            }


        })
    }


    //operatorlere click özelliği verdim
    
    var operators = document.querySelectorAll(".operator")
    
    for(var i = 0;i < operators.length; i++){
        
        operators[i].addEventListener("click", function(){

            //oparatöelerin yan yana gelme sorunu
            
            var opList = ["+","-","*","/"]  
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
    




    //işlem hane

    document.getElementById("esittir").addEventListener("click",function test(){

        if(degerA[1] == "+"){

            var sonuc =  degerA[0] + degerA[2]

        }else if(degerA[1] == "-"){

            sonuc =  degerA[0] - degerA[2]

        }else if(degerA[1] == "*"){

            sonuc =  degerA[0] * degerA[2]

        }else if(degerA[1] == "/"){

            sonuc =  degerA[0] / degerA[2]

        }        

        // ssssssssssssssssssssssssssssssssssssss

        if(degerA[1] == "+" && degerA[3] == "-"){

            sonuc =  degerA[0] + degerA[2] - degerA[4]

        }else if(degerA[1] == "-" && degerA[3] == "-"){

            sonuc =  degerA[0] - degerA[2] - degerA[4]

        }else if(degerA[1] == "*" && degerA[3] == "-"){

            sonuc =  degerA[0] * degerA[2] - degerA[4]

        }else if(degerA[1] == "/" && degerA[3] == "-"){

            sonuc =  degerA[0] / degerA[2] - degerA[4]

        }



        selectedOperator = "";

    },false)

}
