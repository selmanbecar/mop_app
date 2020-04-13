import React, { Component } from 'react';
import axios from 'axios';
import AnswerTable from './answer-table';

export default class Answer extends Component {

    constructor(props) {
        super(props);
        this.state = { answersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/answers')
            .then(res => {
                this.setState({ answersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    answerTable() {
        return this.state.answersCollection.map((data, i) => {
            return <AnswerTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td></td>
                                <td></td>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.answerTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}