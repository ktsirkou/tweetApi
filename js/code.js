function displaydate(date){
 var n = date.split("+0000");
 var displaydate = n[0] + n[1];
 return displaydate;
}

function appendTweets(data) {
 for (i=data.length-1;i>=0; i--) {  
	 $("#boxesContainer").append("<div class='box'><h2>" + displaydate(data[i].created_at) +"</h2><p>" + data[i].text+"</p></div>");
  }  
}

function get_tweets() {
 var url = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=CNN&count=50&include_entities=true&include_rts=true";
 JSONP.get(url, null, function(data) {
   appendTweets(data);
  });
}

$(document).ready(function() { 
  get_tweets(); 
});