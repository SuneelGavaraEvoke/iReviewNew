import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToDoList from '../../../components/todo/ToDoList';
import {arrayMove} from 'react-sortable-hoc';
import './createnewstory.css';

export default class CreateNewStory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toDos: [""],
            Question1: "",
            name: "",
            description: ""
        }
    }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            toDos: arrayMove(this.state.toDos, oldIndex, newIndex),
        });
    };

    validationObject = () => {

        const {name, description, toDos} = this.state;
        return {
            [`Please Enter Valid Name`]: name != undefined ? name.length > 0 : false,
            [`Please Enter Valid Description`]: description != undefined ? description.length > 0 : false,
            [`Please Enter At Least One Question`]: toDos[0].length > 0 || (toDos[1] != undefined ? toDos[1].length > 0 : false) || (toDos[2] != undefined ? toDos[2].length > 0 : false)
        }
    }

    validateAndPerformApiCall = () => {

        const validationObject = this.validationObject();
        const keys = Object.keys(validationObject);
        let error = "";
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (validationObject[key] == false) {
                error = key;
                break;
            }
        }
        error != "" ? window.alert(error) : window.alert('Thank you for Sumbitting')
    }

    render() {
        return (
          <div className="container-fluid" style ={{paddingLeft: 0, paddingRight: 0}}>
            <AppBar position="static" color="white">
                  <Toolbar>
                      <Typography variant="h3">Create New StoryGuide</Typography>
                  </Toolbar>
            </AppBar>
            <div className="container-fluid" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Card style={{marginTop: 20, width: '70%'}}>
                        <TextField fullWidth 
                                   style={{width: 'calc(100% - 20px)', marginLeft: 10}}
                                   value={this.state.name} 
                                   onChange={(event) => {this.setState({name: event.target.value})}}
                                   label="Name"
                                   margin="normal"/>
                         <TextField 
                                   multiline rowsMax="4" 
                                   style={{marginLeft: 10, width: 'calc(100% - 20px)'}}
                                   value={this.state.description}
                                   onChange={(event) => {this.setState({description: event.target.value})}}
                                   label="Description"
                                   margin="normal"/>
                         <ToDoList
                               style={{height: this.state.toDos.length * 75}}
                               textChanged={(text, index) => {
                                        let arrayValue = this.state.toDos;
                                        arrayValue[index] = text;
                                       this.setState({toDos: arrayValue})
                                 }}
                                onSortEnd={this.onSortEnd}
                                useDragHandle={true}
                                toDos={this.state.toDos}/>
                         <Button 
                                onClick={() => {
                                    if (this.state.toDos.length < 3) {
                                         let {toDos} = this.state;
                                         toDos.push("");
                                         this.setState({toDos: toDos})
                                    }
                                  }}
                                  disabled={this.state.toDos.length == 3}
                                  style={{float: 'right', marginBottom: 20}}>AddMore</Button>
                             <Button style={{color: 'white', marginLeft: 40, 
                                     marginBottom: 10,
                                     width: 'calc(100% - 80px)', 
                                     backgroundColor: '#0000FF'}} 
                                onClick={() => {this.validateAndPerformApiCall()}}>SUBMIT</Button>
            </Card>
            </div>
         </div>
        )
    }
}