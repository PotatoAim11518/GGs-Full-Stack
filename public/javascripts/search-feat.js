const searcher = document.querySelector(".search-input");
const inputBox = searcher.querySelector("input");
const suggestionBox = searcher.querySelector(".autocom-box");
const icon = searcher.querySelector(".search-icon");

// if user press any key and release
inputBox.onkeyup = (e)=>{

    let userData = e.target.value; //user entered data
    let newArray = [];
    if(userData){
        newArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        let suggArray = newArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+`<a href="/games/${titleId(data)}/reviews">`+ data +'</a>'+'</li>';
        });
        searcher.classList.add("active"); //show autocomplete box
        showSuggestions(suggArray);
        let allList = suggestionBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        showSuggestions(newArray)
        searcher.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    searcher.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        if(inputBox.value !== ''){
            userValue = inputBox.value;
            listData = '<li>'+ userValue +'</li>';
        }else{
            listData=null
        }
    }else{
        listData = list.join('');
    }
    suggestionBox.innerHTML = listData;
}

        
function titleId(title){
    return suggestions.indexOf(title) + 1;
}
