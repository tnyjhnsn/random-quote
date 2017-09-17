$(document).ready(function() {
  getQuote();
  $("#get-quote").on("click", getQuote);
});

function getQuote() {

  var quote = "";
  var author = "";
  var provider = "";
  var quoteURL = "http://api.forismatic.com/api/1.0/?method=getQuote&key=24680&format=jsonp&lang=en&jsonp=?";

  var processURL = function(json) {
    quote = json.quoteText.trim();
    if (json.quoteAuthor === "") {
      json.quoteAuthor = "Unknown";
    }
    author = json.quoteAuthor;
    provider = "Quote provided by " +
      "<a href='" + json.quoteLink + "' target='_blank'>forismatic.com</a>"
    $("#quote").html(quote);
    $("#author").html(author);
    $("#provider").html(provider);

    var twitterURL = "https://twitter.com/intent/tweet?text=" + quote + " (" + author + ")";
    $("#tweet-me").attr("href", twitterURL);
  };

  $.getJSON(quoteURL, processURL);
};