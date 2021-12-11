var now =()=>{
     let fake = new Date().toLocaleString().slice(11,17); //Date time now
     return fake;
}

//arr with predictions and func for get random
var cookie = ["Визначтеся з кінцевою метою – і у вас з’явиться шанс на перемогу","Зворотною стороною кожної поразки є відкриті нові можливості","Нехай тебе не лякає невміння. Роблячи з бажанням-навчишся","Новий Рік принесе позбавлення від старих звичок","У Новому Році ти заробиш достатньо грошей, щоб витрачати їх із задоволенням.","Якщо змовчати-вас не зможуть назвати занудою.","Навіть на вибоїнах сімейного життя ви все одно підскакуєте вгору.","Зверніть увагу на старих друзів.","Настав час ділитися досвідом","Саме час вирушати в подорож."];
var randomCokie =()=> {
  let ran=cookie[Math.floor(Math.random()*cookie.length)];
  return ran;
}
//random timer for setInterval
const randomTimer=()=>{
  let timer=Math.floor(Math.random()*20);
  return timer;
}
//return to html random predictions with time
let test=()=>{;
let i = 0;
let id = setInterval(function() {
	i++;
	
	if (i >= randomTimer()) {
		clearInterval(id);
	} else {
		document.getElementById('gen').innerHTML=`${randomCokie()} ${now()}`;
	}
}, 200);

}

//add and post predictions 
const form=document.getElementById("form")
form.addEventListener('submit', calback)
function calback(event){
    event.preventDefault();
    const story=form.querySelector('[name="story"]')
    const storyValue=story.value;
    cookie.push(storyValue);
    
    document.getElementById('out').innerHTML+=`${story.value} ${now()} <br>`;
}

