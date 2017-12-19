
$.get('https://super-crud.herokuapp.com/books')
    .done(function(data){
      console.log(data.book);
      for (i=0; i<data.books.length; i++){
        $('#books').append($('<img>',{src: data.books[i].image}));
        $('#books').append($('<li>').text(data.books[i].title));
        $('#books').append($('<li>').text(data.books[i].author));
        $('#books').append($('<li>').text(data.books[i].releaseDate));
      }
    });


var formdata = 
$(“form#new-book”).submit(function() {
   event.preventDefault();    
   var newImage = $(“#book-image”).val();
   var newTitle = $(“#book-title”).val();
   var newAuthor = $(“#book-author”).val();
   var newDate = $(“#release-date”).val();
   var list = $(“ul#books”);
       list.append(“<img src=” + newImage + “></img>“);
       list.append(“<li>” + newTitle + “</li>“);
       list.append(“<li>” + newAuthor + “</li>“);
       list.append(“<li>” + newDate + “</li>“);
  

  $.ajax({
      type: ‘POST’,
      url: ’https://den-super-crud.herokuapp.com/books',
      data: {
          “image”: newImage,
          “title”: newTitle,
          “author”: newAuthor,
          “releaseDate”: newDate,
      },
      dataType: ‘JSON’
  }); 

});
