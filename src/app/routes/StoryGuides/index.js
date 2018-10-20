import React, {Component} from 'react';
import BootstrapTable, {SizePerPageDropDown} from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './stories.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import paginationFactory from 'react-bootstrap-table2-paginator';
import SearchBox from '../../../components/SearchBox';
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
            //                         this.props.history.push({pathname: './create-new-story'})
            <div class="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
            <div style={{width: '100%'}}>
               <AppBar className="app-main-header" position="static">
                   <Toolbar>
                        <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>StoryGuides</h4>
                        <SearchBox styleName="d-none d-sm-block"/>
                  </Toolbar>
               </AppBar>
            </div>
               <div className="row  mt-4 mx-2">
               <BootstrapTable bootstrap4 
               keyField="storyname"   
               bordered={ false }  
               data={ products } 
               columns={ columns } 
               pagination={pagination}/>
               </div>
           </div>
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






