import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Toolbar from '@material-ui/core/Toolbar';
import paginationFactory from 'react-bootstrap-table2-paginator';
import SearchBox from '../../../components/SearchBox';
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
]
export default class VideoListings extends Component {


    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5,
            data: [{
                name: "Story 1",
                count: "10",
                createdDate: "Jan 12, 2018"
            }, {
                name: "Story 2",
                count: "11",
                createdDate: "Jan 13, 2018"
            }, {
                name: "Story 3",
                count: "12",
                createdDate: "Jan 14, 2018"
            }, {
                name: "Story 4",
                count: "13",
                createdDate: "Jan 15, 2018"
            }, {
                name: "Story 5",
                count: "14",
                createdDate: "Jan 16, 2018"
            }, {
                name: "Story 6",
                count: "15",
                createdDate: "Jan 17, 2018"
            }, {
                name: "Story 7",
                count: "16",
                createdDate: "Jan 18, 2018"
            }, {
                name: "Story 8",
                count: "17",
                createdDate: "Jan 19, 2018"
            }, {
                name: "Story 9",
                count: "17",
                createdDate: "Jan 20, 2018"
            }, {
                name: "Story 10",
                count: "17",
                createdDate: "Jan 21, 2018"
            }, {
                name: "Story 10",
                count: "17",
                createdDate: "Jan 21, 2018"
            }, {
                name: "Story 10",
                count: "17",
                createdDate: "Jan 21, 2018"
            }, {
                name: "Story 10",
                count: "17",
                createdDate: "Jan 21, 2018"
            }, {
                name: "Story 10",
                count: "17",
                createdDate: "Jan 21, 2018"
            }, {
                name: "Story 10",
                count: "17",
                createdDate: "Jan 21, 2018"
            }]
        }
    }
    handleChangePage = (event, page) => {
        this.setState({page})
    }
    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage: event.target.value})
    }
     render() {
         const {page, rowsPerPage, data} = this.state;
        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                this.props.history.push({pathname: './video-details'})
          }
        }
        // const pagination = paginationFactory({
        //     page: 1,
        //     sizePerPage: 5,
        //     sizePerPageList: [ {
        //         text: '5', value: 5
        //       }, {
        //         text: '10', value: 10
        //       }, {
        //         text: 'All', value: products.length
        //       } ]
        // });          

        return (
            <div class="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
            <div style={{width: '100%'}}>
             <AppBar className="app-main-header" position="static">
              <Toolbar>
                  <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Videos</h4>
                  <SearchBox styleName="d-none d-sm-block"/>
              </Toolbar>
             </AppBar>
            </div>
            <div className="row mt-4 mx-2">
              <div className="col-xs-12 col-sm-12 col-md-12">
              <Card style={{overflow: 'visible'}}>
                <Table>
                    <TableHead style={{backgroundColor: 'gray'}}>
                        <TableRow>
                            <TableCell style={{color: 'white', fontSize: 15}}>StoryName</TableCell>
                            <TableCell style={{color: 'white', fontSize: 15}}>Count</TableCell>
                            <TableCell style={{color: 'white', fontSize: 15}}>Created Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> {
                        data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(value => {
                            return (
                                <TableRow>  
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.count}</TableCell>
                                <TableCell>{value.createdDate}</TableCell>
                                </TableRow>    
                            )
                        })
                    }
                    </TableBody>
                    <TablePagination
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}                    
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </Table>
             </Card>
              </div>
            </div>
            </div>
        )
    }
}