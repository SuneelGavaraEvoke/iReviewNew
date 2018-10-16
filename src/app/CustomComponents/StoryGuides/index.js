import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class CreateStoryGuidePopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "",
            firstQuestion: "",
            secondQuestion: "",
            thirdQuestion: ""
        }
    }
    handleChange = name => {
            return (
                event => {
                    this.setState({
                      [name]: event.target.value,
                    });
                  }
            )
     }

    render() {

        return (
            <div className="backdrop" style={{backdropStyle}}>
                  <div className="modal" style={{modalStyle}}>
                     <div className="row">
                         <form className={classes.container} 
                         noValidate 
                         autoComlete="off">
                             <TextField 
                                 id="standard-multiline-flexible"
                                 label="Description" 
                                 multiline
                                 rowsMax="4"
                                 value={this.state.description}
                                 className={classes.textField}
                                 onChange={this.handleChange('description')}
                                 margin="normal"
                             />
                             <TextField
                                 label="Question One"
                                 value={this.state.firstQuestion}
                                 onChange={this.handleChange('firstQuestion')}/>
                             <TextField 
                                 label="Question Two"
                                 value={this.state.secondQuestion}
                                 onChange={this.handleChange('secondQuestion')}
                             />
                             <TextField 
                                 label="Question Three"
                                 value={this.state.thirdQuestion}
                                 onChange={this.handleChange('thirdQuestion')}
                             />
                         </form>
                     </div>
                  </div>
                  <div className="footer">
                     <button onClick={this.props.onClose}>Close</button>
                  </div>
            </div>
        )
    }
}

CreateStoryGuidePopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
}

export default CreateStoryGuidePopup;
