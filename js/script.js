var projects = [ { 'title': 'Memory Game', 'pic': 'http://s21.postimg.org/erdi7s00n/memory_game.png', 'link': 'http://codepen.io/swilsdev/full/YqzJmd' },
                  { 'title': 'Calculator', 'pic': 'http://s21.postimg.org/rzgz7jthz/javascript_calculator.png', 'link': 'http://codepen.io/swilsdev/full/adyvzM' },
                  { 'title': 'Twitch Streams', 'pic': 'http://s11.postimg.org/47jh2pctf/twitch_streams.png', 'link': 'http://codepen.io/swilsdev/full/MKZOPO' },
                  { 'title': 'Pomodoro Clock', 'pic': 'http://s11.postimg.org/g3feicy03/pomodoro_clock.png', 'link': 'http://codepen.io/swilsdev/full/OMpaQB' },
                  { 'title': 'Tic Tac Toe', 'pic': 'http://s7.postimg.org/50e2qsvwr/tic_tac_toe.png', 'link': 'http://codepen.io/swilsdev/full/QyYzOq' },
                  { 'title': 'Local Weather', 'pic': 'http://s18.postimg.org/vzfb6obs9/local_weather.png', 'link': 'http://codepen.io/swilsdev/full/RrMYyN' },
                  { 'title': 'Wikipedia Viewer', 'pic': 'http://s17.postimg.org/4zh83shhb/wikipedia_viewer.png', 'link': 'http://codepen.io/swilsdev/full/pgxPbg' },
                  { 'title': 'Motivational Quotes', 'pic': 'http://s24.postimg.org/pgywtyrud/motivational_quotes.png', 'link': 'http://codepen.io/swilsdev/full/mVVwbe' } ];

$(document).ready(function() {
  loadProjects();
});

function loadProjects() {
  var projectHtml = '';
  for(var i = 0; i < projects.length; i++) {
    projectHtml +=
         '<div class="project-container col-xs-6 col-sm-4 col-md-3 col-lg-2 col-centered">'
      +    '<div class="project-title">'
      +      '<a target="_blank" href="' + projects[i]['link'] + '">'
      +        projects[i]['title'] + '</a>'
      +    '</div>'
      +    '<a target="_blank" href="' + projects[i]['link'] + '">'
      +      '<img class="project-pic" src="' + projects[i]['pic'] + '"/>'
      +    '</a>'
      +  '</div>';
  }
  $('#portfolio').append(projectHtml);
}
