import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToDoList from '../../../components/todo/ToDoList';
import {arrayMove} from 'react-sortable-hoc';
import {Alert} from 'reactstrap';

import './createnewstory.css';

export default class CreateNewStory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toDos: [""],
            Question1: "",
            name: "",
            description: "",
            errorText: "",
            isShowError: false
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
        error != "" ? this.setState({isShowError: true, errorText: error}) : window.alert('Thank you for Sumbitting')
    }

    render() {
        const {errorText, isShowError} = this.state;
        return (
          <div className="container-fluid" style ={{paddingLeft: 0, paddingRight: 0, backgroundColor: '#F8F9FA', minHeight: '100%'}}>
            <div style={{width: '100%'}}>
               <AppBar className="app-main-header" position="static">
                   <Toolbar>
                        <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Create New Campaign</h4>
                  </Toolbar>
               </AppBar>
            </div>
            <Alert color="danger" isOpen={isShowError} toggle={(isOpen) => {
              this.setState({errorText: "", isShowError: false})
            }} className="bg-secondary text-white shadow-lg">{errorText}</Alert>
            <div className="container-fluid" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
            <Card className="responsiveWidth" style={{marginTop: 20}}>
            <h3 style={{marginLeft: 10, marginTop: 10}}>Campaign Details</h3>
                        <TextField fullWidth 
                                   style={{width: 'calc(100% - 20px)', marginLeft: 10, marginTop: 10}}
                                   value={this.state.name} 
                                   onChange={(event) => {this.setState({name: event.target.value})}}
                                   label="Name"
                                   margin="normal"/>
                         <TextField 
                                   multiline rowsMax="4" 
                                   style={{marginLeft: 10,marginBottom: 30, width: 'calc(100% - 20px)'}}
                                   value={this.state.description}
                                   onChange={(event) => {this.setState({description: event.target.value})}}
                                   label="Description"
                                   margin="normal"/>
                </Card>
                <Card className="responsiveWidth" style={{marginTop: 20, padding: 10}}>
                      <div className="row mt-2">
                          <div className="col-sm-6 col-xs-12">
                              <h3 className="float-left">Campaign Cues</h3>
                          </div>
                          <div className="col-sm-6 col-xs-12">
                          <Button 
                                onClick={() => {
                                    if (this.state.toDos.length < 3) {
                                         let {toDos} = this.state;
                                         toDos.push("");
                                         this.setState({toDos: toDos})
                                    }
                                  }}
                                  disabled={this.state.toDos.length == 3}
                                  style={{float: 'right', marginBottom: 10, color: this.state.toDos.length == 3 ? 'gray' : '#3f51b5'}}>+AddMore</Button>
                          </div>
                      </div>
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
                </Card>
                <div className="responsiveWidth" style={{height: 50, display: 'flex',
                              flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20, alignItems: 'center'}}>
                              <Button style={{color: 'white', 
                                     width: '30%',
                                     backgroundColor: '#3f51b5'}} 
                                onClick={() => {this.validateAndPerformApiCall()}}>SUBMIT</Button>
                </div>
            </div>
         </div>
        )
    }
}