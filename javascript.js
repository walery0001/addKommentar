const textArea = document.querySelector('.sectionText');
const btn = document.querySelector('.btn');
let htmlText = document.querySelector('.goalText');
let counting = document.getElementById('counting');
const message = document.querySelector('.message');





textArea.addEventListener("input",function(){
let textNummber = textArea.value.length;

textNummber -= 50;



 if(textNummber > -30){
    counting.style.color = 'red';

} else{counting.style.color = 'green';}
if(textNummber  >= 1){
    alert('Sie haben 50 Wörter überschrieten');
return false;
}
counting.animate([{opacity:'0.4'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
counting.innerHTML = textNummber;

});
textArea.value = '';



btn.addEventListener('click', function(){


if(textArea.value.length === 0 || textArea.value.length === 51){

errorArea(textArea,message)

    // alert('du hast keine oder mehr als 50 worte')
    // return false;
}
else{
    korektArea(textArea,message)
let myText = textArea.value;
// let newP = document.createElement('p');
// newP.textContent = myText;
// htmlText.appendChild(newP)
// htmlText.innerHTML = `<p>${myText}</p> `
htmlText.innerHTML = `<p class="goalP">${myText}</p>`;
// newP.setAttribute('class','goalP');
textArea.value = '';
}
});
function errorArea(a,b){
    a.className = 'sectionText error'
    b.className = 'message wrong'
    b.innerHTML = 'Bitte uberprüfen Sie das Textfeld'
    
}

function korektArea(a,b){
    a.className = 'sectionText'
    b.className = 'message'
}
