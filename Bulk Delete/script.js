/*
    Check to see if `posts` exists in local storage
    if it does parse the JSON string
    loop through the returned array and add each string to the page as innerHTML.
*/
if(localStorage.getItem(`posts`))
{
    var posts = JSON.parse(localStorage.getItem(`posts`));
    posts.forEach(value=>$(`#output`).innerHTML += value)
}

/*
    When the `Add` button is clicked:
        creates a div for a post
        gives it a `post` class
        creates a <p> tag
        add the textareas value to the <p> tag's innerHTML
        create a <time> element
        add the system time to the time elements innerHTML
        add the <time> and <p> to the <div>
        add the <div> to the #output <section>
        create an array of the post's outerHTML strings
        Store the array in local storage as a JSON String
*/
$(`button`)[0].addEventListener(`click`, e=>{
    let post = document.createElement(`div`);
    post.setAttribute(`class`,`post`);  
    let check = document.createElement(`input`);
    check.setAttribute(`type`,`checkbox`)
    check.classList.add(`hidden`)
    let p = document.createElement(`p`);
    p.innerHTML = $(`textarea`).value
    let time = document.createElement(`time`);
    time.innerHTML = new Date().toLocaleTimeString();
    post.appendChild(check)
    post.appendChild(time)
    post.appendChild(p)
    $(`#output`).appendChild(post)

    var arr = Array.from($(`.post`)).map(value=>value.outerHTML)
    
    localStorage.setItem(`posts`,JSON.stringify(arr))
})

var bulk = $(`button`)[1];
var allBtn = $(`#all`);
var confirmBtn = $(`#confirm`);
var mode = false;

bulk.addEventListener(`click`, e=>{
    mode = !mode;

    var checks = document.querySelectorAll(`.post input[type="checkbox"]`);
    checks.forEach(c=>{
        if(mode) c.classList.remove(`hidden`);
        else{
            c.classList.add(`hidden`);
            c.checked = false;
        }
    });

    if(mode){
        allBtn.classList.remove(`hidden`);
        confirmBtn.classList.remove(`hidden`);
    }else{
        allBtn.classList.add(`hidden`);
        confirmBtn.classList.add(`hidden`);
    }
});

allBtn.addEventListener(`click`, e=>{
    var checks = document.querySelectorAll(`.post input[type="checkbox"]`);
    checks.forEach(c=>c.checked = true);
});

confirmBtn.addEventListener(`click`, e=>{
    var posts = Array.from($(`.post`));

    posts.forEach(p=>{
        var c = p.querySelector(`input[type="checkbox"]`);
        if(c && c.checked) p.remove();
    });

    var remaining = posts
        .filter(p=>{
            var c = p.querySelector(`input[type="checkbox"]`);
            return !(c && c.checked);
        })
        .map(p=>p.outerHTML);

    localStorage.setItem(`posts`, JSON.stringify(remaining));

    mode = false;

    var checks = document.querySelectorAll(`.post input[type="checkbox"]`);
    checks.forEach(c=>{
        c.classList.add(`hidden`);
        c.checked = false;
    });

    allBtn.classList.add(`hidden`);
    confirmBtn.classList.add(`hidden`);
});

/*
Function to select an element. 
selects a list of elements and returns either the list or a single element in the list.
argument: an element selector
return:
    a: if the node list is longer than one item return the node list
    b: if the node list contains one item return the one element
*/
function $(_element)
{
    let e = document.querySelectorAll(_element)
    return (e.length > 1)?e:e[0]
}
