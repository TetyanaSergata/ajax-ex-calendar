// Creare un calendario dinamico con le festività.
$(document).ready(function() {
  // creo un ciclo per ig giorni del mese
  // i = day;
  for (var i = 1; i <= 31; i++) {
    console.log(i);
  }
  // Template  Handlebars
  var firstMonth = 'January';
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  var context = {
    day: i,
    month: firstMonth
  };
  var html = template(context);
  // Spostiamo il contenuto dentro l'elemento con .append
  $('.days').append(html);
});


//   var url = 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0';
//
//
//   var date = moment("2018-01", "YYYYMM").daysInMonth();
//
//
//
//
//   // Chiamata Ajax
//   $.ajax(
//     {
//       'url': url,
//       'method': 'Get',
//       'success': function(data, response) {
//       // console.log(data);
//       // console.log(response);
//     },
//     'error': function (request, state, errors) {
//       alert('errore' + errors);
//     }
//   });
//
// });
//
//
//  // Funzioni
