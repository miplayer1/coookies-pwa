$(document).ready(function () {
  

 var userFeed = new Instafeed({
  get: 'user',
  tagName:'',
  userId: '6517794829',
  resolution:'standard_resolution' ,
  /**template:'<a  href="{{link}}"><i class="material-icons ">highlight_off</i>{{likes}}<img src="{{image}}" /></a>' ,**/
  template:'<div class="col s6 m4 " style="position: relative;margin: .5rem 0 1rem 0;background-color: #fff;width:33%"><a href="{{link}}"><img style="display: block;border-radius: 2px 2px 0 0;position: relative;left: 0;right: 0;top: 0;bottom: 0;width: 100%;" src="{{image}}"></a><span style="color: #fff;position: ;bottom: 0;left: 0;max-width: 100%;padding: 24px;display: inline-block;height: 32px;font-size: 13px;font-weight: 500;color: rgba(0,0,0,0.6);padding: 0 12px;margin-bottom: 5px;margin-right: 5px;">{{caption}}</span><span style="color: #fff;position: absolute;top: 5px;right: 5px;max-width: 50%;padding: 24px;display: inline-block;height: 32px;font-size: 13px;font-weight: 500;color:;line-height: 32px;padding: 0 12px;border-radius: 16px;background-color: rgba(0, 0, 0, 0.1);margin-bottom: 5px;margin-right: 5px;">{{likes}}<i class="material-icons">&#xE87E;</i></span><span style="color: #fff;position: absolute;top: 40px;right: 5px;max-width: 50%;padding: 24px;display: inline-block;height: 32px;font-size: 13px;font-weight: 500;color:;line-height: 32px;padding: 0 12px;border-radius: 16px;background-color: rgba(0, 0, 0, 0.1);margin-bottom: 5px;margin-right: 5px;">{{comments}}<i class="material-icons">&#xE0CB;</i></span></div>' ,           
  accessToken: '6517794829.6be0407.cf57348e27e148cfb2b1a038076a1a9c' ,
});
console.log(userFeed);
userFeed.run();
})

