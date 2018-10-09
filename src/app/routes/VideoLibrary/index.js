import React, {Component} from 'react';
import SearchBar from '@opuscapita/react-searchbar';
import BootstrapTable, {SizePerPageDropDown, TableHeaderColumn} from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {Tooltip} from 'reactstrap';
import '../VideoLibrary/style.css';

function thumbanilView(cell, row) {
    return (
        <img src={row.videoThumbnail} style={{width: '100%', height: 'auto'}}/>
    )
}
function downLoadButtonView(cell, row) {
    return (
         <button style={{backgroundColor: 'green', color: 'white'}}
         onClick={() => {window.alert(`${row.user} Clicked`)}}>Download</button>
    )
} 
const columns = [
    {
        dataField: 'videoThumbnail',
        text: 'Video Thumbnail',
        formatter: thumbanilView,
        headerAlign: 'left',
        headerStyle: {
            overflow: 'scroll',
        }
    },
    {
        dataField: 'user',
        text: 'User',
        headerAlign: 'left',
        headerStyle: {
            overflow: 'scroll',
        }
    },
    {
        dataField: 'status',
        text: 'Status',
        headerAlign: 'left',
        headerStyle: {
            overflow: 'scroll',
        }
    },  
    {
        dataField: 'recorder',
        text: 'Recorded',
        headerAlign: 'left',
        headerStyle: {
            overflow: 'scroll',
        }
    }, 
    {
        dataField: 'invited',
        text: 'Invited On',
        headerAlign: 'left',
        headerStyle: {
            overflow: 'scroll',
        }
    },
    {
        dataField: 'actions',
        text: 'Actions',
        formatter: downLoadButtonView,
        headerAlign: 'left',
        headerStyle: {
            overflow: 'scroll',
        }
    }
]
const products = [
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

export default class VideoLibrary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            isShowRecordPopOver: false,
            isShowSentPopover: false,
            headers: [
                "Video Thumbnail",
                "User",
                "Status",
                "Recorded",
                "Invited On",
                "Actions"
            ],
            recordedVideos: 20,
            sentVideos: 15,
        }
    }
    pushToThumbnailView = () => {
        window.alert('Image Tapped');
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
    render() {

        const {recordedVideos, sentVideos} = this.state;
        const rowEvents = {
            onClick: (e, row, rowIndex) => {
                this.props.history.push({pathname: './videoPlayerDetail',   
                state: {detail: this.getClips()}})
            }
          };
                  const pagination = paginationFactory({
            page: 1,
            sizePerPage: 5,
            sizePerPageList: [
                {
                    text: "5",
                    value: 5
                },
                {
                    text: '10',
                    value: 10
                },
                {
                    text: 'All',
                    value: products.length
                }
            ]
        })
        return (
            <div class="app-wrapper">
               <div className="container">
                <div className="row">
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
               </div>
                  <div className="row searchRow">
                   <div className="col col-sm-6">
                      <h1>Videos</h1>
                   </div>
                   <div className="col col-sm-6 searchBarColumn">
                       <SearchBar
                       onSearch={(text) => {console.log(text)}}
                       value={this.state.searchValue}/>
                       </div>
                   </div>
                   <div class="mt-4">
                   <BootstrapTable  bootstrap4   
                   bordered={ false } 
                   keyField="videoThumbnail"  
                   data={ products } 
                   columns={ columns }
                   pagination={pagination}
                   rowEvents={ rowEvents }
                   />
                   </div>
          </div>
        )
    }
}
/*     

  let headers = this.state.headers.map(rowData => {
            return (
                <th className="grayColor">{rowData}</th>
            )
        });
        let rows = this.state.data.map(rowData => {
            const {videoUrl, userName, status, recorderDate, invited, actions} = rowData;
            return (
                <tr className="txtColor">
                    <td>
                        <img src={videoUrl} width="100" height="72"/>
                    </td>
                    <td>{userName}</td>
                    <td>{status}</td>
                    <td>{recorderDate}</td>
                    <td>{invited}</td>
                    <td>
                        <button style={{backgroundColor: '#498F09', color: 'white'}} onClick={() =>{alert(`Hello ${userName}`)}}>{actions}</button>
                    </td>
                </tr>
            )
        });


<div className="table-responsive">
               <table className="table">
               <thead>
                    <tr>{headers}</tr>
               </thead>
               <tbody>{rows}</tbody>
               </table>
               </div>
*/
