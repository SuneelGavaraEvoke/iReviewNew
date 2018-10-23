import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './stories.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import SearchBox from '../../../components/SearchBox';

export default class StoryGuides extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            page: 0,
            rowsPerPage: 5,
            data : [
                {
                    "storyname": "Campaign 1",
                    "date": "Jan 1, 2018",
                    "invites": "1"
                },
                {
                    "storyname": "Campaign 2",
                    "date": "Feb 2, 2018",
                    "invites": "2"
                 }, 
                 {
                    "storyname": "Campaign 3",
                    "date": "Mar 3. 2018",
                    "invites": "3"
                 }, 
                 {
                    "storyname": "Campaign 4",
                    "date": "Apr 4, 2018",
                    "invites": "4"
                 }, 
                 {
                    "storyname": "Campaign 4",
                    "date": "May 5, 2018",
                    "invites": "4"
                 },
                 {
                    "storyname": "Campaign 4",
                    "date": "June 6, 2019",
                    "invites": "4"
                 }
            ]
        }
    }

    handlePageChange = (event, page) => {
        this.setState({page})
    }
    handleRowsPerPage = (event) => {
        this.setState({rowsPerPage: event.target.value})
    }
    onChangeText = (event) => {
        this.setState({searchText: event.target.value})
    }
    render() {
        const {data, page, rowsPerPage, searchText} = this.state;
        return (
            <div class="container-fluid" style={{paddingLeft: 0, paddingRight: 0, backgroundColor: '#F8F9FA'}}>
            <div style={{width: '100%'}}>
               <AppBar className="app-main-header" position="static">
                   <Toolbar>
                        <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Campaign</h4>
                        <SearchBox onChange={this.onChangeText} value={searchText} styleName="d-none d-sm-block"/>
                        <Button style={{color: 'white', marginLeft: 10}}
                        onClick={() => {this.props.history.push('./create-new-story')}}
                        >Create New Campaign</Button>
                  </Toolbar>
               </AppBar>
            </div>
               <div className="row mx-2">
               <div className="col-xs-12 col-sm-12 col-md-12">

              <Paper style={{width: '100%', display: 'flex', marginTop: 20, overflow: 'auto'}}>
                   <Table>
                       <TableHead>
                           <TableRow style={{backgroundColor: 'gray'}}>
                               <TableCell style={{color: 'white', fontSize: 15}}>Campaign Name</TableCell>
                               <TableCell style={{color: 'white', fontSize: 15}}>Created Date</TableCell>
                               <TableCell style={{color: 'white', fontSize: 15}}>Total Invites</TableCell>
                           </TableRow>
                       </TableHead>
                       <TableBody>{
                           data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                           .map((value, index) => {
                               return (
                                <TableRow style={{backgroundColor: index % 2 == 0 ? '#FAFAFA' : 'white'}}>
                                <TableCell>{value.storyname}</TableCell>
                                        <TableCell>{value.date}</TableCell>
                                        <TableCell>{value.invites}</TableCell>
                                   </TableRow>
                               )
                           })
                       }
                       </TableBody>
                       <TablePagination
                       style={{display: 'flex'}}
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
                        onChangePage={this.handlePageChange}
                        onChangeRowsPerPage={this.handleRowsPerPage}
                       />
                   </Table>
               </Paper>
               </div>
               </div>
           </div>
        )
    }
}






