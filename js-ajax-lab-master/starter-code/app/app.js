getBooks();

$("#new-book").on("submit", function(event){
    event.preventDefault();

    // Creating variables for form inputs
    var title = $('#book-title').val();
    var author = $('#book-author').val();
    var image = $('#book-image').val();
    var releaseDate = $('#book-release-date').val();

    // AJAX POST request
    $.ajax({ 
        type: 'POST', 
        url: 'https://den-super-crud.herokuapp.com/books',
        data: {
            "title": title,
            "author": author,
            "image": image,
            "releaseDate": releaseDate,
        },
        dataType: 'JSON'
    }); 

    // Updating list upon submit
    getBooks();

    // Resetting Input Values
    $("#book-title").val('');
    $("#book-author").val('');
    $("#book-image").val('');
    $("#book-release-date").val('');
});


// This function is responsible for calling the API and using that data to populate html page 
function getBooks(){
    $.ajax("https://den-super-crud.herokuapp.com/books").done(function(data){
        // Store books array in a variable
        var booksObject = data.books;
    
        // Using for loop to add list items to DOM
        for(let i = 0; i < booksObject.length; i++){
            $('#books').append("<ul><span class='bookTitle'>Book " + (i+1) + "</span>" + 
                                "<li><span class='francois'>Title:</span> " + booksObject[i].title + "</li>" + 
                                "<li><span class='francois'>Author:</span> " + booksObject[i].author + "</li>" +
                                "<li><span class='francois'>Cover:</span> " + "<img src=" + booksObject[i].image + ">" + "</li>" +
                                "<li><span class='francois'>Release Date:</span> " + booksObject[i].releaseDate + "</li>" +
                                "</ul>");
        }
    });
}