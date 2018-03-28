const $memberTiles = $('.member-tile');

function showDetails() {
  const el$ = $(this);

  $memberTiles.not(el$).removeClass('show');

  if (el$.hasClass('show')) {
    return;
  }

  // temporarily nil the anchor href
  el$.find('a').each(function () {
    const a$ = $(this);
    const trueHref = a$.attr('href');
    a$.attr('href', 'javascript:void(0)');
    setTimeout(() => a$.attr('href', trueHref), 10);
  });

  el$.addClass('show');
}

$(function () {
  //setUpTiles();
});

function setUpTiles() {
  $memberTiles.hover(showDetails);
  $memberTiles.click(showDetails);
  $memberTiles.mouseout(() => $memberTiles.removeClass('show'));
}