import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
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
import {EmailInvitesData} from '../../Utility/Data';

export default class EmailInvites extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            page: 0,
            rowsPerPage: 5,
            header: ["Campaign Name", "Date", "Total Invites", "Total Responses"]
        }
    }
    onChangeText = (event) => {
        this.setState({searchText: event.target.value})
    }
    render() {
        const {page, rowsPerPage, searchText, header} = this.state;
        return (
            <div class="container-fluid paddingZero" style={styles.mainView}>
                   <AppBar className="app-main-header" position="static">
                       <Toolbar>
                            <h4 className="mb-0 mr-auto" style={styles.font20}>Email Invites</h4>
                            <SearchBox onChange={this.onChangeText} value={searchText} styleName="d-none d-sm-block"/>
                      </Toolbar>
                   </AppBar>
                <div className="row mt-4 mx-2">
                   <Paper className="mx-4" style={styles.paper}>
                      <Table style={styles.width100}>
                          <TableHead>
                              <TableRow style={styles.tableRowHead}>
                                  {
                                      header.map(value => <TableCell style={styles.tableCellHead}>{value}</TableCell>)
                                  }
                                  <TableCell/>
                              </TableRow>
                          </TableHead>
                          <TableBody> {
                              EmailInvitesData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                              .map((value, index) => {
                                  return (
                                      <TableRow style={{backgroundColor: index % 2 == 0 ? '#FAFAFA' : 'white'}}>
                                          <TableCell>{value.storyname}</TableCell>
                                          <TableCell>{value.date}</TableCell>
                                          <TableCell>{value.invites}</TableCell>
                                          <TableCell>{value.responsed}</TableCell>
                                          <TableCell>
                                              <Button style={styles.inviteButton} onClick={() => {}}>Invite</Button>
                                          </TableCell>
                                      </TableRow>
                                  )
                              })
                          }
                          </TableBody>
                          <TablePagination
                          style={{display: 'flex'}}
                          count={EmailInvitesData.length}
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
const styles = {
    mainView: {
        backgroundColor: '#F8F9FA'
    },
    font20: {
        fontSize: 20
    },
    paper: {
        width: '100%', 
        display: 'flex', 
        padding: 0, 
        overflow: 'auto'
    },
    width100: {
        width: '100%'
    },
    tableRowHead: {
        backgroundColor: 'gray'
    },
    tableCellHead: {
        color: 'white', 
        fontSize: 15
    },
    inviteButton: {
        backgroundColor: '#3f51b5',
         color: 'white', fontSize: 10
    }
}