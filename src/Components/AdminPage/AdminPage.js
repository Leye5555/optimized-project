import React, { useEffect, useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import './adminPage.css';

function AdminPage() {
   const [quotes, setQuotes] = useState();
   const getQuotes = () => {
     fetch(`https://hot-handsomely-honey.glitch.me/quotes`)
     .then((response) => response.json())
     .then((data) => setQuotes(data));
   };
   
   useEffect(() => {
     getQuotes();
   },[]);

   function handleDeleteQuote(quoteId) {
    fetch('https://hot-handsomely-honey.glitch.me/quotes/' + quoteId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    setQuotes(quotes.filter((quote)=> quote.id !== quoteId));
   }
  return (
    <div className="main_content container">
      <h1 className="admin-page_title">Quotes</h1>
          {quotes?.map((quote)=>{
            return (
              <div id={quote.id} className="admin-page_quote-block" key={quote.id}>
                <div className="admin-page_quote-block-top">
                  <div className="user-info list-style ">
                    <p>{quote.userInput}</p>
                    <p>{quote.email}</p>
                  </div>
                  <div className="form-info">
                    <p className="list-style">{quote.date}</p>
                    <div className="list-style">
                      <p className="option">{quote.selectedOption}</p>
                    </div>
                  </div>
                </div>
                <p className="list-style">{quote.comments}</p>
                <FaTrashAlt onClick={()=>{handleDeleteQuote(quote.id)}} className="delete"/>
              </div>
            )
          })}
    </div>
  )
}

export default AdminPage;