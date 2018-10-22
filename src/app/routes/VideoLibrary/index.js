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

export default class VideoLibrary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            page: 0,
            rowsPerPage: 5,
            recordedVideos: 20,
            sentVideos: 30,
            data: [
                {
                    "videoThumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDrFJDkWfS-Eaz69yEuCAW-5VIAecZPGJ94UN4QmW9Unp09dQ",
                    "user": "Doe",
                    "status": "Sent",
                    "recorder": "Feb 4, 2018",
                    "invited": "March 15, 2018",
                    "actions": "Download"
                },
                {
                    "videoThumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreWw-6C_CkyFfcQ6sTAS31UryRrEyGnt0BJ2jFto7JsJh_No4dA",
                    "user": "John",
                    "status": "Pending",
                    "recorder": "Jan 12, 2018",
                    "invited": "Feb 13, 2018",
                    "actions": "Download"
                },
                {
                    "videoThumbnail": "https://trueconf.com/blog/wp-content/uploads-com/2014/05/Videocall-Android-1.png",
                    "user": "Keron",
                    "status": "Pending",
                    "recorder": "Jan 10, 2018",
                    "invited": "May 25, 2018",
                    "actions": "Download"
                },
                {
                    "videoThumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSH7BMiRBZxJubY7uUBg6vpzDkC0hHghh4fRNfV5Pzndh5Fvmhdw",
                    "user": "Manish",
                    "status": "sent",
                    "recorder": "Jan 5, 2018",
                    "invited": "April 15, 2018",
                    "actions": "Download"
                },
                {
                    "videoThumbnail": "http://www.talkhelper.com/img/high_quality_video_record.png",
                    "user": "Rajal",
                    "status": "Pending",
                    "recorder": "Jan 15, 2018",
                    "invited": "March 10, 2018",
                    "actions": "Download"
                }
            ]
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
    getClips = () => {
        return (
            [{"name": "First Clip", "url": "http://techslides.com/demos/sample-videos/small.mp4"},
            {"name": "Second Clip",  "url": "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_2mb.mp4"},
            {"name": "Third Clip",  "url": "http://techslides.com/demos/sample-videos/small.mp4"}]
        )
    }
    onChange = (event) => {
        this.setState({searchText: event.target.value})
    }
    onRowSelection = (key) => {
        debugger;
        console.log(key);
        /*
        if (column != 5) {
            this.props.history.push('./videoPlayerDetail');
       }
*/
    }
    render() {
        const {data, sentVideos, page, rowsPerPage, recordedVideos, searchText} = this.state;
        return (
               <div className="container-fluid" style={{padding: 0}}>
                   <AppBar className="app-main-header" position="static">
                        <Toolbar>
                            <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Videos</h4>
                            <SearchBox onChange={this.onChange} value={searchText} styleName="d-none d-sm-block"/>
                         </Toolbar>
                   </AppBar>
                <div className="row mt-2 mx-2">
                <Tooltip placement="bottom" target="numberOfVideoRecords" isOpen={this.state.isShowRecordPopOver} toggle={this.toggleRecordHover}>Number Of Users Entered To Record This Video</Tooltip>
                <Tooltip placement="bottom" target="numberOfSents" isOpen={this.state.isShowSentPopover} toggle={this.toggleSentHover}>Number of users that sent in their video</Tooltip>
                  <div className="col-sm-4">
                    <h1 style={{fontSize: 25, textAlign: 'left'}}><strong>My Testimonial</strong></h1>
                  </div>
                  <div id="numberOfVideoRecords" data-toggle="tooltip"  className="col-sm-4 putCenter recordedVideos">
                       <h1 style={{fontSize: 40}} id="TooltipExample"><strong>{recordedVideos}</strong></h1>
                       <p style={{color: '#7F7F7F', marginBottom: '0px', textAlign: 'center'}}>Videos</p>
                  </div>
                  <div id="numberOfSents" className="col-sm-4 putCenter SentVideos">
                       <h1 style={{fontSize: 40}}><strong>{sentVideos}</strong></h1>
                       <p style={{color: '#7F7F7F', marginBottom: '0px', textAlign: 'center'}}>Videos</p>
                  </div>
                </div>
                <Paper className="mx-4" style={{display: 'flex', marginTop: 20, overflow: 'auto'}}>
                <Table style={{width: '100%'}}>
                    <TableHead style={{backgroundColor: 'gray'}}>
                        <TableRow>
                            <TableCell style={{color: 'white', fontSize: 15}}>VideoThumbnail</TableCell>
                            <TableCell style={{color: 'white', fontSize: 15}}>User</TableCell>
                            <TableCell style={{color: 'white', fontSize: 15}}>Status</TableCell>
                            <TableCell style={{color: 'white', fontSize: 15}}>Recorded</TableCell>
                            <TableCell style={{color: 'white', fontSize: 15}}>Invited</TableCell>
                            <TableCell style={{color: 'white', fontSize: 15}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> {
                        data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((value, index) => {
                            return (
                                <TableRow selected={true} style={{backgroundColor: index % 2 == 0 ? '#FAFAFA' : 'white'}}>
                                    <TableCell>
                                        <img style={{maxWidth: 100, maxHeight: 100, marginTop: 5, marginBottom: 5}} src={value.videoThumbnail}/>
                                    </TableCell>
                                    <TableCell>{value.user}</TableCell>
                                    <TableCell>{value.status}</TableCell>
                                    <TableCell>{value.recorder}</TableCell>
                                    <TableCell>{value.invited}</TableCell>
                                    <TableCell>
                                        <Button style={{background: 'green', color: 'white'}} onClick={() => {
                                            debugger;
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
                    count={data.length}
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