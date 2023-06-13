let MSDhonioldinfo={
    imgurl:"https://images.indiafantasy.com/wp-content/uploads/20220724002346/i.jpeg",
    name: "MSD",
    description:"Cricketer"
} 

let displayobject={
    name:"",
    imgurl:"",
    description:""
};
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json()) //json is JS obj to print data
    .then(data=>{
        displayobject.name=data.results[0].name.first +" "+ data.results[0].name.last
        displayobject.imgurl= data.results[0].picture.large
        displayobject.description=data.results[0].gender
        document.getElementById("MSD-img").src=displayobject.imgurl;
        document.getElementById("MSD-name").innerHTML=displayobject.name;
        document.getElementById("MSD-desc").innerHTML=displayobject.description;
    } 
}