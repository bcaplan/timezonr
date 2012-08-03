function apiSubmit() {
  var area_code = $("#input").val();
  var apiUrl = 'http://www.allareacodes.com/api/1.0/api.json?tracking_email=test@example.com&tracking_url=http://example.com&npa=';

  if (area_code.length > 0) {
    console.log('Submitting...');

    $.getJSON(apiUrl + area_code, function(data) {
      console.log(data);

      if (data.area_codes.length === 0) {
        console.log('No area codes returned');
        return false;
      }

      $.each(data.area_codes[0], function(key, val) {
        $('#' + key).html(val);
      });
    });
  }
}

$(document).ready(function() {
  $("#button").click(
    function(event) {
      event.preventDefault();

      console.log('Clicked');

      apiSubmit();
    }
  );

  $("#input").keypress(
    function(event) {
      if(event.which == 13){
        console.log("Enter pressed");

        apiSubmit();
        return false;
      }
  });
});