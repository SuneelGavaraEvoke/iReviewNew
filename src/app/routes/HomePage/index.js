import React, {Component} from 'react';
import InfoCard from '../../../components/InfoCard';
import './home.css';

const storyGuides = {
    img: 'https://previews.123rf.com/images/asmati/asmati1706/asmati170606404/80933523-paper-and-pencil-sign-vector-white-icon-with-soft-shadow-on-transparent-background-.jpg',
    title: '80',
    subTitle: 'Stories',
};
const emailInvites = {
    img: 'http://www.clker.com/cliparts/d/7/8/7/1380099934958570638mail-symbol-grey-md-hi.png',
    title: '55',
    subTitle: 'Email Invites',
}
const responses = {
    img: 'https://cdn1.iconfinder.com/data/icons/mail-1-basic/512/50-Reply_All-512.png',
    title: '0',
    subTitle: 'Responses',
}
export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thumbnailData: [
                {
                    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDrFJDkWfS-Eaz69yEuCAW-5VIAecZPGJ94UN4QmW9Unp09dQ'
                },
                {
                    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreWw-6C_CkyFfcQ6sTAS31UryRrEyGnt0BJ2jFto7JsJh_No4dA'
                },
                {
                    link: 'https://trueconf.com/blog/wp-content/uploads-com/2014/05/Videocall-Android-1.png'
                },
                {
                    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSH7BMiRBZxJubY7uUBg6vpzDkC0hHghh4fRNfV5Pzndh5Fvmhdw'
                },
                {
                    link: 'http://www.talkhelper.com/img/high_quality_video_record.png'
                },
                {
                    link: 'http://www.talkhelper.com/img/high_quality_video_record.png'
                },
                {
                    link: 'http://www.talkhelper.com/img/high_quality_video_record.png'
                },
                {
                    link: 'http://www.talkhelper.com/img/high_quality_video_record.png'
                }
            ]
        }
    }
    getThumbnailList = () => {
        let arrayList = [];
         this.state.thumbnailData.forEach((thumbNail) => {
             arrayList.push(
             <li className="list-inline-item my-2">
                   <img className="listItem" src={thumbNail.link}/>
            </li>
         )
         })
        return arrayList;
    }
    render() {

        return (
            <div class="container">
              <div className="row mt-5 mx-2 height50">
                <div className="col-xs-12 col-sm-12 backgroundColor dashBoardBox">
                   <h1 className="col-sm-12 col-xs-12 autoMargin">DashBoard</h1>
                </div>
              </div>
               <div className="row">
                  <div className="col-sm-4 padding">
                      <InfoCard className="leftCard" onPress={() => {
                          this.props.history.push('./story-guides');
                      }} data={storyGuides} styleName="backgroundColor"/>
                  </div>
                  <div className="col-sm-4 padding">
                      <InfoCard className="centerCard" onPress={() => {
                          this.props.history.push('./EmailInvites');
                      }} data={emailInvites} styleName="backgroundColor"/>
                  </div>
                  <div className="col-sm-4 padding">
                      <InfoCard className="rightCard" onPress={() => {
                          window.alert('Repsonses Yet To Be Received');
                      }} data={responses} styleName="backgroundColor"/>
                  </div>
               </div>
               <div class="row mx-2">
                <div className="col-xs-12 col-sm-12 backgroundColor">
                   <h1 className="w-100 px-1 my-2">Videos</h1>
                </div>
                <div className="col-xs-12 col-sm-12 d-inline">
                     <ul className="list-inline mx-1 my-4 alignText">{this.getThumbnailList()}
                     </ul>
                  </div>
               </div>

            </div>
        )
    }
}