import React from 'react'
import SearchBooks from './SearchBooks'
import WantToRead from './WantToRead'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import './App.css'

class ListBooks extends React.Component {
  // static propTypes = {
  //   books: PropTypes.array.isRequired
  // }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render() {
    return (

      <div>
        {this.props.showSearchPage ? (
            <SearchBooks searchQuery={this.state.query}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading/>
                <WantToRead/>
                <Read />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ListBooks