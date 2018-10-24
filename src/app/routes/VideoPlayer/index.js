import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Play from '../../../assets/images/Play.png';
import Popup from 'reactjs-popup';
import {VideoClips} from '../../Utility/Data';

import './videoplayer.css';

class VideoPlayerDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPopUpOpened: false,
            currentIndex: 0,
            shouldMainViewPlay: false,
            tappedIndexBottom: 0
        }
    }
    getInnerComponents = () => {

        let arrayToBeReturned = [];

        VideoClips.forEach((item, index) => {
            arrayToBeReturned.push(
                <div className="eachRow col-sm-12 col-md-12" onClick={() => {
                    this.setState({isPopUpOpened: true, shouldMainViewPlay: false, tappedIndexBottom: index});
                }}>
                <p className="stickLeft">{item.name}</p>
                <img src={Play} className="imagePlay"/>
                </div>
            )
        })
       return arrayToBeReturned;
    }
    videoAdded = () => {
        const {currentIndex} = this.state;
        if (currentIndex < VideoClips.length - 1) {
           const updatedIndex = currentIndex + 1;
           this.setState({currentIndex: updatedIndex, shouldMainViewPlay: true})
        }
    }
    getCurrentSelectedVideo = () => {
        const {currentIndex} = this.state
        const {url} = VideoClips[currentIndex];
        return url
    }
    render() {
        const {isPopUpOpened, shouldMainViewPlay, tappedIndexBottom} = this.state;
        return(
            <div>
            <AppBar className="app-main-header" position="static">
                <Toolbar>
                        <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Video Name</h4>
                  </Toolbar>
               </AppBar>
               <Popup open={isPopUpOpened} closeOnDocumentClick onClose={() => {this.setState({isPopUpOpened: false})}}>
                   <div style={styles.popUpMain}>
                         <ReactPlayer width="100%" height="60%"  playing controls={true}
                         url={VideoClips[tappedIndexBottom].url}/>
                         <div style={{width: '100%'}}>
                            <h2 className="text-center ">i Like Clopay because</h2>
                         </div>
                         <div style={styles.downLoadView}>
                             <Button download href={this.getCurrentSelectedVideo()} style={styles.downLoadButton} fullWidth={false} className="jr-btn bg-dark text-white">
                             <i className="zmdi zmdi-download"/><span> DOWNLOAD</span></Button>
                         </div>
                         <div style={styles.backButtonView}>
                               <Button onClick={() => {this.setState({isPopUpOpened: false})}} fullWidth={false}><p style={{color: '77B9E6'}}>Back</p></Button>
                         </div>
                   </div>
               </Popup>
               <div className="playerView whitebackgroundColor">
                  <ReactPlayer
                  width="100%"
                  height="100%"
                  url={this.getCurrentSelectedVideo()} 
                  onEnded={this.videoAdded}
                  playing={shouldMainViewPlay}
                  controls={true}/>
               </div>
               <div className="bottomView whitebackgroundColor">
                 <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                            <h2>StoryGuide Name</h2>
                            <p>By SuneelKumar</p>
                            <p>sunilkumargavara@gmail.com</p>
                            <Button variant="contained" color="primary">Back To Gallery</Button>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                            <div class="mb-2">
                               <Button href={this.getCurrentSelectedVideo()} fullWidth={false} className="jr-btn bg-dark text-white widthOfDownLoadbutton" download>
                               <i className="zmdi zmdi-download"/><span> DOWNLOAD</span></Button>
                            </div>
                            <div>
                               <Button fullWidth={false} variant="raised" className="jr-btn bg-dark text-white widthOfDownLoadbutton">
                               <i className="zmdi zmdi-long-arrow-return"/><span> COPYLINK</span></Button>
                            </div>
                    </div>
                    <div className="col"/>
                 </div>
               </div>
               <div className="row individualClips whitebackgroundColor">
                  <div className="col-xs-12 col-sm-12 com-md-12">
                      <h1>Individual Clips</h1>
                  </div>
                  <div className="row col-xs-12 com-sm-12 col-md-12"> {this.getInnerComponents()}
                  </div>
               </div>
        </div>
        )
    }

}
export default VideoPlayerDetail;

const styles = {
    popUpMain: {
        flex: 1, 
        height: window.screen.height * 0.5, 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    downLoadView: {
        width: '100%', 
        height: '20%',
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    downLoadButton: {
        height: '50%', 
        alignSelf: 'center'
    },
    backButtonView: {
        width: '100%', 
        height: '10%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}