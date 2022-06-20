let email = "abdurrahimeker@gmail.com"
let firstName = "abdurrahim"
let lastName = "Eker"

//email'in kaç harf olduğunu buluyor
console.log(email.length)


//ilk karekterini buluyor
console.log(firstName[0])
console.log(firstName.charAt(0))


//büyük harf
firstName = firstName.toUpperCase()
console.log(firstName)

lastName = lastName.toUpperCase()
console.log(lastName)

// küçük harf
firstName = firstName.toLowerCase()
console.log(firstName)

lastName = lastName.toLowerCase()
console.log(lastName)


//string içinde istediğimiz bilgiyi aramak ve yerini bulmak
console.log(email.search("@"))


//belli bir yere kadar olanı almak
let domain =  email.slice(email.search("@")+1)
console.log(domain)


//bilgiyi değiştirme -> replace
email = email.replace('gmail.com', 'hotmail.com')
console.log(email)


//istediğin bilgi başladımı bittimi  
console.log(email.endsWith('hotmail.com'))
console.log(email.startsWith('hotmail.com'))

//istediğim bilgi varmı 
console.log(email.includes('@'))



//ilk harfleri büyük yapmak
let fulName =  `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fulName)





