<?php
  $tweets = file_get_contents('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=tzimispanousis');
  echo "$tweets";
 ?>