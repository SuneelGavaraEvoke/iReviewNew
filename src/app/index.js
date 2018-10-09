import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Header from "components/Header/index";
import Sidebar from "containers/SideNav/index";
import Footer from "components/Footer";
import Dashboard from "./routes/dashboard";
import Components from "./routes/components";
import Icons from "./routes/icons/index";
import Form from "./routes/form";
import Editors from "./routes/editors";
import Pickers from "./routes/pickers";
import Extensions from "./routes/extensions";
import Table from "./routes/table";
import Chart from "./routes/charts";
import Map from "./routes/map";
import Calendar from "./routes/calendar";
import TimeLine from "./routes/timeLine";
import CustomViews from "./routes/customViews";
import ExtraElements from "./routes/extraElements";
import eCommerce from "./routes/eCommerce";
import AppModule from "./routes/appModule";
import ExtraPages from "./routes/extraPages";
import Tour from "../components/Tour/index";
import {
    ABOVE_THE_HEADER,
    BELOW_THE_HEADER,
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
    HORIZONTAL_NAVIGATION
} from "constants/ActionTypes";
import ColorOption from "containers/Customizer/ColorOption";
import {isIOS, isMobile} from "react-device-detect";
import asyncComponent from "../util/asyncComponent";
import TopNav from "components/TopNav";
import './mainStyles.css';

class App extends React.Component {

    render() {
        const {match, drawerType, navigationStyle, horizontalNavPosition} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';

        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            document.body.classList.add('ios-mobile-view-height')
        }
        else if (document.body.classList.contains('ios-mobile-view-height')) {
            document.body.classList.remove('ios-mobile-view-height')
        }

        return (
            <div className={`app-container ${drawerStyle}`}>                
                <Sidebar/>
                <div className="app-main-container">
                    <div
                        className={`app-header ${navigationStyle === HORIZONTAL_NAVIGATION ? 'app-header-horizontal appHeader' : 'appHeader'}`}>
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
                        <TopNav styleName="app-top-header"/>}
                        <Header/>
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
                        <TopNav/>}
                    </div>

                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Switch>
                                <Route path={`${match.url}/video-library`} 
                                component={asyncComponent(() => import('./routes/VideoLibrary'))}/>      
                                <Route path={`${match.url}/home-page`}
                                component={asyncComponent(() => import('./routes/HomePage'))}/>
                                <Route path={`${match.url}/brands`}
                                component={asyncComponent(() => import('./routes/Brands'))}
                                />
                                <Route path={`${match.url}/videoPlayerDetail`}
                                component={asyncComponent(() => import('./routes/VideoPlayer'))}
                                />
                                <Route path={`${match.url}/EmailInvites`}
                                component={asyncComponent(() => import('./routes/EmailInvites'))}
                                />
                                <Route path={`${match.url}/story-guides`}
                                component={asyncComponent(() => import('./routes/StoryGuides'))}
                                />
                                <Route 
                                component={asyncComponent(() => import('components/Error404'))}/>
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {drawerType, navigationStyle, horizontalNavPosition} = settings;
    return {drawerType, navigationStyle, horizontalNavPosition}
};
export default withRouter(connect(mapStateToProps)(App));