
    //your script here.

const api_key='api_key=c78e40c8f8548955baa2f20d92ec9fcf';
const baseurl='https://api.themoviedb.org/3'
const apipopularmovie=baseurl+'/discover/movie?sort_by=popularity.desc&'+api_key;
const imageurl='https://image.tmdb.org/t/p/w500/';
const searchurl=baseurl+'/search/movie?'+api_key;
const changepageurl=baseurl+'/discover/movie?sort_by=popularity.desc&'+api_key+'&page='

const body=document.getElementById("body");

var pagenumber=1;
var totalpage=1;
var searchpagenumber=1;
var globalpage=1;

function getmovie(url){
    fetch(url)
    .then(res=>res.json())
    .then(data =>{
      totalpage=data.total_pages;
       
       showmovies(data.results);
    })
}



function showmovies(data){
    body.innerHTML="";
    const cardparent=document.createElement('div');
    cardparent.classList.add("container-fluid" , "px-4" ,"px-md-5","px-lg-5" ,"px-xl-5","py-0" ,"bg-white","my-0" );
    cardparent.setAttribute("style", " outline: 0; border: 0;");
   
    
    cardparent.innerHTML=
    
    `<div class="row  bg-body d-block" id="cardadd">
   
    
    </div>`;
  
  


body.appendChild(cardparent)
   if(data.length==0){alert("no movie found");getmovie(apipopularmovie);}
   else{
    data.forEach(movie => {
        
        const {title,poster_path,vote_average,overview}=movie;
        const moviecard=document.createElement('div');
        moviecard.classList.add("card" , "col-sm-6" ,"col-lg-4","col-xl-3" ,"p-1" ,"pt-0","pb-0","d-inline-block");
        moviecard.setAttribute("style", " outline: 0; border: 0;");
        moviecard.innerHTML=`
        <img src="${imageurl+poster_path}" alt="${title}"   class="card-img-top  w-100 h-75" alt="...">
        <div class="card-body px-0 ">
        <div class="row">
            <h5 class="card-title col-9 d-inline">${title}</h5>  <h5 class="card-text col-3 d-inline" id="ratting">⭐${vote_average}</h5>
        </div>
        <p class="card-text">${overview}</p>
       
        </div>
        `;
         document.getElementById("cardadd").appendChild(moviecard);
     
    });

    const page=document.createElement('div');
    page.innerHTML=`<div class="d-flex justify-content-center">
    <button type="button" class="btn btn-light p-2 m-2" onclick="previouspage()"> previous page</button>
    <label class=" bg-light p-2 m-2  " type="number"  id="pageshow"   style="border:0; outline:0; height:40px;width:50px" /></label>
    <button type="button" class="btn btn-light p-2 m-2" onclick="nextpage()">next page</button>
</div>`;

    document.getElementById("cardadd").appendChild(page);
    document.getElementById("pageshow").innerText=globalpage;
}
 
}
const search=()=>{
    const data=searchbar.value;
    if(data!=""){
        getmovie(searchurl+'&query='+data);
    }
    else getmovie(apipopularmovie);
}

const searchenter=(event)=> {
   
    if (event.keyCode === 13) {
      
      event.preventDefault();
      
      document.getElementById("searchbutton").click();
    }
  }
  const nextpage =()=>{
    if(searchbar.value==""){
    
      if(pagenumber+1<=totalpage){
        
        pagenumber=pagenumber+1;
        globalpage=pagenumber;
      getmovie(changepageurl+pagenumber)
      document.getElementById("pageshow").innerText=pagenumber;
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
      searchpagenumber=1
      
      
    }
    else{
        alert("no more page")
    }
}
    else{
        if(searchpagenumber+1<=totalpage){
            searchpagenumber=searchpagenumber+1
            globalpage=searchpagenumber;
          getmovie(searchurl+'&query='+searchbar.value+'&page='+searchpagenumber)
          document.body.scrollTop = 0; 
          document.documentElement.scrollTop = 0;
          pagenumber=1;
          
        }
        else{
            alert("no more page")
        }

    }
  }
  const previouspage=()=>{
    if(searchbar.value==""){
    
    if(pagenumber-1>0){
        pagenumber=pagenumber-1;
        globalpage=pagenumber;
    getmovie(changepageurl+pagenumber)
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    searchpagenumber=1
    
    }
    else{  alert("no more previous page");
}
  }
  else{
    if(searchpagenumber-1>0){
        
        searchpagenumber=searchpagenumber-1
        globalpage=searchpagenumber;
      getmovie(searchurl+'&query='+searchbar.value+'&page='+searchpagenumber)
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
      pagenumber=1;
      
    }
    else{
        alert("no more previous page")
    }

  }
}



