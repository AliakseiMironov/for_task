let button =  document.getElementById("button");
let url = "https://www.boredapi.com/api/activity"

button.onclick = async function getHere(){
  let response = await fetch(url);
  let result = await response.json();
  let text = document.getElementById("text")

  text.textContent = result.activity
  
  
  // document.body.append(result.activity)
  

  // return result.activity;
  // console.log(result.activity)
}


















// let arr = [1,3,5,7,9];



// async function mapAsync(mass,callbackFun){
//   const result = await callbackFun(mass);
//   return result;  
// }

// mapAsync(arr)








// let str1 = prompt('First date day-mounth-year','');
// let str2 = prompt('Second date day-mounth-year','');

// function diffDays(data1,data2){
//     str1 = data1.split("-").reverse().join("-");
//     str2 = data2.split("-").reverse().join("-");

//     let date1 = new Date(str1);
//     let date2 = new Date(str2);
//     let diffTime = Math.abs(date2 - date1);
//     console.log(diffTime);
//     let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//     return diffDays + " days";
// }

// console.log(diffDays(str1,str2));


// let date = new Date();
// let timeZoneOffset = date.getTimezoneOffset();

// console.log(timeZoneOffset);

// let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(timeZone);

// let timeZone2 = moment.tz.guess();
// console.log(timeZone2);