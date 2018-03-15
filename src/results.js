import React, { Component } from 'react';
import getCoinPrice from '../api';
import List from './list.js';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: this.props.match.params.query,
      result: null,
      error: false
    }
  }

  componentDidMount() {
    getCoinPrice(this.state.query).then(function(response) {
      this.setState({result: response})
    }.bind(this)).catch(function(err) {
      this.setState({
        result:"Error loading results. Please try again.",
        error: true
      })
    }.bind(this))
  }


  render() {
    return (
      <div>
				<Header/>
					<List list={this.state.result} iserror={this.state.error} query={this.state.query}/>
			</div>
    )
  }
}


export default Results;
*/
