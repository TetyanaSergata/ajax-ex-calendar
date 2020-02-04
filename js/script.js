// Creare un calendario dinamico con le festività.
$(document).ready(function() {
  // i = day;

  // Variabili
  var startMonth = 0;   //-->Gennaio
  var year = 2018;
  // Utiliziamo moment.js per la data
  var monthFull = moment(
    {
      year: year,
      month: startMonth,
    }
  );

dayOfMonth(monthFull);
var url = 'https://flynn.boolean.careers/exercises/api/holidays';

// Chiamata Ajax
  $.ajax(
    {
      'url': url,
      'method': 'Get',
      'success': function(data, response) {
      // console.log(data);
      // console.log(response);
    },
    'error': function (request, state, errors) {
      alert('errore' + errors);
    }
  });



// var date = moment("2018-01", "YYYYMM").daysInMonth();

 // Funzioni
 function dayOfMonth(month) {
   // creo un ciclo per i giorni del mese e poi lo sposto in una funzione
   for (var i = 1; i <= 31; i++) {
     // console.log(i);
     // Template  Handlebars
     var source = $('#entry-template').html();
     var template = Handlebars.compile(source);
     var context = {
       day: i,
       month: monthFull.format('MMMM'),
       // console.log(monthFull.format('MMMM'));
       // Utilizziamo l'attributo 'date-complete'
       dateComplete: monthFull.format('YYYY-MM-DD')
     };

     var html = template(context);
     // Spostiamo il contenuto dentro l'elemento con .append
     $('.days').append(html);
   }
 }
 });
