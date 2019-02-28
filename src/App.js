
import React, { Component } from 'react';

import './App.css';
//import Button from './components/button';
import QuoteGenerator from './components/quotegenerator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';


library.add(faTwitter);

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    quotes:[],
   clicked: false,
   randomQuote: null,
   loading: true
    }
 this.randomQuote = this.randomQuote.bind(this);
 this.assignNewQuote = this.assignNewQuote.bind(this);
  }


getQuotes (){
  const url = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
   //let url = QuotesData;
fetch (url)
 .then (response =>  response.json())
.then (resData => {
  let quotes =resData.quotes
  this.setState({ quotes }, this.assignNewQuote);
})

}

componentDidMount () {
this.getQuotes();
}
assignNewQuote() {
  this.setState({
    clicked:true,
    randomQuote:this.randomQuote(),
    loading: false
  })
}

get selectedQuote() {
return this.state.randomQuote!==null && this.state.randomQuote;
}
randomQuote() {

  return this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
}



  render() {

    return (
    
      <div className="App" id="quote-box">
      { this.selectedQuote ?
    <QuoteGenerator  selectedQuote={this.selectedQuote}
     assignNewQuote={this.assignNewQuote}/> :
     null
      }
    </div>
    );
  }
}

export default App;