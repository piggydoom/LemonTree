// let submitButton = document.getElementById('submitButton')



function saveAllData(){
    
let firstName= document.getElementById('firstName')
let middleName= document.getElementById('middleName')
let lastName= document.getElementById('lastName')
let phoneNumber= document.getElementById('phoneNum')
let location= document.getElementById('location')
let description= document.getElementById('desc')
let start= document.getElementById('start')
let end= document.getElementById('end')


console.log(firstName.value)
console.log(middleName.value)
console.log(lastName.value)
console.log(phoneNumber.value)
console.log(location.value)
console.log(description.value)
console.log(start.value, "-", end.value)

};


function copy(){
    const copyText = document.getElementById("emailText")

     copyText.select();
     copyText.setSelectionRange(0, 99999); 
     navigator.clipboard.writeText(copyText.value);
     alert("Copied the text: " + copyText.value);
};


function makePost(){
    let postText= document.getElementById('postText')
    console.log(postText.value);

    // let userAndText = ((getElementById = username.value) + " | " + (getElementById = postText.value))

    //div
    const xPost= document.createElement("div")
    //div
    
    const user= document.createElement("p");
    user.classList.add("username")
    user.innerText = getElementById = username.value
    document.xPost.appendChild(user);
    
    const post= document.createElement("p");
    post.innerText = getElementById = postText.value
    document.body.appendChild(post);   
    
    // const username= document.createElement("p");
    // post.innerText = getElementById = username.value
};