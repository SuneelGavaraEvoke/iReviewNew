import React, {Component} from 'react';
import BootstrapTable, {SizePerPageDropDown} from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBox from '../../../components/SearchBox';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './email.css';

function duplicateButton(cell, row) {
    return (
        <button style={{backgroundColor: 'green', color: 'white', width: 100, height: 30}}
         onClick={() => {window.alert('Invite Button Clicked')}}>Invite</button>
    )
}
const columns = [
   
    {
        dataField: 'storyname',
        text: 'StoryName',
        headerAlign: 'left', 
        headerStyle: {
            overflow: 'scroll'
        }
    },
    {
        dataField: 'date',
        text: 'Created Date',
        headerAlign: 'left', 
        headerStyle: {
            overflow: 'scroll'
        }
    }, 
    {
        dataField: 'invites',
        text: 'InvitesSent',
        headerAlign: 'left', 
        headerStyle: {
            overflow: 'scroll'
        }
    },
    {
        dataField: 'responsed',
        text: 'Invites Responsed',
        headerAlign: 'left', 
        headerStyle: {
            overflow: 'scroll'
        }
    },
    {
        dataField: 'invite',
        text: '',
        formatter: duplicateButton,
    }
]
const products = [
    {
        "storyname": "Story 1",
        "date": "Jan 1, 2018",
        "invites": "1",
        "responsed": "0"
    },
    {
        "storyname": "Story 2",
        "date": "Feb 2, 2018",
        "invites": "2",
        "responsed": "1"
     }, 
     {
        "storyname": "Story 3",
        "date": "Mar 3. 2018",
        "invites": "3",
        "responsed": "2"
     }, 
     {
        "storyname": "Story 4",
        "date": "Apr 4, 2018",
        "invites": "4",
        "responsed": "3"
     }, 
     {
        "storyname": "Story 4",
        "date": "May 5, 2018",
        "invites": "4",
        "responsed": "4"
     },
     {
        "storyname": "Story 4",
        "date": "June 6, 2019",
        "invites": "4",
        "responsed": "5"
     }
]
export default class EmailInvites extends Component {

    constructor(props) {
        super(props);
    }
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
            <div class="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                <div style={{width: '100%'}}>
                   <AppBar className="app-main-header" position="static">
                       <Toolbar>
                            <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Email Invites</h4>
                            <SearchBox styleName="d-none d-sm-block"/>
                      </Toolbar>
                   </AppBar>
                </div>
                <div className="row mt-4 mx-2">
                <BootstrapTable bootstrap4 keyField="storyname"  
                bordered={ false }  
                data={ products } 
                columns={ columns } 
                pagination={pagination} />
               </div>
            </div>
        )
    }
}