if ($.browser.msie) {
  $(document).ready(function() {
    var widths = new Array();
    $("#navbar  #primary .links li a").each(function(i) {
      widths[i] = this.innerHTML.length * parseInt(document.body.currentStyle.fontSize) / 100 * 9;
      if (widths[i] < 90) widths[i] = 90;
    });
    $("#navbar  #primary .links li").each(function(i) {
      this.style.width = widths[i];
    });
  });
}