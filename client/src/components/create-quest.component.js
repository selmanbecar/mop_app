import React, { Component } from 'react';
import axios from 'axios';

export default class CreateQuest extends Component {

    constructor(props) {
        super(props)

        
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            content: ''
            
        }
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value })
    }

    onChangeContent(e) {
        this.setState({ content: e.target.value })
    }

    

    onSubmit(e) {
        e.preventDefault()

        const questionObject = {
            title: this.state.title,
            content: this.state.content
            
        };

        axios.post('http://localhost:5000/questions', questionObject)
        .then(response => { 
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        });

        this.setState({ title: '', content: '' })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add title</label>
                        <input type="text" value={this.state.title} onChange={this.onChangeTitle} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add content</label>
                        <input type="text" value={this.state.content} onChange={this.onChangeContent} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Question" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}