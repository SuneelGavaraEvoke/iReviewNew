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
import {VideoLibrary} from '../../Utility/Data';

export default class VideoListings extends Component {


    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            page: 0,
            rowsPerPage: 5,
            headers: ["Campaign Name", "Total Videos", "Created Date"]
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
        const {page, rowsPerPage,headers, searchText} = this.state;
        return (
            <div class="container-fluid" style={{paddingLeft: 0, paddingRight: 0}}>
            <div style={styles.totalWidth}>
             <AppBar className="app-main-header" position="static">
              <Toolbar>
                  <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Video Library</h4>
                  <SearchBox value={searchText} onChange={this.onChangeText} styleName="d-none d-sm-block"/>
              </Toolbar>
             </AppBar>
            </div>
            <div className="row mx-2">
              <div className="col-xs-12 col-sm-12 col-md-12">
              <Paper style={styles.paper}>
                <Table>
                    <TableHead style={styles.tableHead}>
                        <TableRow> {
                            headers.map(value => <TableCell style={styles.tableCell}>{value}</TableCell>)
                        }
                        </TableRow>
                    </TableHead>
                    <TableBody> {
                        VideoLibrary.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                    style={{display: 'flex'}}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}                    
                    component="div"
                    count={VideoLibrary.length}
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
const styles = {
    totalWidth: {
        width: '100%'
    },
    paper: {
        width: '100%', 
        display: 'flex', 
        marginTop: 20, 
        overflow: 'auto'
    },
    tableHead: {
        backgroundColor: 'gray'
    },
    tableCell:{
        color: 'white', 
        fontSize: 15
    }
}