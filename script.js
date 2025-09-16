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
    //MAKING THE POST

    //div
    const postDiv= document.createElement("div")
    document.body.appendChild(postDiv);
    postDiv.classList.add("post")
    //div
    
    //user
    const user= document.createElement("span");
    user.innerText = getElementById = username.value
    postDiv.appendChild(user);
    user.id = "user"
    
    //title
    const title= document.createElement("span");
    title.innerText = getElementById = postTitle.value  
    postDiv.appendChild(title); 
    title.id = "title"

    //post text
    const post= document.createElement("p");
    post.innerText = getElementById = postText.value  
    postDiv.appendChild(post); 
    post.id = "postText"

    //SAVING THE POST

    // displays HTML code for them -> console.log(postDiv.innerHTML) | to display just text -> .innerText

    // let newPost = postDiv.innerHTML DOWNLOADS JSON FILE OF NEWPOST
    
    let jsonString = JSON.stringify(newPost);

    // const filename = 'my_data.json';
    // const jsonContent = JSON.stringify({ savedData: postDiv.innerHTML }, null, 2); // null, 2 for pretty printing
    // const blob = new Blob([jsonContent], { type: 'application/json' });
    // const url = URL.createObjectURL(blob);

    // const a = document.createElement('a');
    // a.href = url;
    // a.download = filename;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    // URL.revokeObjectURL(url); // Clean up the URL object

    const data = fs.readFileSync('data.json');
    const jsonData = JSON.parse(data);


    jsonData.forumPosts.push({
    jsonString
    // or any other data we want to add in that object
    });
    fs.writeFileSync('data.json', JSON.stringify(jsonData));
        
};