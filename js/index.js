window.addEventListener('scroll', function() {
  if (window.pageYOffset > 70) {
    document.getElementsByClassName('sidenav')[0].classList.add('sidenav-fix');
  } else {
    document.getElementsByClassName('sidenav')[0].classList.remove('sidenav-fix');
  }
});
