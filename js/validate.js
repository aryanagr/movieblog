

    


const signup =()=>{
    
    let email=$("#email").val()
   let name=$("#name").val()
   let gender=$("#gender").val()
   let pnumber=$("#pnumber").val()
   let dob=$("#dob").val()
   let pass=$("#pass").val()
   var cpassword=$("#cpassword").val()
   var check=true
   
    if(email.length==0){$("#emailcheck").text("email should be valid")
    check=false
}
    if(name.length==0){$("#namecheck").text("name  should be entered")
    check=false
}
    if(gender.length==0){$("#gendercheck").text("gender should be entered")
    check=false
}
    if(pnumber.length!=10){$("#pnumbercheck").text("mobile number should length 10")
    check=false
}
    if(dob.length=!10){$("#dobcheck").text("date of birth should be entered")
    check=false
    
}
    if(pass.length<=10){$("#passcheck").text("password min length should be 10")
    check=false
}
    if(cpassword.length<=10){$("#cpasswordcheck").text("password min length should be 10")
    check=false
}
    if(pass!=cpassword){$("#cpasswordcheck1").text("password and confirm password should be same")
    check=false
}

if(check){alert("register scussefully")
signinpage();}
  
   

} 
function signin (){
   
    let email=$("#loginemail").val()
    let pass=$("#loginpass").val()
    check=true;
    if(email.length==0){$("#loginemailcheck").text("email should be valid")
    check=false
}
if(pass.length<=10){$("#loginpasscheck").text("password min length should be 10")
check=false
}
if(check){
    navbarcheck=true;
    checknavbar()
    
    alert("login scussefully")

 homepage();
 checknavbar()
 

}

}
const logout=()=>{
    navbarcheck=false;
    signinpage();
}
const messagesend=(event)=>{
    event.preventDefault()
    let email=$("#messageemail").val()
    let name=$("#messagename").val()
    
    let pnumber=$("#messagepnumber").val()
    
    let subject=$("#messagesubject").val()
    let message=$("#messagemessage").val()
    let messagecheck=true
    if(email.length==0){$("#checkmessageemail").text("email should be valid")
    messagecheck=false
}
    if(name.length==0){$("#checkmessagename").text("name  should be entered")
    messagecheck=false
}
   if(pnumber.length!=10){$("#checkmessagepnumber").text("mobile number length 10")
    messagecheck=false
}
   if(message.length==0){$("#checkmessagemessage").text("message should be add")
    messagecheck=false
}
   if(subject.length==0){$("#checkmessagesubject").text("subject should be add")
    messagecheck=false
}
    if(messagecheck){
    alert("message send")
    contactuspage();
    }
}

 




