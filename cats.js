document.addEventListener('DOMContentLoaded', function() {
  var summonButton = document.querySelector('.summon-cats');
  var catDivs = document.querySelectorAll('.cat-box')

  summonButton.addEventListener('click', function() {
    console.log('Button clicked!');
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done( function(responseData) {
      console.log('Request was successful!');
      responseData.cats.forEach(function(cat, index) {
        catDivs[index].innerHTML = "";

        var newImage = document.createElement('img');
        newImage.src = cat.photo;
        newImage.alt = "Photo of " + cat.name;
        catDivs[index].append(newImage);
      });
    });
  });
});
