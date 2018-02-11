<!DOCTYPE html>
<html>
<head>
  <title></title>
     <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>
<body>
<div class="container">
  <div class="row">
    <div class="col-sm-8">
      <h1>Web Dev Tweets</h1>
      <input type="text" 
        id="inputSearch" 
        placeholder="Search by name"/>
      <button class="btn btn-primary" 
        id="btnSearch"
        >Search</button>
    </div>
  </div>
  <!-- row -->

  

  <div id="tweets" class="row">
    
  </div>
  <!-- row -->

  <div class="row">
    <div class="col-sm-8">
      <div>Made with love by John</div>
    </div>
  </div>  
  <!-- row -->

</div>

<script
  src="http://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>

<script type="text/javascript">
/* global $ */
"use strict";

function update(data, filter) {
  $("#tweets").empty();
  data
    .filter(function (d) {
      return d.user.screen_name.startsWith(filter);
    })
    .forEach(function (d) {
      var photo = $("<img>")
        .addClass("photo")
        .attr("src", d.user.profile_image_url)
        .attr("alt", d.user.screen_name + " photo");
        
      var tweet = $("<div class='col-sm-4'>")
        .append($("<div>")
          .addClass("name")
          .text(d.user.screen_name)
        )
        .append(photo);
      $("#tweets")        
        .append(tweet);
    });

}

function callback(data) {
  console.log("callback");
  console.log(data);

  
  update(data, "");

  $("#btnSearch")
    .on("click", function (){
      update(data, $("#inputSearch").val());
    });
}

console.log("before");
$.getJSON("./WebDevUniandes2018_w2.json", callback);
console.log("after");

 


























</script>



</body>
</html>