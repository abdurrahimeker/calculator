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
                degerA =  inptA.split(" ")
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
                
                document.getElementById("input").value += " " + this.value + " "
                
            } else {
            
                var newStr = deger1.substr(0, deger1.length-1) + this.value
                document.getElementById("input").value = newStr
            
            }

            
            selectedOperator = this.value

            
            
            
        })
    }
    




    //işlem hane

    document.getElementById("esittir").addEventListener("click",function test(){

        for(i = 0; i < degerA.length; i++){
            // if(degerA[i+1] == "+"){
            //     var sonuc = parseInt(degerA[i]) + parseInt(degerA[i+2])
            //     console.log(sonuc)
            // }else if(degerA[i+1] == "*"){
            //     var sonuc = parseInt(degerA[i]) * parseInt(degerA[i+2])
            //     console.log(sonuc)
            // }else if(degerA[i+1] == "-"){
            //     var sonuc = parseInt(degerA[i]) - parseInt(degerA[i+2])
            //     console.log(sonuc)
            // }else if(degerA[i+1] == "/"){
            //     var sonuc = parseInt(degerA[i]) / parseInt(degerA[i+2])
            //     console.log(sonuc)
            // }

            if(degerA[i+1] == "+" && degerA[i+3] == "+" && degerA[i+5] == "+" && degerA[i+7] == "+"){
                var sonuc = parseInt(degerA[i]) . parseInt(degerA[i+1]) . parseInt(degerA[i+2])
                console.log(sonuc)
            }else if(degerA[i+1] == "*"){
                var sonuc = parseInt(degerA[i]) * parseInt(degerA[i+2])
                console.log(sonuc)
            }else if(degerA[i+1] == "-"){
                var sonuc = parseInt(degerA[i]) - parseInt(degerA[i+2])
                console.log(sonuc)
            }else if(degerA[i+1] == "/"){
                var sonuc = parseInt(degerA[i]) / parseInt(degerA[i+2])
                console.log(sonuc)
            }
        }



        selectedOperator = "";

    },false)

}
