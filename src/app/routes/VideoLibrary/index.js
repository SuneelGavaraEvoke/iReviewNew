import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {Tooltip} from 'reactstrap';
import '../VideoLibrary/style.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchBox from '../../../components/SearchBox';
import {VideoIndex} from '../../Utility/Data';

export default class VideoLibrary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            page: 0,
            rowsPerPage: 5,
            recordedVideos: 20,
            sentVideos: 30,
            headers: ["Video", "User Name", "Status", "Total Responses", "Total Invites", "Actions"]
        }
    }
    pushToThumbnailView = () => {
        window.alert('Image Tapped');
    }
    pageChanged = (event, page) => {
        this.setState({page})
    }
    handleRowsPerPage = (event) => {
        this.setState({rowsPerPage: event.target.value})
    }
    toggleRecordHover = () => {
        const {isShowRecordPopOver} = this.state;
        this.setState({isShowRecordPopOver: !isShowRecordPopOver})
    }
    toggleSentHover = () => {
        const {isShowSentPopover} = this.state;
        this.setState({isShowSentPopover: !isShowSentPopover})
    }
    onChange = (event) => {
        this.setState({searchText: event.target.value})
    }
    render() {
        const {headers, sentVideos, page, rowsPerPage, recordedVideos, searchText} = this.state;
        return (
               <div className="container-fluid" style={styles.mainView}>
               <AppBar className="app-main-header" position="static">
                        <Toolbar>
                            <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Campaign Videos</h4>
                            <SearchBox onChange={this.onChange} value={searchText} styleName="d-none d-sm-block"/>
                         </Toolbar>
                   </AppBar>
                <div className="row mt-2 mx-2">
                <Tooltip placement="bottom" target="numberOfVideoRecords" isOpen={this.state.isShowRecordPopOver} toggle={this.toggleRecordHover}>Number Of Users Entered To Record This Video</Tooltip>
                <Tooltip placement="bottom" target="numberOfSents" isOpen={this.state.isShowSentPopover} toggle={this.toggleSentHover}>Number of users that sent in their video</Tooltip>
                  <div className="col-sm-4">
                    <h1 style={styles.testiMonial}><strong>My Testimonial</strong></h1>
                  </div>
                  <div style={styles.font40} id="numberOfVideoRecords" data-toggle="tooltip"  className="col-sm-4 putCenter recordedVideos">
                       <h1 style={styles.font40} id="TooltipExample"><strong>{recordedVideos}</strong></h1>
                       <p style={styles.videos}>Videos</p>
                  </div>
                  <div id="numberOfSents" className="col-sm-4 putCenter SentVideos">
                       <h1 style={styles.font40}><strong>{sentVideos}</strong></h1>
                       <p style={styles.videos}>Videos</p>
                  </div>
                </div>
                <Paper className="mx-4" style={styles.paper}>
                <Table 
                style={{width: '100%'}}>
                    <TableHead style={{backgroundColor: 'gray'}}>
                        <TableRow>{
                                headers.map(value => <TableCell style={styles.tableCellColorAndFontSize}>{value}</TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody> {
                        VideoIndex.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((value, index) => {
                            return (
                                <TableRow onClick={(event) => {
                                    const {cellIndex} = event.target;
                                    if (cellIndex != 5 && cellIndex != undefined) {
                                        this.props.history.push('./videoPlayerDetail')
                                    }
                                }} selected={true} 
                                 style={{backgroundColor: index % 2 == 0 ? '#FAFAFA' : 'white'}}>
                                    <TableCell onClick={this.onTableClick}>
                                        <img style={{maxWidth: 100, maxHeight: 100, marginTop: 5, marginBottom: 5}} src={value.videoThumbnail}/>
                                    </TableCell>
                                    <TableCell>{value.user}</TableCell>
                                    <TableCell>{value.status}</TableCell>
                                    <TableCell>{value.recorder}</TableCell>
                                    <TableCell>{value.invited}</TableCell>
                                    <TableCell>
                                        <Button style={styles.buttonActions} onClick={() => {
                                            window.alert('downLoadAction performed');
                                        }}>{value.actions}</Button>
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
                    count={VideoIndex.length}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onChangePage={this.pageChanged}
                    onChangeRowsPerPage={this.handleRowsPerPage}
                    />
                </Table>
              </Paper>
          </div>
        )
    }
}

const styles = {
    mainView: {
        padding: 0, 
        backgroundColor: '#F8F9FA'
    },
    testiMonial: {
        fontSize: 25, 
        textAlign: 'left'
    },
    font40: {
        fontSize: 40
    },
    videos: {
        color: '#7F7F7F', 
        marginBottom: '0px', 
        textAlign: 'center',
        fontSize: 15
    },
    tableCellColorAndFontSize: {
        color: 'white', 
        fontSize: 15
    },
    tableCellPaddingZero: {
        padding: 0
    },
    paper: {
        display: 'flex',
         marginTop: 20,
          overflow: 'auto'
    },
    buttonActions: {
        background: '#3f51b5', color: 'white'
    }
}