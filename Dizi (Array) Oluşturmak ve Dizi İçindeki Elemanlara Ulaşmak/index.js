//array oluşturmak
let domain = "ekeryum"
let isActive = false
let items = [1,2,3,domain,isActive]
console.log(items)

//array içindeki öğe sayısı
console.log(
    items.length
)
//array içindeki son elemana ulaşmak
console.log(items[items.length-1])

//değişken içindeki değerin array olup olmadığını kontrol etmek
console.log(
    Array.isArray(items)
)