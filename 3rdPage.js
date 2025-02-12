logobt=document.querySelector("#logo");
const animeplayer=document.querySelectorAll(".video-list-container");
const vidtobedisplayed=document.querySelectorAll(".image-container");
const displayvid=document.querySelector("#videocontainer")
const animecontainer=document.querySelector("#animeplayer");
logobt.addEventListener("click", ()=>{
    window.location.href="Homepage.html";
});

function animecreate(nameofanime){//create video element from season 1-4
var animearray=[[],[],[],[]];
var z=14;
var episode1="https://www.youtube.com/watch?v=yqqphr4S-i0";

for(let a=1; a<=z; a++){//SEASON1
      
  let animeS1=[];
  animeS1[a]=document.createElement('IFRAME');
  animeS1[a].src=episode1;
  
  animeS1[a].className="anime";
  animeS1[a].id="anime"; 
  animeS1[a].style.height="100%";
  animeS1[a].style.width="100%";
  animeS1[a].style.position="absolute";
  animeS1[a].style.objectFit="cover";
  animeS1[a].style.borderRadius="20px";
  animearray[0].push(animeS1[a]);
}

addanimetoplayer(0);//add the created animes to animeplayer
    function addanimetoplayer(Seasonnum){
    
    for(var e=0; e<animearray[0].length; e++){
        vidtobedisplayed[e].append(animearray[Seasonnum][e]);
        
    }
}
for(let l=0; l<animeplayer.length; l++){//pause the anime episode that is in the left container and add it back to the vidtobe displayed when another anime episode is clicked
    let m=1;
    m+=l;
      animeplayer[l].addEventListener("click",()=>{  
        
        animeplayer[l].style.borderColor="rgb(0, 100, 0)";
        
          if(displayvid.firstElementChild) {
            
            displayvid.firstElementChild.style.position="absolute";
            displayvid.firstElementChild.style.height="100%";
            displayvid.firstElementChild.style.width="100%";
            displayvid.firstElementChild.style.objectFit="cover";
            
            if(displayvid.firstElementChild== add[0]){
              vidtobedisplayed[0].append(displayvid.firstElementChild);  
              add[0].controls=false;
              add[0].pause();
            }
            else if(displayvid.firstElementChild== add[1]){
              vidtobedisplayed[1].append(displayvid.firstElementChild); 
              add[1].controls=false;
              add[1].pause();
            }
            else if(displayvid.firstElementChild== add[2]){
              vidtobedisplayed[2].append(displayvid.firstElementChild); 
              add[2].controls=false;
              add[2].pause();
            }
            else if(displayvid.firstElementChild== add[3]){
              vidtobedisplayed[3].append(displayvid.firstElementChild);
              add[3].controls=false; 
              add[3].pause();
            }
            else if(displayvid.firstElementChild== add[4]){
              vidtobedisplayed[4].append(displayvid.firstElementChild); 
              add[4].controls=false;
              add[4].pause();
            }
            else if(displayvid.firstElementChild== add[5]){
              vidtobedisplayed[5].append(displayvid.firstElementChild); 
              add[5].controls=false;
              add[5].pause();
            }
            else if(displayvid.firstElementChild== add[6]){
              vidtobedisplayed[6].append(displayvid.firstElementChild); 
              add[6].controls=false;
              add[6].pause();
            }
            else if(displayvid.firstElementChild== add[7]){
              vidtobedisplayed[7].append(displayvid.firstElementChild); 
              add[7].controls=false;
              add[7].pause();
            }
            else if(displayvid.firstElementChild== add[8]){
              vidtobedisplayed[8].append(displayvid.firstElementChild); 
              add[8].controls=false;
              add[8].pause();
            }
            else if(displayvid.firstElementChild== add[9]){
              vidtobedisplayed[9].append(displayvid.firstElementChild); 
              add[9].controls=false;
              add[9].pause();
            }
            else if(displayvid.firstElementChild== add[10]){
              vidtobedisplayed[10].append(displayvid.firstElementChild); 
              add[10].controls=false;
              add[10].pause();
            }
            else if(displayvid.firstElementChild== add[11]){
              vidtobedisplayed[11].append(displayvid.firstElementChild); 
              add[11].controls=false;
              add[11].pause();
            }
            else if(displayvid.firstElementChild== add[12]){
              vidtobedisplayed[12].append(displayvid.firstElementChild); 
              add[12].controls=false;
              add[12].pause();
            }

        }
        add =document.querySelectorAll("#anime");
        add[l].play();
        displayvid.append(add[l]);
        add[l].controls=true;
        console.log(add[l]);
      })
    }

      seasons=document.querySelector("#season");
      seasonContainer=document.querySelector(".seasonsContainer");
      season1234=document.querySelectorAll(".seasonNum");
      season1=document.querySelector("#season1");
      season2=document.querySelector("#season2");
      season3=document.querySelector("#season3");
      season4=document.querySelector("#season4");

      seasons.addEventListener("mouseover", ()=>{
        seasonContainer.style.display="inline";
        for(let v=0; v<season1234.length; v++){
          season1234.forEach((season,i) => {
            season1234[i].addEventListener("mouseover",()=>{
              season1234[i].style.backgroundColor="gray";
                season1234[i].addEventListener("mouseleave",()=>{
                  season1234[i].style.backgroundColor="rgb(17, 17, 17)";
                })
            })
          });
            season1234[v].addEventListener("click",()=>{
             

                if(season1234[v]==season1){
                    season1.style.backgroundColor="gray";
                    seasons.textContent="Season 1";
                    seasonContainer.style.display="none";
                    removeAnimes();
                    addanimetoplayer(0);
                    animecontainer.scrollTo(0,0); //tuwing may maseselect na season, maauto scroll up yung anime container
      
                  }else{
                    season1.style.backgroundColor="rgb(17, 17, 17)";
                  }
      
                  if(season1234[v]==season2){
                    season2.style.backgroundColor="gray";
                    seasons.textContent="Season 2";
                    seasonContainer.style.display="none";
                    removeAnimes();
                    addanimetoplayer(1);
                    animecontainer.scrollTo(0,0); //tuwing may maseselect na season, maauto scroll up yung anime container
                    
      
                  }else{
                    season2.style.backgroundColor="rgb(17, 17, 17)";
                  }
      
                  if(season1234[v]==season3){
                    season3.style.backgroundColor="gray";
                    seasons.textContent="Season 3";
                    seasonContainer.style.display="none";
                    removeAnimes();
                    addanimetoplayer(2);
                    animecontainer.scrollTo(0,0); //tuwing may maseselect na season, maauto scroll up yung anime container
                  }else{
                    season3.style.backgroundColor="rgb(17, 17, 17)";
                  }
      
                  if(season1234[v]==season4){
                    season4.style.backgroundColor="gray";
                    seasons.textContent="Season 4";
                    seasonContainer.style.display="none";
                    removeAnimes();
                    addanimetoplayer(3);
                    animecontainer.scrollTo(0,0); //tuwing may maseselect na season, maauto scroll up yung anime container
                  }else{
                    season4.style.backgroundColor="rgb(17, 17, 17)";
                  }
                  
            })
        }
        
        seasonContainer.addEventListener("mouseleave",()=>{
            seasonContainer.style.display="none";
           
            })
    })
    function removeAnimes(){
        for(let u=0; u<vidtobedisplayed.length; u++){
          if(vidtobedisplayed[u].firstElementChild){
            vidtobedisplayed[u].firstElementChild.remove();
          }
          else if(displayvid.firstElementChild){
            displayvid.firstElementChild.remove();
          }
          
          else{
            continue;
          }
          const vidcontainer = document.querySelectorAll(".video-list-container")
          vidcontainer[u].style.borderColor="white";
        }
      }
    

}

    var value = localStorage["animetobepassed"];
    animecreate(value);

    var title=localStorage["animetitle"];//anime title
    titlecontainer=document.querySelector("#animetitle");
    titlecontainer.textContent=title;

    