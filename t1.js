let userName = 'Max';
function greetUser(name) {
  let userName = name;
  console.log(userName)
  //alert(userName);
}
greetUser('Max');
userName = 'Manu';
console.log('username:'+userName)

function noparam(){
    alert('Hii I have no function parameters')
}

function param(name){
    alert(name)
}

function threeparams(name,age,day){
    const result=`Hi my name is ${name} and my age is ${age} and today's day is ${day}`
    alert(result)
}

noparam()
param('Shivani')
threeparams('Shivani',24,'Thursday')

taskJElement.addEventListener('click',noparam)
