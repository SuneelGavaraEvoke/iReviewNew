import React, {Component} from 'react';
import BootstrapTable, {SizePerPageDropDown} from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './stories.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
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
        headerAlign: 'center', 
    },
    {
        dataField: 'date',
        text: 'Date Created',
        headerAlign: 'center', 
    }, 
    {
        dataField: 'invites',
        text: 'Invites',
        headerAlign: 'center', 
    },
    {
        dataField: 'download',
        text: '',
        formatter: duplicateButton,
        headerAlign: 'center', 
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
               <Card style={{overflow: 'visible'}}>
                   {/* <BootstrapTable bootstrap4  keyField="storyname"  
                   rowStyle={{textAlign: 'center'}} 
                   bordered={ false }  
                   data={ products } 
                   columns={ columns } 
                   pagination={pagination}/> */}
               </Card>
               </div>
           </div>
        )
    }
}






