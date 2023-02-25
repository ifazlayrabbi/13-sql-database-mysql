
// ------ Function without parameters ------

function func1 () { return 'hello1 hi' }
const func2 = function () { return 'hello2 hi' }

const func3 = () => { return 'hello3 hi' }
const func4 = () => 'hello4 hi'


// ------ Function with parameters -------

const func5 = (para) => 'hello5 ' + para
const func6 = para => 'hello6 ' + para
const func7 = (para1, para2) => 'hello7 ' + para1 + para2

console.log(func7('ok', 'GOOD'))


// ------- Anonymus Function -------

() => { return 'hello3 hi' }
() => 'hello4 hi'

(para) => 'hello5 ' + para
para => 'hello6 ' + para
(para1, para2) => 'hello7 ' + para1 + para2