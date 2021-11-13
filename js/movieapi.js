
    //your script here.

const api_key='api_key=c78e40c8f8548955baa2f20d92ec9fcf';
const baseurl='https://api.themoviedb.org/3'
const apipopularmovie=baseurl+'/discover/movie?sort_by=popularity.desc&'+api_key;
const imageurl='https://image.tmdb.org/t/p/w500/';
const body=document.getElementById("body");

function getmovie(url){
    fetch(url)
    .then(res=>res.json())
    .then(data =>{
       console.log("hello") ;
       
       showmovies(data.results);
    })
}



function showmovies(data){
    
    const cardparent=document.createElement('div');
    cardparent.classList.add("container-fluid" , "px-4" ,"px-md-5","px-lg-5" ,"px-xl-5","py-0" ,"bg-white","my-0" );
    cardparent.setAttribute("style", " outline: 0; border: 0;");
   
    
    cardparent.innerHTML=
    
    `<div class="row  bg-body d-block" id="cardadd">
   
    
    </div>`;
  
  


body.appendChild(cardparent)
   
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
    
}
 



