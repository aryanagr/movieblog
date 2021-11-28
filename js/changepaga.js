var navbarcheck=false;
const update=()=>{
    
    $("*[include-html]").each(function () {
        
    var t = $(this).attr("include-html"),
    u = this.id;
jQuery.ajax({
    url: t,
    success: function (t) {
        $("#" + u).html(t);checknavbar(); selectlist();

    },
    error: function (n, c, i) {
        var s = n.status + ": " + n.statusText;
        $("#" + u).html(t + "-" + s);
    },
});
});



}

const homepage=()=>{
 
    $("#body").attr("include-html","movieblogs.html");
   
   update();
   
}
const signinpage=()=>{
 
    $("#body").attr("include-html","login.html");
   update();
}
const signuppage=()=>{
 
    $("#body").attr("include-html","signup.html");
   update();
}

const aboutpage=()=>{
    if(navbarcheck){
    $("#body").attr("include-html","about.html");
    
   update();}
   else signinpage()
}
const contactuspage=()=>{
    if(navbarcheck){
        $("#body").attr("include-html","contactus.html");
        
       update();}
       else signinpage()
}
const checknavbar=()=>{
    if(navbarcheck){
        document.getElementById("logoutnavbar").classList.remove("d-none");
    document.getElementById("signinnavbar").classList.add("d-none");
    document.getElementById("signupnavbar").classList.add("d-none");}
    else{
        document.getElementById("logoutnavbar").classList.add("d-none");
        document.getElementById("signinnavbar").classList.remove("d-none");
        document.getElementById("signupnavbar").classList.remove("d-none");}
}
function selectlist(){
    const genres= [
  
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
  genres.forEach(genre=>{
    const value=genre.id;
    const name=genre.name;
    const option=document.createElement('option');
    option.setAttribute("value",value)
    option.innerText=name;
    document.getElementById("genre").appendChild(option)
  })
  }



