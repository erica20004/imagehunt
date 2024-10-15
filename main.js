
fetch(`https://api.unsplash.com/photos/?client_id=nrKZuEnqu5KQ1tL5R6X30dEdkXFifnqY1teM-UmI68g&per_page=24`).then((res)=> {
    return res.json()
}).then((data)=> {
    console.log(data);
    const pictures = data
    pictures.forEach(function(pics) {
        console.log(pics);
         searchResult.innerHTML += `<div class="services"><div class="image-box" style="background-image: url('${pics.links.download}');"title="${pics.alt_description}"></div></div>`

    })
    showMoreBtn1.style.display = "block";
    
})

const showMoreBtn1 = document.getElementById('show-more-btn1')
showMoreBtn1.addEventListener("click", ()=>{
   page++;
fetch(`https://api.unsplash.com/photos/random/?client_id=nrKZuEnqu5KQ1tL5R6X30dEdkXFifnqY1teM-UmI68g&count=24`).then((res)=> {
      return res.json()
  }).then( (data)=> {
      console.log(data);

      if(page===1){
         searchResult.innerHTML="";
      }

      const pictures1 = data
      pictures1.forEach(function(pics1) {
          console.log(pics1);
           searchResult.innerHTML += `<div class="services"><div class="image-box" style="background-image: url('${pics1.links.download}');"title="${pics1.alt_description}"></div></div>`
  
      })
      
  })
 
})



const accessKey = 'nrKZuEnqu5KQ1tL5R6X30dEdkXFifnqY1teM-UmI68g'

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');



let keyword = "";
let page = 1;


let searchImage=()=> {
   keyword = searchBox.value;

   fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=24`).then( (res)=> {
      return res.json()
   }).then( (data)=> {
      console.log(data);


      if(page===1){
         searchResult.innerHTML="";
         showMoreBtn1.style.display = "none";
      }

      const images = data.results
      images.forEach( (image)=> {
         console.log(image);

         // I will display in the browser
         searchResult.innerHTML += `<div class="services"><div class="image-box" style="background-image: url('${image.links.download}');" title="${image.alt_description}"></div></div>`
      })
      
      showMoreBtn.style.display = "block";
   })
}


searchForm.addEventListener("submit", (e) => {
   e.preventDefault();
   page = 1;
   searchImage();

})

showMoreBtn.addEventListener("click", ()=>{
   page++;
   searchImage();
})




