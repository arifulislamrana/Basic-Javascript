/*uncoomen
//variable and alert
alert('File Linked');
var num1 = 35;
var num2 = 40;

alert(num1+num2);//alert('my fav is'+num1);
var num1 = '35';
var num2 = '40';

alert(num1+num2);

///..array of string..///..


var colors = new Array('red', 'blue', 'green');//= ['red', 'blue', 'green'];

colors.push('orange');//colors[3] = 'orange';
alert(colors[3]);

///..array of number..///..

var numbers = [2,32,43,32,'seven'];
//alert(numbers[0] + numbers[2]);
//alert(numbers[4]);
//alert(numbers.length);
//alert(numbers.sort());
alert(numbers.reverse());
*/

////....loop.....///

console.log(123);//we will see result after pressing F12 in browser
for(var i = 0; i<=10; i++){
    console.log('i love num '+i);
}

var numbers = [33,54,76,54,3,5];
numbers.forEach(function(number){
    console.log(number);
});

for(var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

//........conditionals...////

var a=3;
var b=4;
if(a!=b){
    console.log('This is true');
}else{
    console.log('This is not true');
}

var fruit = 'apple';

switch(fruit){
    case "banana":
    alert('i hate banana');
    break;

    case "apple":
    alert('i hate apple');
    break;

    default:
    alert('i dont love fruit');
}

///...object...//


//object literal//

var person = {
    firstName: 'ariful',
    lastName:'islam',
    age: 34,
    children: ['ek', 'dui'],
    address:{
        street:'Shikdar Road',
        vill:'Musapur',
        dist:'Noakhali'
    },
    fullName: function(){
        return this.firstName+" "+this.lastName;
    }
}
console.log(person.firstName);
console.log(person.children[0]);
console.log(person.address.dist);
console.log(person.fullName());

//....object contructor...///


var apple = new Object;
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
    return 'An apple is the color '+this.color+
    ' and is the shape '+this.shape;
}
console.log(apple.describe());

//....constructor  pattern...../


function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.describe = function(){
        return this.name+' is the color '+this.color+
        ' and is the shape '+this.shape;
    }
}

var apple = new Fruit('apple', 'red', 'round');
var melon = new Fruit('melon', 'green', 'round');
console.log(melon.describe());

//..........arrays of object.....//

var users = [
    {
        name:'arif',
        age:30
    },
    {
        name:'opy',
        age:10
    },
    {
        name:'pop',
        age:26
    }
];
console.log(users[0].name);


//....events..........//

function doClick(){
    alert('you clicked');
}

function changeText(id){
    id.innerHTML='you clicked';
}
function change_Text(){
    var heading = document.getElementById('lekha');
    lekha.innerHTML = 'you clicked';
}
function showdate(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}
function showdate2(){
    var Time = document.getElementById('Time');
    Time.innerHTML = Date();
}
function cleardate(){
    var Time = document.getElementById('Time');
    Time.innerHTML = '';
}
///form///

function changebackground(x){
    console.log(x.value);
    var body = document.getElementById('body');
    body.style.backgroundColor = x.value;

}


function validateform(){
    var name = document.forms["myform"]["name"].value;
    if(name== null || name==""){
        alert("name required");
        return false;
    }
    if(name.length<3){
        alert("must be greater 3 char");
        return false;
    }
}