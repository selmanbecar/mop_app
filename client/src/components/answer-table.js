import React, { Component } from 'react';

class AnswerTable extends Component {

   
    render() {
        return (
            <tr>
                
                <td>
                    {this.props.obj.content}
                </td>
                
            </tr>
        );
    }
}

export default AnswerTable;