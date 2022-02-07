
//Declaring a function to fetch data from a Nasa API. The function takes an argument which is the API path. The recieved data is then converted into json.
function getDataFromNasa(apiPath) {
    const data = fetch(apiPath).then((data)=>{
        return data.json();
    }).then((fullData)=>{
        
        return fullData;
    })
    return data;
}


//This specific API has different results for a given date. So an array has been populated with dates to be looped over and display that date's data.
let datesArray = ["2008-02-15","2010-05-12","2018-09-04","2021-12-06"]


//Declaring an async function to generate the posts seen on the webpage.
async function generatePostElement(datesArray){


//Declaring an empty string which will be populated with HTML to replace the inner HTML on the web page. 
let element="";


//Looping over the dates in the array to generate a post for that date.
for await (const date of datesArray){


//Using the await function to let the promise be fulfilled before the program moves on, other wise there is too much data being recieved and the post cannot keep up and so it appears empty.    
const data = await getDataFromNasa(`https://api.nasa.gov/planetary/apod?&date=${date}&api_key=Zb5VNjRkQkUAwnHzV6QaVyUrA4A0VSVKBCgDqRVQ`)


//Using "+=" so a new post is generated each iteration of the loop and not rewriting the same post.
element += 


//Using a palce holder to rewrite the inner HTML with a new div that will hold all the data recieved from the API.
`
            <div class="card">
                <h1 class="titles">${data.title}</h1>
                <img src="${data.url}" class="images"/>
                <p class="description">${data.explanation} ${data.date}.</p>
                
                    
                
            </div>`

    }
    console.log(element)


    //Replacing the inner HTML.
    document.getElementById("content").innerHTML=element;
}


//Calling the function. 
generatePostElement(datesArray)

