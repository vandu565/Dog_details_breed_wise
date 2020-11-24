



var dropdown=$("#breed");
var getImage=$("#getImage");
var image=$("#image");
var nextId=$("#nextId");
var breed;
var allowSubmit = true;


$.get('https://dog.ceo/api/breeds/list/all',function(data,status){
    let dogbreed=data.message;
    for(let breed in dogbreed){
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
   
});

dropdown.change(function () {
    allowSubmit = true;
});

getImage.click(function(event){
    
    event.preventDefault();
    if (allowSubmit){
    breed=dropdown.val();
    display(breed);
    allowSubmit = false;
    }

    
})
nextId.click(function(event){
   
    event.preventDefault();
    if (breed !== undefined) {
        display(breed);
    }
})


function display(breed){
    
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";
    $("#image img").remove();
    $.get(url,function(data,status){
        let imageUrl=data.message;
        image.append('<img src="' + imageUrl + '" alt="' + breed + '">')

    });
    
   
}



