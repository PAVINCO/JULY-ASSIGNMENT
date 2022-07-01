let frUits = ['banana', 'pineapple', 'mango', 'orange']

console.log(frUits)

//  the unshift array method is what i will use to add the apple

frUits.unshift('apple')
console.log(frUits)

//  i will use the pop array method to remove the last item 

frUits.pop()
console.log(frUits)


Math.pow(8,3)

function adder(x,y) {
   let settled = x + y;
   console.log(settled) 
}

adder(1456,2487)


// function greeter(name) {
//  let greet 
// }


let day;

switch (new Date().getDay()) {
  case 0:
    day = 'sunday';
    break;
  case 1:
    day = 'monday';
    break;
  case 2:
    day = 'tuesday';
    break;
  case 3:
    day = 'wenesday';
    break;
  case 4:
    day = 'thursday';
    break;
  case 5:
      day ='friday';
    break;
  case 6:
      day = 'saturday'
    break;
}

console.log(day)


let people = [{naMe:'great jeff', track:'web dev', gender:'male',hobby:'running',favourite:'amala', pic:'user-1.jfif'},
{naMe:'goodness adeeyo', track:'web dev', gender:'female',hobby:'running',favourite:'amala',pic:'user-1.jfif'},
{naMe:'odom', track:'web dev', gender:'male',hobby:'running',favourite:'amala', pic:'user-1.jfif'},

];


let row = document.querySelector('.student-area');

let  cardholder =''
people.forEach((person) => {
   cardholder += `
    
   <div class="profile-card">
   <div class="detail-area">
       <p class="name">${person.naMe}</p>
       <p class="track">${person.track}</p>
       <p class="gender">${person.gender}</p>
       <p class="hobby">${person.hobby}</p>
       <p class="f-food">${person.favourite}</p>
   </div>
   <div class="image-box " style="background-image: url(./assets/images/${person.pic});"></div>
</div>
   `
})

row.innerHTML = cardholder
