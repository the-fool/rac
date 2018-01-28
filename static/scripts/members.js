const $memberTiles = $('.member-tile');
$memberTiles.click(function() {
  $memberTiles.removeClass('show');
  $(this).addClass('show');

});