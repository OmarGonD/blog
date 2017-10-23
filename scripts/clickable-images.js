<script language="JavaScript">
$(function() {
  /* Lets the user click on the images to view them in full resolution. */
  $("div.figure img").wrap(function() {
    var link = $('<a/>');
    link.attr('href', $(this).attr('src'));
    link.attr('title', $(this).attr('alt'));
    link.attr('target', '_blank');
    return link;
  });
});
</script>