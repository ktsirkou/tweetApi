function get_tweets() { 
 
 $.ajax({  
		
		url: 'page.php',
		type: 'post',
		dataType : "json",  
		data: '<? php echo $tweets; ?>',
 
        timeout:15000,  
 
        success : function(data)  
        {   
 for (i=0; i<data.length; i++)  
            {  
 $("#boxesContainer").append("<div class='box'><p>" + data[i].text)+"</p></div>";  
            }  
        },  
 
        error : function()  
        {   
            alert("Failure!");   
        },  
 
    }); }
 
$(document).ready(function() { get_tweets(); });