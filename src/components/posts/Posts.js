import React, {Component} from 'react';
import {jsonAxios} from "../../services/json.axios";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }

    }

    componentDidMount() {
        jsonAxios.getAllPosts().then(({data}) => {this.setState({posts:data})})
    }


    render() {
        return (
            <div>
                {
                    this.state.posts.map(value =>
                        <div key={value.id}>
                            ID:{value.id} <br/>
                            Title:{value.title} <br/>
                            body:{value.body} <br/>
                            <hr/>
                        </div>)
                }
            </div>
        );
    }
}

export default Posts;