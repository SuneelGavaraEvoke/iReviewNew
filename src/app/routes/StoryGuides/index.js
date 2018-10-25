import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './stories.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBox from '../../../components/SearchBox';
import {Campaign} from '../../Utility/Data';

export default class StoryGuides extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            page: 0,
            rowsPerPage: 5,
            headers : ["Campaign Name", "Created Date", "Total Invites"]
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
        const {page, rowsPerPage, searchText, headers} = this.state;
        return (
            <div class="container-fluid p-0" style={styles.mainView}>
               <AppBar className="app-main-header" position="static">
                   <Toolbar>
                        <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Campaign</h4>
                        <SearchBox onChange={this.onChangeText} value={searchText} styleName="d-none d-sm-block"/>
                        <Button style={{color: 'white', marginLeft: 10}}
                        onClick={() => {this.props.history.push('./create-new-story')}}
                        >Create New Campaign</Button>
                  </Toolbar>
               </AppBar>
               <div className="row mx-2">
               <div className="col-xs-12 col-sm-12 col-md-12">
              <Paper style={styles.paperStyle}>
                   <Table>
                       <TableHead>
                           <TableRow style={styles.bgGray}> {
                               headers.map(value => <TableCell style={styles.tableHeaderCellStyle}>{value}</TableCell>)
                               }
                               <TableCell/>
                           </TableRow>
                       </TableHead>
                       <TableBody>{
                           Campaign.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                           .map((value, index) => {
                               return (
                                <TableRow style={{backgroundColor: index % 2 == 0 ? '#FAFAFA' : 'white'}}>
                                <TableCell>{value.storyname}</TableCell>
                                        <TableCell>{value.date}</TableCell>
                                        <TableCell>{value.invites}</TableCell>
                                        <TableCell>
                                              <Button style={styles.DuplicateButton} onClick={() => {}}>Duplicate</Button>
                                          </TableCell>
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
                        count={Campaign.length}
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
const styles = {
    mainView: {
        backgroundColor: '#F8F9FA'
    },
    paperStyle: {
        width: '100%', 
        display: 'flex', 
        marginTop: 20, 
        overflow: 'auto'
    },
    tableHeaderCellStyle: {
        color: 'white', 
        fontSize: 15
    },
    bgGray: {
        backgroundColor: 'gray'
    },
    DuplicateButton: {
        backgroundColor: '#3f51b5', 
        color: 'white', 
        fontSize: 10
    }
}





