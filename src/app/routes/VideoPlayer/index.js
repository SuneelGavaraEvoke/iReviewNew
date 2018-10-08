import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';
import './videoplayer.css';

export default class VideoPlayerDetail extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return(
            <body>
            <div class="mainContainer">
               <div class="headerView">
                 <h3>Video Details</h3>
               </div>
               <div className="playerView">
                  <ReactPlayer
                  width="100%"
                  height="100%"
                  url="http://techslides.com/demos/sample-videos/small.mp4" 
                  playing 
                  controls={true}/>
               </div>
               <div className="bottomView">
                 <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                            <h3>StoryGuide Name</h3>
                            <p>By SuneelKumar</p>
                            <p>sunilkumargavara@gmail.com</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                            <div class="mb-2">
                               <Button fullWidth={true} className="jr-btn bg-dark text-white">
                               <i className="zmdi zmdi-download"/><span> DOWNLOAD</span></Button>
                            </div>
                            <div>
                               <Button fullWidth={true} variant="raised" className="jr-btn bg-dark text-white">
                               <i className="zmdi zmdi-long-arrow-return"/><span> COPYLINK</span></Button>
                            </div>
                    </div>
                    <div className="col"/>
                 </div>
               </div>
            </div>
           </body>
        )
    }

}