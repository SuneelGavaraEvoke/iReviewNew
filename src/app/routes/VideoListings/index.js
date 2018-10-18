import React,{Component} from 'react';
import  SearchBar from '@opuscapita/react-searchbar';
import Card from '@material-ui/core/Card';

import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable, {SizePerPageDropDown} from 'react-bootstrap-table-next';
import './VideoListings.css';

const columns = [
    {
        dataField: 'storyname',
        text: 'Name',
        headerAlign: 'center', 
        headerStyle: {
            overflow: 'scroll'
        }
    },
    {
        dataField: 'count',
        text: 'Videos Count',
        headerAlign: 'center', 
        headerStyle: {
            overflow: 'scroll'
        }
    }, 
    {
        dataField: 'createdDate',
        text: 'Videos Count',
        headerAlign: 'center', 
        headerStyle: {
            overflow: 'scroll'
        }
    }, 

]
const products = [
    {
        "storyname": "Story 1",
        "count": "50",
        "createdDate": "Jan 01, 2018"
    },
    {
        "storyname": "Story 2",
        "count": "60",
        "createdDate": "Jan 02, 2018"
     }, 
     {
        "storyname": "Story 3",
        "count": "70",
        "createdDate": "Jan 03, 2018"
     }, 
    //  {
    //     "storyname": "Story 4",
    //     "count": "80",
    //     "createdDate": "Jan 04, 2018"
    //  }, 
    //  {
    //     "storyname": "Story 5",
    //     "count": "90",
    //     "createdDate": "Jan 05, 2018"
    //  }, 
    //  {
    //     "storyname": "Story 4",
    //     "count": "80",
    //     "createdDate": "Jan 06, 2018"
    //  }, 
      
]
export default class VideoListings extends Component {


    constructor(props) {
        super(props);
    }
    render() {

        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                this.props.history.push({pathname: './video-details'})
          }
        }
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
            <div className="container">
            <div className="row rowSearch mt-4" style={{backgroundColor: '#BDBDBD', height: 50, alignItems: 'center'}}>
                  <div className="col col-md-6">
                   <h1 class="storyGuides">Videos</h1>
                  </div>
                  <div className="col col-md-6">
                    <SearchBar
                    onSearch={(text) => {}}
                    className="serchBar"/>
                  </div>
               </div>
            <div className="row mt-4">
              <div className="col-xs-12 col-sm-12 col-md-12">
              <Card style={{overflow: 'visible'}}>
               <BootstrapTable
               rowStyle={{textAlign: 'center'}}
                bootstrap4 
                keyField="storyname"  
                bordered={ false }  
                data={ products } 
                columns={ columns } 
                rowEvents={ rowEvents }
                pagination={pagination} />
             </Card>
              </div>
            </div>
            </div>
        )
    }
}