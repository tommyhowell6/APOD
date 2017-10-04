$(document).ready(function() {
  
var url = "https://api.nasa.gov/planetary/apod?api_key=AcFc5Ztx2UpVK9YSh1jkM9iuvvSRCWwLEW9O90RB";

$.ajax({
  url: url,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  // $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});

$("#submitButton").click(function(e){
  var url = "https://api.nasa.gov/planetary/apod?api_key=AcFc5Ztx2UpVK9YSh1jkM9iuvvSRCWwLEW9O90RB";
  url = url + "&date=";
  var date = $("demo").val();
  console.log(date);
  e.preventDefault();
})
$("#demo").dcalendarpicker(
  {
    format: 'yyyy-mm-dd'
  }
);

});