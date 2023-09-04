const URL = "https://type.fit/api/quotes";
const data = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      quotes: []
    }
  }
  componentDidMount() {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        quotes: data
      });
    });
  }
  handleClick() {
    const newIndex = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      index: newIndex
    });
  }
  render() {
    const currentQuote = this.state.quotes[this.state.index];
    return(
    <div className="row align-items-center" id="container">
      <div className="col-md-6 offset-md-3 blockquote" id="quote-box">
        <h4 id="text">{currentQuote?.text}</h4>
        <p class="text-end" id="author">— {currentQuote?.author}</p>
        <div className="d-flex justify-content-between">
          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" className="btn btn-social">Share <i class="bi bi-twitter"></i></a>
          <button onClick={this.handleClick.bind(this)} id="new-quote" className="btn btn-primary"><i class="bi bi-arrow-clockwise"></i> New quote</button>
        </div>
      </div>
    </div>
    )
  }
}
  
ReactDOM.render(<App />, document.getElementById('app'));