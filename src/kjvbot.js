import $ from 'jquery'
import M from 'materialize-css'
import './kjvbot.css';

var jQuery = $;
var kjvBot = {
  'results': [],
  'data': {
    'books': ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"],
    'verses': []
  }
};  

/**
 * Initialize page components
 */
document.addEventListener('DOMContentLoaded', function() 
{
  /**
   * Ctrl+f - Search
   */
  $(window).bind('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
      switch (String.fromCharCode(e.which).toLowerCase()) {
        case 'f':
          e.preventDefault();
          window.scrollTo(0,0);
          $('#kjvBot').select().focus();
          break;
      }
    }
    return;
  });

  /**
   * Floating Action Menu
   */
  
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});

  elems = document.querySelectorAll('.fixed-action-btn');
  var fixedActionButtons = M.FloatingActionButton.init(elems, {
    'hoverEnabled': false,
  });

  $('#floatingActionMenu .searchBtn').on('click', function(e) {
    e.preventDefault();
    window.scrollTo(0,0);
    $('#kjvBot').select().focus();
    fixedActionButtons[0].close();
    return false;
  })

  $('.toTopBtn').on('click', function(e) {
    e.preventDefault();
    window.scrollTo(0,0);
    fixedActionButtons[0].close();
    return false;
  })

  $('.toBottomBtn').on('click', function(e) {
    e.preventDefault();
    window.scrollTo(0,document.body.scrollHeight);
    fixedActionButtons[0].close();
    return false;
  })

});

/**
 * Import Json data
 */

$.getJSON('https://virtualimmortal.github.io/kjvbot/data/kjv-verses.json', function(json) 
{
  kjvBot.data.verses = json; 
  console.log(kjvBot);
  $('#loadingOverlay').fadeOut(600, function() { $(this).css('display', 'none')});
  $('#kjvBot').focus();
});


/**
 * Search and sort results in to alphabetical array
 */
kjvBot.search = function(term) {
  var i;
  var classname;
  var sub;
  var parent = this;

  kjvBot.results = [];

  $.each( kjvBot.data.verses, function( key, verse ) {
     var v = verse.verse;
     var regex = new RegExp( term, 'ig' );
     if (v[4].match(regex))
     {
       var friendlyVid = kjvBot.friendlyVid(v);
       //var markup = v[4].replace(regex, '<span class="hilight">'+regex+'</span>');
       var markup = v[4].replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);
        kjvBot.results.push({
           'verseId': v[0],
           'friendlyVid': friendlyVid,
           'markup': markup,
        })
     }
     
  });

  //kjvBot.results.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  this.showSearchResults();
}


/**
 * Display search results
 */
kjvBot.showSearchResults = function() {
  var html = "<div>";
  var i;

  // loop through the array holding results 
  // this will then get the name and write markup for each result
  for (i = 0; i < this.results.length; i++) 
  {
     var html = html + `<div class="verse-result-container"><a href="#!" class="verse-result" data-key="${this.results[i].verseId}"><div class="markup">${this.results[i].markup}</div><div class="reference">${this.results[i].friendlyVid}</div></a><div class="verse-nav"><a class="btn btn-copy left waves-effect"><i class="fa fa-clone"></i></a><a class="btn btn-videos left waves-effect"><i class="fab fa-youtube"></i></a><a class="btn btn-close right waves-effect"><i class="fa fa-window-minimize"></i></a></div></div>`
  }
  html += '</div>';
  // put the markup of the results on the page
  $('#results').html('');
  $('#results').append(html);
  $('#count').html('('+this.results.length + ' results found)');

  $('.verse-result').on('click', function() 
  {
    var $parent = $(this).closest('.verse-result-container');
    if ($parent.hasClass('expanded')) return;
    
    $parent.toggleClass('expanded');

     return false;
  });

  $('.verse-nav .btn-copy').on('click', function() 
  {
    var $parent = $(this).closest('.verse-result-container').find('a.verse-result');
    var verse = $('.markup',$parent).text();
    var reference = $('.reference',$parent).text();
    copyText(verse+"\n"+reference);
    notify('<div style="text-align: center; font-size: 1.2em; padding: 1em;">Copied </div><div >'+$parent.html()+'</div>');

     return false;
  });

  $('.verse-nav .btn-close').on('click', function() 
  {
    var $parent = $(this).closest('.verse-result-container');
    $parent.removeClass('expanded');
    return false;
  });

  $('body').removeClass('loading');
}


kjvBot.friendlyVid = function(verse) {
  return this.data.books[verse[1]]+' '+verse[2]+':'+verse[3];
}

function copyText(text) 
{
   var input = document.createElement('textarea');
   document.body.appendChild(input);
   input.value = text;
   input.select();
   document.execCommand('copy',false);
   input.remove();
}


function notify(message)
{
   M.toast({
      html: message,
      displayLength: 5000
   });
}


export default kjvBot
