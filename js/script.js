// Creare un calendario dinamico con le festività.
$(document).ready(function() {
  var url = 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0';

  var arrayDate = [];
  var date = moment("2018-01", "YYYYMM").daysInMonth();
  console.log(date);
  arrayDate.push(date);
  console.log(arrayDate);


  // Chiamata Ajax
  $.ajax(
    {
      'url': url,
      'method': 'Get',
      'success': function(data, response) {
      console.log(data);
      console.log(response);
    },
    'error': function (request, state, errors) {
      alert('errore' + errors);
    }
  });

});
