fetch('articles.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

var mainContainer = document.getElementById("myData");

for (var i = 0; i < data.length; i++) {
    // append each person to our page
  }