import React, { Component } from 'react';
import axios from 'axios';

export default class CreateAnswer extends Component {

    constructor(props) {
        super(props)

        
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            
            content: ''
        }
    }

   

    onChangeContent(e) {
        this.setState({ content: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const answerObject = {
           
            content: this.state.content
        };

        axios.post('http://localhost:3000/answers', answerObject)
        .then(response => { 
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });

        this.setState({ content: '' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                   
                    <div className="form-group">
                        <label>Add content</label>
                        <input type="text" value={this.state.content} onChange={this.onChangeContent} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Answers" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}