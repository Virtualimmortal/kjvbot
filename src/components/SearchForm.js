
import $ from 'jquery'
import kjvBot from '../kjvbot'


const SearchForm = () => {
   var timer = {};
   return (
      <div className="SearchForm">
         <div className="container">
            <div className="row center">
               <h3><i className="fa fa-search"></i> Bible Search</h3>

               <div className="form-group">
                     <input 
                     id="kjvBot" 
                     name="kjvBot"
                     className="form-control"
                     type="text" 
                     defaultValue="" 
                     placeholder="Search" 
                     onKeyUp={(e) => ((e.currentTarget.value.length > 3) || ((e.key === 'Enter') && (e.currentTarget.value.length > 1))) ? SearchForm.updateSearch(e.currentTarget.value) : {}}
                     />
               </div>

               <div id="count"></div>

            </div>

            <div id="results" className="row"></div>
         </div>

         <div id="floatingActionMenu" className="fixed-action-btn">
            <a className="sidenav-trigger btn-floating btn-large grey darken-3" data-target="slide-out">
               <i className="fa fa-bars"></i>
            </a>
         </div>
      
      </div>
   )
}

SearchForm.updateSearch = function(text)
{
   clearTimeout(this.timer);
   var term = text.toLowerCase();
   this.timer = setTimeout(function()
   { 
         kjvBot.search(term); 
   }, 500);

};


export default SearchForm
