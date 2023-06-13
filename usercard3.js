let MSDhonioldinfo={
    imgurl:"https://images.indiafantasy.com/wp-content/uploads/20220724002346/i.jpeg",
    name: "MSD",
    description:"Cricketer"
} 

let MSDyounginfo={
    imgurl:"https://static.wixstatic.com/media/a3ab99_84fd4beccd76400984e1bbbbbc0d9a89~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a3ab99_84fd4beccd76400984e1bbbbbc0d9a89~mv2.jpg",
    name: "Mahendra Singh Dhoni",
    description:"Captian of Indian Team"
}

let isMSDold=true;
let displayobject;
let flipdata = function(){
    if (isMSDold==true){
        displayobject=MSDyounginfo;
        isMSDold=false;
    }
    else{
        displayobject=MSDhonioldinfo;
        isMSDold=true;
    }
    document.getElementById("MSD-img").src=displayobject.imgurl;
    document.getElementById("MSD-name").innerHTML=displayobject.name;
    document.getElementById("MSD-desc").innerHTML=displayobject.description;
}