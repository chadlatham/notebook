// Must be executed in the browser

// var query = function() {
//   var $xhr = $.getJSON('http://www.omdbapi.com/?t=Frozen');
//
//   $xhr.done(function(data) {
//     if($xhr.status !== 200) {
//       return;
//     }
//     if ($xhr.status >= 400 && $hr.status < 500 ) {
//       console.log('File not found');
//     }
//
//     console.log(data);
//   });
//   $xhr.fail(function(err) {
//     console.log(err);
//   });
// };
//
// $('button').click(query);

var $xhr = $.getJSON('http://www.omdbapi.com/?t=Frozen');

$xhr.done(function(data) {x
  if($xhr.status !== 200) {
    return;
  }
  if ($xhr.status >= 400 && $hr.status < 500 ) {
    console.log('File not found');
  }
  console.log(data);
  console.log(`Title: ${data.Title}`);
  console.log(`Year: ${data.Year}`);
});

$xhr.fail(function(err) {
  console.log(err);
});
