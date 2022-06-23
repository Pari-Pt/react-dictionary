import './App.css';
import DictionarySearch from "./DictionarySearch.js";
import bookIcon from "./images/book-girl-icon.svg";

export default function App() {
  return (
    <div className="App">
      <div className="main-heading"><img src={bookIcon} className="book-icon book-icon-left" width="250px"/>Dictionary App<img src={bookIcon} className="book-icon book-icon-right" width="250px"/></div>
      <DictionarySearch defaultKeyword="cheerful" />
      <footer>
      <div>This <a href="https://github.com/Seo-Pt/react-dictionary" target="_blank" rel="noopener noreferrer">open-sourced</a> Dictionary was coded by <a href="https://confident-elion-25e30f.netlify.app/index.html" target="_blank" rel="noopener noreferrer">Seonah Nathali</a></div>
      </footer>
    </div>
  );
}

