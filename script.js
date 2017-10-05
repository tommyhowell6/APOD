$(document).ready(function() {
                  $myfunc=function(myurl)
                  {
                  $.ajax({
                         url: myurl,
                         success: function(result){
                         console.log('here')
                         if("copyright" in result) {
                         $("#copyright").text("Image Credits: " + result.copyright);
                         }
                         else {
                         $("#copyright").text("Image Credits: " + "Public Domain");
                         }
                         
                         if(result.media_type == "video") {
                         $("#apod_vid_id").css("display","");
                         $("#apod_img_id").css("display", "none");
                         $("#apod_vid_id").attr("src", result.url);
                         }
                         else {
                         $("#apod_img_id").css("display","");
                         $("#apod_vid_id").css("display", "none");
                         $("#apod_img_id").attr("src", result.url);
                         }
                         $("#reqObject").text(url);
                         // $("#returnObject").text(JSON.stringify(result, null, 4));
                         $("#apod_date").text(result.date);
                         $("#apod_explaination").text(result.explanation);
                         $("#apod_title").text(result.title);
                         }
                         });

                  }
                 var url = "https://api.nasa.gov/planetary/apod?api_key=AcFc5Ztx2UpVK9YSh1jkM9iuvvSRCWwLEW9O90RB"; 
                  $myfunc(url);
                  $("#submitButton").click(function(e){
                                           var date = $("demo");
                                            console.log(date);
                                           
                                           })
                  $("#button1, #button2").click(function () {
                                                
                                                if (this.id == "button1") {
                                                url="https://api.nasa.gov/planetary/apod?api_key=AcFc5Ztx2UpVK9YSh1jkM9iuvvSRCWwLEW9O90RB&date=2011-01-28";                         }
                                                else if (this.id == "button2"   ) {
                                                url="https://api.nasa.gov/planetary/apod?api_key=AcFc5Ztx2UpVK9YSh1jkM9iuvvSRCWwLEW9O90RB&date=2017-08-21";
                                                }
                                                
                                                $myfunc(url);
                                                })
                  
                  $("#demo").dcalendarpicker(
                                             {
                                             format: 'yyyy-mm-dd'
                                             })
                    .on('datechanged', function(e){
                                                    url = "https://api.nasa.gov/planetary/apod?api_key=AcFc5Ztx2UpVK9YSh1jkM9iuvvSRCWwLEW9O90RB";
                                                   url = url + "&date=" + e.date;  
                                                   console.log(url);
                        $myfunc(url);
                                                   });
                  
                  });
