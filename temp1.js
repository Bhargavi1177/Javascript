// string methods 

// 1. .length --

const txt = 'bhargavi'
console.log(txt.length)

// 2. slice(start, end) --

console.log(txt.slice(2, 5))

// 3. substring(start , end) --

console.log(txt.substring(2, 8))

// 3.0 . substr(start,length) --

// console.log(txt.substr(0, 5))

// 4. replace(searchValue, newValue) --

console.log(txt.replace(/bhargavi/, 'vegesna'))

// 5. replaceall(searchValue, newValue)

console.log(txt.replaceAll('vegesna', 'bhargavi'))

// 6. touppercase()

console.log(txt.toUpperCase())

// 7. tolowercase()

console.log(txt.toLowerCase())

// 8. concat()

const txt_ = 'vegesna'
let res = txt.concat(txt_)
console.log(res)

// 9.splice()

// console.log(res.)

// 10. trim()

const txt_1 = ' bhargavi vegesna    '
let temp = txt_1.trim()
console.log(temp)

// 11. trimstart()
console.log(txt_1.trimStart())

// 12. trimend()

console.log(txt_1.trimEnd())

// 13. padstart()

let _txt = 'bhargavi vegesna'
let pad_str = _txt.padStart(5, '!')
console.log(pad_str)

// 14. padend()

let pad_end = _txt.padEnd(3, '-')
console.log(pad_end)

// 15. charAt()