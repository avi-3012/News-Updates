//663d2a3704654e719f699eaebd06a570
let apiKey = '663d2a3704654e719f699eaebd06a570';
let newsContainer = document.getElementById('card-container');

const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,true);
xhr.onload=function(){
    if (this.status ==200){
        let json = JSON.parse(this.responseText)
        console.log(json)

        let news = '';
        for(key in json.articles){
            let publishedAt = json.articles[key].publishedAt;
            let date = publishedAt.slice(0,10);
            news+=`<div class="card">
                        <div class="card-image" style="object-fit: cover;
                        width: 100%;
                        height: 175px">
                        <img class="card-image" src="${json.articles[key].urlToImage}";>
                        </div>
                        <div class="card-content">
                        <small class="source">${json.articles[key].source.name}</small>
                        <h3 class="card-text">${json.articles[key].title}</h3>
                        <p class="card-text-content">${json.articles[key].content}</p>
                        <small class="author">${json.articles[key].author}</small>
                        <small class="date">${date}</small>
                        <button class="butt" onclick="location.href = '${json.articles[key].url}';">Read More</button>
                        </div>
                        
                    </div>`;
        }
        // console.log(news)
        newsContainer.innerHTML = news;
        
        console.log(json);
    }
    else{
        console.log('Error')
    }
}
xhr.send();
