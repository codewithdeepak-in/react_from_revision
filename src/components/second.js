import { Component } from 'react';


class Second extends Component {

    render(){

        return(
            <>  
            
                <h1>Second Component</h1>
                <p >Hello Miss Universe {this.props.name}</p> 
                {/* That how we can access props  */}
                <button onClick={this.props.handleClick}>Click Button</button>
                {/* We can also access Functions too */}
            </>
        )

    }

}


export default Second;