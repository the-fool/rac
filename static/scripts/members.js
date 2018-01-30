const $memberTiles = $('.member-tile');
$memberTiles.hover(showDetails);
$memberTiles.click(showDetails);

function showDetails() {
  const el$ = $(this);

  $memberTiles.not(el$).removeClass('show');

  if (el$.hasClass('show')) {
    return;
  }

  // temporarily nil the anchor href
  el$.find('a').each(function() {
    const a$ = $(this);
    const trueHref = a$.attr('href');
    a$.attr('href', 'javascript:void(0)');
    setTimeout(() => a$.attr('href', trueHref), 10);
  });
  
  el$.addClass('show');
}