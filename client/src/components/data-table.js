import React, { Component } from 'react';

class DataTable extends Component {

    constructor(props) {
        super(props);
        this.state = { liked: false };

      }
      
      _onClick = e => {
        this.setState({ liked: true });
        this.props.obj.likes ++
        
      }
      
    render() {
        const label = this.state.liked ? 'Liked' : 'Like';
        return (
            <tr>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.content}
                </td>
                <td>
                    <button onClick={this._onClick} disabled={this.state.liked}>{label}{this.props.obj.likes}</button>
                </td>
                <td>
                    <a href="http://localhost:3000/answers">Answers</a>
                </td>
            </tr>
        );
    }
}

export default DataTable;