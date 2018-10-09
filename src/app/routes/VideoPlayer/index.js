import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Play from '../../../assets/images/Play.png';
import Popup from 'reactjs-popup';

import './videoplayer.css';
export default class VideoPlayerDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPopUpOpened: false,
            currentIndex: 0,
            shouldMainViewPlay: false,
            tappedIndexBottom: 0
        }
        this.clips = this.getClips()

    }
    getClips = () => {
        return (
            [{"name": "First Clip", "url": "http://techslides.com/demos/sample-videos/small.mp4"},
            {"name": "Second Clip",  "url": "https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_2mb.mp4"},
            {"name": "Third Clip",  "url": "http://techslides.com/demos/sample-videos/small.mp4"}]
        )
    }
    getInnerComponents = () => {

        let arrayToBeReturned = [];

        this.clips.forEach((item, index) => {
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
        if (currentIndex < this.clips.length - 1) {
           const updatedIndex = currentIndex + 1;
           this.setState({currentIndex: updatedIndex, shouldMainViewPlay: true})
        }
    }
    getCurrentSelectedVideo = () => {
        const {currentIndex} = this.state
        const {url} = this.clips[currentIndex];
        return url
    }
    render() {
        const {isPopUpOpened, shouldMainViewPlay, tappedIndexBottom} = this.state;
        return(
            <body>
            <div class="mainContainer">
               <Popup open={isPopUpOpened} closeOnDocumentClick onClose={() => {this.setState({isPopUpOpened: false})}}>
                   <div style={{flex: 1, height: window.screen.height * 0.5, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                         <ReactPlayer width="100%" height="60%" 
                         playing
                         controls={true}
                         url={this.clips[tappedIndexBottom].url}/>
                         <div style={{height: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <p style={{textAlign: 'center', fontSize: 15}}>i Like Clopay because</p>
                         </div>
                         <div style={{width: '100%', height: '20%',display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                             <Button download href={this.getCurrentSelectedVideo()} style={{height: '50%', alignSelf: 'center'}} fullWidth={false} className="jr-btn bg-dark text-white">
                             <i className="zmdi zmdi-download"/><span> DOWNLOAD</span></Button>
                         </div>
                         <div style={{width: '100%', height: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                               <Button onClick={() => {this.setState({isPopUpOpened: false})}} fullWidth={false}><p style={{color: '77B9E6'}}>Back</p></Button>
                         </div>
                   </div>
               </Popup>
               <div class="headerView whitebackgroundColor">
                 <h3>Video Details</h3>
               </div>
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
                            <h3>StoryGuide Name</h3>
                            <p>By SuneelKumar</p>
                            <p>sunilkumargavara@gmail.com</p>
                            <h1 style={{color: '#77B9E6'}} onClick={() => {this.props.history.goBack();}}>Back To Gallery</h1>
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
                      <h1 style={{color: '#77B9E6'}}>Individual Clips</h1>
                  </div>
                  <div className="row col-xs-12 com-sm-12 col-md-12"> {this.getInnerComponents()}
                  </div>
               </div>
            </div>
           </body>
        )
    }

}