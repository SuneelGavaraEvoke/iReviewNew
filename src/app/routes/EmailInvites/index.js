import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBox from '../../../components/SearchBox';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './email.css';

export default class EmailInvites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            page: 0,
            rowsPerPage: 5,
            data: [
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
                    "storyname": "Story 5",
                    "date": "May 5, 2018",
                    "invites": "5",
                    "responsed": "5"
                 },
                 {
                    "storyname": "Story 6",
                    "date": "June 6, 2019",
                    "invites": "6",
                    "responsed": "6"
                 }
            ]
        }
    }
    onChangeText = (event) => {
        this.setState({searchText: event.target.value})
    }
    render() {
        const {data, page, rowsPerPage, searchText} = this.state;
        return (
            <div class="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
                <div style={{width: '100%'}}>
                   <AppBar className="app-main-header" position="static">
                       <Toolbar>
                            <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Email Invites</h4>
                            <SearchBox onChange={this.onChangeText} value={searchText} styleName="d-none d-sm-block"/>
                      </Toolbar>
                   </AppBar>
                </div>
                <div className="row mt-4 mx-2">
                   <Paper style={{width: '100%', display: 'flex', padding: 0, overflow: 'auto'}}>
                      <Table>
                          <TableHead>
                              <TableRow style={{backgroundColor: 'black'}}>
                                  <TableCell style={{color: 'white', fontSize: 15}}>StoryName</TableCell>
                                  <TableCell style={{color: 'white', fontSize: 15}}>Date</TableCell>
                                  <TableCell style={{color: 'white', fontSize: 15}}>Invites</TableCell>
                                  <TableCell style={{color: 'white', fontSize: 15}}>Responded</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody> {
                              data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((value, index) => {
                                  return (
                                      <TableRow style={{backgroundColor: index % 2 == 0 ? '#FAFAFA' : 'white'}}>
                                          <TableCell>{value.storyname}</TableCell>
                                          <TableCell>{value.date}</TableCell>
                                          <TableCell>{value.invites}</TableCell>
                                          <TableCell>{value.responsed}</TableCell>
                                      </TableRow>
                                  )
                              })
                          }
                          </TableBody>
                          <TablePagination
                          count={data.length}
                          backIconButtonProps={{'aria-label': 'Previous Page'}}
                          nextIconButtonProps={{'aria-label': 'Next Page'}}   
                          component="div"                 
                          page={page}
                          rowsPerPage={rowsPerPage}
                          onChangePage={(event, page) => {this.setState({page})}}
                          onChangeRowsPerPage={(event) => {this.setState({rowsPerPage: event.target.value})}}
                          />
                      </Table>
                   </Paper>
                </div>
            </div>
        )
    }
}