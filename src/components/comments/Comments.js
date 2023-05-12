import React, {Component} from 'react';
import {jsonAxios} from "../../services/json.axios";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        jsonAxios.getAllComments().then(({data}) => this.setState({comments: data}))
    }

    render() {

        return (
            <div>
                {
                    this.state.comments.map(({id, name, body, email}) =>
                        <div key={id}>

                            <hr/>
                            ID:{id} <br/>
                            Email:{email} <br/>
                            Name:{name} <br/>
                            Body:{body} <br/>
                        </div>
                    )
                }

            </div>
        );
    }
}

export default Comments;