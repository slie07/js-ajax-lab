
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
      // for (let i=0; i<data.books.length; i++){
      //     $(‘#books’).append($(‘<li>’).text(JSON.stringify(data.books[i])));

      // 