module.exports = function(app) {
  app.get('/', function(req, res) {
    return res.render("" + __dirname + "/timeline.jade", {
      title: 'Welcome'
    });
  });
  return app.get('/post', function(req, res) {
    var posts, quotes;
    posts = [
      'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute <span class="verified tip" title="Valid Argument">irure dolor</span> in reprehenderit in voluptate velit ess', 'e\
    	cillum dolore eu fugiat nulla pariatur. Excepteur sint <span class="fallacy tip" title="Fallacious Shit">occaecat cupidatat</span> non\
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ];
    quotes = [
      'Temporary feature: Highlight a piece of text and press one of the hotkeys below\
		<br/>\
		<br/>Hotkeys:\
		<br/>F → Fallacy\
		<br/>V → Verified\
		<br/>B → Bias\
		<br/>\
		<br/>This is a placeholder for a random quotes about rationality education\
		', 'Carved in effect', 'Contradictions do not exist. Whenever you think you are facing a contradiction, check your premises. You will find that one of them is wrong.', 'When people are bad at math, they know it, because they get the wrong answers on tests. But when people are bad at open-mindedness they don\'t know it.'
    ];
    return res.render("" + __dirname + "/post.jade", {
      title: 'Welcome',
      posts: posts,
      quote: quotes[Math.floor(Math.random() * quotes.length)]
    });
  });
};