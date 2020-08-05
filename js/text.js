var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    // var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
    var a = new Array("要想改变我们的人生","首先要改变我们的心态。","务须咬牙厉志", "蓄其气而长其志",
      "切不可恭然自馁也","患难与困苦是磨练人格的最高学府。","只有创造，才是真正的享受。",);
    var $i = $("<span/>").text(a[a_idx]);
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 28,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#ff7a45"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function() {
      $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});
