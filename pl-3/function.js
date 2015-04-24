$(document).ready(function(){
	setInterval(function(){ $("h1").toggle(); },1500);
	$("#q1 .answer").click(function() { 
		$('.box').hide();
		
	 
		
		$("#q1").hide(0,function() { $("#q2").fadeIn().focus(); });
	});
	
	$("#q2 .answer").click(function() { 
		$("#q2").hide(0,function() { $("#q3").fadeIn().focus(); });
		 
	});
	
	$("#q3 .answer").click(function() {
		$("#content").hide();
	  
		
		
		$("#q3").hide(0,function() { $("#v1").fadeIn().focus(); });
		setTimeout(function(){ $("#v1").hide(); $("#v2").show(); },1000);
		setTimeout(function(){ $("#v2").hide(); $("#v3").show(); },2250);
		setTimeout(function(){ $("#v3").hide(); $("#v4").show(); },3000);
		setTimeout(function(){ $("#v4").hide(); $("#v5").show(); },4250);
		
	});
        
/*        $("#q3 .yes").click(function(){
            $('#agree').attr('href', 'http://mszbl.trackvoluum.com/click/1');
        });*/
});

function showdate() {
	var mydate=new Date()
	var year=mydate.getYear()
	if (year < 1000)
	year+=1900
	var day=mydate.getDay() +0
	var month=mydate.getMonth()
	var daym=mydate.getDate() +1
	if (daym<10)
	daym="0"+daym
	var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
	var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
	return(""+montharray[month]+" "+daym+"th")
}
