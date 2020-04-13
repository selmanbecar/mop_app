import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './data-table';

export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state = { questionsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/questions')
            .then(res => {
                this.setState({ questionsCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.questionsCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
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
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}