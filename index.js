// Remember to import the data and Dog class!
import  Dog  from '../Dog.js'
import  dogs  from '../data.js'

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

document.getElementById("accept-button").addEventListener('click',yes)
document.getElementById("reject-button").addEventListener('click',no)
render()

function render(){
    document.getElementById('card').innerHTML=currentDog.getDogHtml()
}

function getNewDog(){

    currentDogIndex+=1
    if(currentDogIndex==3){
        currentDogIndex=0
    }
    currentDog = new Dog(dogs[currentDogIndex])
    render()
    document.getElementById('like-img').style.display="none"
    document.getElementById('nope-img').style.display="none"
}

function yes(){
    currentDog.setMatchStatus(true)
    currentDog.getReaction()
  
    setTimeout(getNewDog,3000)
    
    
}
function no(){
    
    currentDog.setMatchStatus(false)
    currentDog.getReaction()
    setTimeout(getNewDog,3000)

}

