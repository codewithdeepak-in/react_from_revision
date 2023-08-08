import React,{ Component } from 'react';

//. SetState() is used for mutating the state we can't directly change it using this.state = 'something';


class First extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            keyword: ''
        };
    }


    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    handleChange = (event) => {
        this.setState({
            keyword: event.target.value
        });
    }

    render(){


        return(
            <>
                Hello World From Class Component.
                <br />
                {this.state.count}
                <br />
                <button onClick={this.handleClick}>Click</button>
                <br />
                {this.state.keyword}
                <input type="text" placeholder='Enter Change' onChange={this.handleChange} />

            </>
        )

    }

}

export default First;