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
import Paper from '@material-ui/core/Paper';
import SearchBox from '../../../components/SearchBox';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
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
            searchText: "",
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
    handleOnClick = () => {
        this.props.history.push('./video-details');
    }
    handleChangePage = (event, page) => {
        this.setState({page})
    }
    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage: event.target.value})
    }
    onChangeText = (event) => {
        this.setState({searchText: event.target.value})
    }
      render() {
         const {page, rowsPerPage, data, searchText} = this.state;
        return (
            <div class="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
            <div style={{width: '100%'}}>
             <AppBar className="app-main-header" position="static">
              <Toolbar>
                  <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Videos</h4>
                  <SearchBox value={searchText} onChange={this.onChangeText} styleName="d-none d-sm-block"/>
              </Toolbar>
             </AppBar>
            </div>
            <div className="row mt-4 mx-2">
              <div className="col-xs-12 col-sm-12 col-md-12">
              <Paper style={{width: '100%', display: 'flex', marginTop: 20, overflow: 'auto'}}>
                <Table>
                    <TableHead style={{backgroundColor: 'black'}}>
                        <TableRow>
                            <TableCell style={{color: 'white', fontSize: 15}}>StoryName</TableCell>
                            <TableCell style={{color: 'white', fontSize: 15}}>Count</TableCell>
                            <TableCell style={{color: 'white', fontSize: 15}}>Created Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> {
                        data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((value, index) => {
                            return (
                                <TableRow style={{backgroundColor: index % 2 == 0 ? '#FAFAFA' : 'white'}} onClick={this.handleOnClick}>
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
             </Paper>
              </div>
            </div>
            </div>
        )
    }
}