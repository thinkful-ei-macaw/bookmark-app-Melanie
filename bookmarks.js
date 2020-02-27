/* eslint-disable no-undef */
import store from  './store.js';


//generate view functions
function generateInitialView(bookmarks) {
  const bookmarksHTMLArray = bookmarks.map(bookmarks =>
    `<button class= 'accordion'>${bookmarks.title}<br>${bookmarks.rating}</button>
        <div class='Panel'>
          <p>${bookmarks.id}</p>
          <p>${bookmarks.url}</p>
          <p>${bookmarks.description}</p>
          
        </div>`
  );  
  const bookmarksHTMLString = bookmarksHTMLArray.join('');
  return bookmarksHTMLString;
}

function generateDetailedView() {
  const dropdown = document.getElementsByClassName('accordion');
  let i;
    
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener('click', function() {
      this.classList.toggle('active');
      let panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
    render();
  }
}






function render() {
  let newPage = generateInitialView(store.bookmarks);
  $('#bookmarks').html(newPage);
}

render();


// 

// function generatAddBookmarkView();

// function generateFormErrorView();


// //event listners and handle functions

// handleNewBookmarkSubmit();









