import React, {Component} from 'react';
import  SearchBar from '@opuscapita/react-searchbar';
import BootstrapTable, {SizePerPageDropDown} from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './stories.css';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ToDoList from '../../../components/todo/ToDoList';
import {arrayMove} from 'react-sortable-hoc';

function duplicateButton(cell, row) {
    return (
        <button style={{backgroundColor: 'green', color: 'white', width: 100, height: 30}}
         onClick={() => {window.alert('Duplicate Button Clicked')}}>Duplicate</button>
    )
}
const columns = [
   
    {
        dataField: 'storyname',
        text: 'StoryName',
    },
    {
        dataField: 'date',
        text: 'Date Created'
    }, 
    {
        dataField: 'invites',
        text: 'Invites'
    },
    {
        dataField: 'download',
        text: '',
        formatter: duplicateButton
    }
]
const products = [
    {
        "storyname": "Story 1",
        "date": "Jan 1, 2018",
        "invites": "1"
    },
    {
        "storyname": "Story 2",
        "date": "Feb 2, 2018",
        "invites": "2"
     }, 
     {
        "storyname": "Story 3",
        "date": "Mar 3. 2018",
        "invites": "3"
     }, 
     {
        "storyname": "Story 4",
        "date": "Apr 4, 2018",
        "invites": "4"
     }, 
     {
        "storyname": "Story 4",
        "date": "May 5, 2018",
        "invites": "4"
     },
     {
        "storyname": "Story 4",
        "date": "June 6, 2019",
        "invites": "4"
     }
]

export default class StoryGuides extends Component {

    constructor(props) {
        super(props);
        debugger;
        this.state = {
            toDos: [""],
            isShowPopUp: false,
            description: "",
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

    render() {
        const pagination = paginationFactory({
            page: 1,
            sizePerPage: 5,
            sizePerPageList: [ {
                text: '5', value: 5
              }, {
                text: '10', value: 10
              }, {
                text: 'All', value: products.length
              } ]
        });       

        return (
            <body class="container">
               <div class="container">
               <div className="row mt-3">
                  <div className="col-md-6"/>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                     <Button 
                     onClick={() => {
                        const {isShowPopUp} = this.state;
                        this.setState({isShowPopUp: !isShowPopUp})
                     }}
                     style={{float: 'right', height: 30, 
                     borderRadius: 10, backgroundColor: '#BDBDBD', marginRight: 20, fontSize: 15, color: 'black'}}>{`Create New StoryGuide`}
                     </Button>
                  </div>
               </div>
               <Modal isOpen={this.state.isShowPopUp} toggle={this.togglePopup}>
                    <ModalHeader>Create New StoryGuide</ModalHeader>
                    <ModalBody> 
                         <TextField
                         fullWidth
                         value={this.state.name}
                         onChange={(event) => {this.setState({name: event.target.value})}}
                         label="Name"
                         margin="normal"
                         />
                         <TextField
                         multiline
                         rowsMax="4"
                         fullWidth
                         value={this.state.description}
                         onChange={(event) => {this.setState({description: event.target.value})}}
                         label="Description"
                         margin="normal"
                         />
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
                         style={{float: 'right'}}>AddMore</Button>
                         <Button
                         style={{marginTop: 10, marginLeft: 20, marginRight: 20,backgroundColor: 'gray', width: 'calc(100% - 40px)'}}
                         onClick={this.validateAndPerformApiCall}>SUBMIT</Button>
                    </ModalBody>
               </Modal>
               <div className="row rowSearch mt-4">
                  <div className="col col-md-6">
                   <h1 class="storyGuides">Story Guides</h1>
                  </div>
                  <div className="col col-md-6">
                    <SearchBar
                    onSearch={(text) => {}}
                    className="serchBar"/>
                  </div>
               </div>
               <BootstrapTable bootstrap4 
               keyField="storyname"   
               bordered={ false }  
               data={ products } 
               columns={ columns } 
               pagination={pagination}/>
               </div>
            </body>
        )
    }
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
        error != "" ? window.alert(error) : this.togglePopup()
    }
    togglePopup = () => {
        const {isShowPopUp} = this.state;
        this.setState({isShowPopUp: !isShowPopUp, name: "", description: "", toDos: [""]})
    }
}