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




