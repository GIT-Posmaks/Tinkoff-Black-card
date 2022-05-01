console.log('Hello world ;)')
let btn = document.querySelector(".card__link")

console.log(btn)

(function () {  
    ('.scrollBtn a').each(function () { 
        var location = window.location.href; 
        var link = this.href;  
        if(location == link) { 
            $(this).addClass('active');
        }
    });
});