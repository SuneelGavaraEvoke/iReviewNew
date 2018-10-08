import React, {Component} from 'react';
import ContainerHeader from '../../../components/ContainerHeader/index';
import IntlMessages from '../../../util/IntlMessages';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {

        return (
            <div class="app-wrapper">
               <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.HomePage.Description"/>}/>
               <div class="table-responsive">
               <table class="table">
               </table>
               </div>
          </div>
        )
    }
}