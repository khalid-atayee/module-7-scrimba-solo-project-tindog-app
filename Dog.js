// Create the Dog class here

 class Dog{
    constructor(data){
        Object.assign(this,data)

    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getDogHtml(){

        const {name, avatar, age, bio }=this
        return `
        <div class= "feature-suggestion">
            <div class="dog-info">
                <h4>${name}, ${age}</h4>
                <div class="dog-bio">
                    ${bio}
                </div>
            </div>
            <img class="dog-img" src="${avatar}">
        </div>

        `
    }
    getReaction(){
        if(this.hasBeenLiked){
            document.getElementById('like-img').style.display="block"
        
            document.getElementById('like-img').innerHTML+=`<img class="img" src='images/badge-like.png'>`
            
        }
        else{
            document.getElementById('nope-img').style.display="block"

            document.getElementById('nope-img').innerHTML+=`<img class="img" src='images/badge-nope.png'>`

        }
    }
}

export default Dog;


