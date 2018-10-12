import React, {Component} from 'react';
import  SearchBar from '@opuscapita/react-searchbar';
import BootstrapTable, {SizePerPageDropDown} from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import './stories.css';

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
            <body class="container">
               <div class="container">
               <div className="row mt-3">
                  <div className="col-md-6"/>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                     <button className="createNewButton" onClick={() => {}}>Create New StoryGuide</button>
                  </div>
               </div>
               <div className="row rowSearch">
                  <div className="col col-md-6">
                   <h3 class="storyGuides">Story Guides</h3>
                  </div>
                  <div className="col col-md-6">
                    <SearchBar
                    onSearch={(text) => {}}
                    className="serchBar"/>
                  </div>
               </div>
               <BootstrapTable bootstrap4 keyField="storyname"   bordered={ false }  data={ products } columns={ columns } pagination={pagination} />
               </div>
            </body>
        )
    }
                     
}