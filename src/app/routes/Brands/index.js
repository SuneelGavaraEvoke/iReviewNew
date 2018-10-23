import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import '../Brands/brands.css';
import { SketchPicker } from 'react-color'
const Delete  = require('../../../../src/Images/delete.png');


export default class Brands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: "",
            displayColorPicker: false,
            currentColor: '#ffffff'
        }
        this.handleChange = this.handleChange.bind(this)
        this.removeImage = this.removeImage.bind(this)
    }
    handleChange(event) {

        const filePath = event.target.files[0];
        this.setState({
            imagePath: window.URL.createObjectURL(filePath)
        })
      }
    removeImage() {
        this.setState({imagePath: ""})
      }
      handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };    
    render() {
        const {imagePath} = this.state;
        return (
            <div class="container-fluid removePadding" style={{backgroundColor: '#F8F9FA'}}>
            <div style={{width: '100%'}}>
             <AppBar className="app-main-header" position="static">
              <Toolbar>
                  <h4 className="mb-0 mr-auto" style={{fontSize: 20}}>Brand</h4>
              </Toolbar>
             </AppBar>
            </div>
                <Card style={{marginLeft: 10, width: 'calc(100% - 20px)', marginTop: 20, overflow: 'visible'}}>
                 <div class="container-fluid mt-4">
                    <div class="row">
                       <div class="col col-sm-4 topColumnHeight topColumnFlex">
                            <div class="leftDiv">
                                 <h4 style-={{marginTop: 10, width: '100%'}}>Company Logo:</h4>
                            </div>
                            <div class="imageContainer justify-content-center align-items-center"> 
                                  {imagePath == "" ? 
                                   <p class="noImageAvalable">No Image Available</p> :
                                   <img src={imagePath} class="imageInner" />}
                            </div>
                            <div class="height60">
                                   <button class="btn imageWidthAndHeight" onClick={this.removeImage}>
                                       <img src={Delete} class="buttoImage"/>
                                   </button>
                            </div>
                       </div>
                        <div className="col col-sm-8">
                        <div class="flexColumn">
                                  <input type='file' onChange={this.handleChange} accept="image/png, image/jpeg" class="marginTop10"  title="Hello World" id="exampleInputFile" aria-describedby="fileHelp"/>
                                  <div class="selectImageView">
                                     <button style={{width: 100, height: 30, backgroundColor: '#EFEAEA', borderRadius: 5}} 
                                     onClick={() => {document.getElementById('exampleInputFile').click()}}>Select Image</button>
                                  </div>
                                  <div class="upload1000ImageView">
                                     <p class="uploadImage">Upload a 1000 * 1000 pix picture</p>
                                  </div>
                            </div>
                        </div>
                        <div class="col-sm-12 middleColumnHeight middleColumnFlex">
                              <p style={{marginLeft: 10, height: 30, marginTop: 5}}>Select Theme Color: </p>
                              <button onClick={this.handleClick} style={{marginLeft: 30, width: 100, height: 30, backgroundColor: this.state.currentColor}}>
                                 <p>{this.state.currentColor}</p>
                               </button>
                              <div>
                                  {
                                      this.state.displayColorPicker ?  (
                                        <div style={ popover }>
                                             <div style={ cover } onClick={ () => {this.setState({displayColorPicker: false})} }/>
                                        <SketchPicker color={this.state.currentColor} onChange={(color, event) => {this.setState({currentColor: color.hex})}}/>
                                      </div>
                                      ) : null

                                  }
                              </div>
                        </div>
                        <div class="col-sm-12 bottmColumnHeight">
                        <button class="saveButton" onClick={() => {window.alert('Details Saved SuccessFully!!!!')}}>Save</button>
                        </div>
                    </div>
                 </div>
                 </Card>
             </div>
        )
    }
}

const popover = {
    position: 'absolute',
    zIndex: '2',
  }
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }
