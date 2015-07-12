import React, { PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import basicStyles from './Basics.less';
import appStyles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';

import About from '../About';
import Drag from '../Drag';
import Sample from '../Sample';
import ChoosePieceType from '../ChoosePieceType';
import Availability from '../Availability';
import ChooseScale from '../ChooseScale';
import PieceList from '../PieceList';
import PieceMap from '../PieceMap';
import Dimensions from '../Dimensions';
import Price from '../Price';

import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';

function getState() {
  return {
    calculating: AppStore.getCalculating(),
    showAbout: AppStore.getShowAbout(),
    showAvailability: AppStore.getShowAvailability(),
    pixelData: AppStore.getPixelData(),
    neededPieces: AppStore.getNeededPieces(),
    chosenPieceType: AppStore.getChosenPieceType(),
    chosenScale: AppStore.getChosenScale(),
    dataUrl: AppStore.getDataUrl()
  };
}

@withContext
@withStyles(basicStyles)
@withStyles(appStyles)
class App extends React.Component {
  static propTypes = {
    userAgent: PropTypes.string
  };

  constructor(props) {
    super(props);

    AppStore.onChange(() => {
      this.setState(getState());
    });

    this.state = getState();
  }

  getResults(pixelData) {
    let width = pixelData[0] && pixelData[0].length || 0;
    let height = pixelData.length;

    if (width && height && this.state.neededPieces.length) {
      return (
        <div className="results-container">
          <section>
            <h2>Here is Your Build</h2>
            <div className="grid">
              <div className="col-3-12">
                <img className="preview-image" src={this.state.dataUrl} />
              </div>
              <div className="col-9-12">
                <div className="grid">
                  <div className="col-5-12">
                    <Dimensions scale={this.state.chosenScale} imgWidth={width} imgHeight={height} />
                  </div>
                  <div className="col-3-12">
                    <div className="dollars">{Number(this.state.neededPieces.length).toLocaleString()}</div>
                    <div>{this.state.chosenPieceType}s</div>
                  </div>
                  <div className="col-4-12">
                    <Price pieces={this.state.neededPieces} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <Tabs>
              <TabList>
                <Tab>Piece Map</Tab>
                <Tab>Piece List</Tab>
              </TabList>
              <TabPanel>
                <PieceMap
                  pieces={this.state.neededPieces}
                  imgWidth={width}
                  imgHeight={height}
                  userScale={this.state.chosenScale}
                  scale={14}
                />
              </TabPanel>
              <TabPanel>
                <PieceList
                  chosenPieceType={this.state.chosenPieceType}
                  pieces={this.state.neededPieces}
                />
              </TabPanel>
            </Tabs>
          </section>
        </div>
      );
    }
  }

  render() {
    let about = this.state.showAbout && <About />;

    return (
      <div>
        <div style={{visibility: this.state.calculating ? '' : 'hidden'}} className="loading">
          calculating ...
        </div>
        {about}
        <span className="about-link">
          <a onClick={AppActions.onToggleAbout}>About</a>
        </span>
        <h1 className="app-title">pxtobrx <span className="alpha">v0.1</span></h1>
        <section className="first-section drag-section">
          <div className="grid">
            <div className="col-4-12">
              <h2>Choose an Image</h2>
              <Drag
                userAgent={this.props.userAgent}
              />
            </div>
            <div className="col-8-12">
              <div className="samples-container">
                <h3 className="drag-header">or ... try one of these</h3>
                <div>
                  <Sample src="/img/samples/samus.png" />
                  <Sample src="/img/samples/thwomp.png" />
                  <Sample src="/img/samples/smb3-tanooki-mario.png" />
                  <Sample src="/img/samples/megaman.png" />
                  <Sample src="/img/samples/super-metroid.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="choose-section">
          <div className={this.state.dataUrl ? 'choose-section-container choosable' : 'choose-section-container'}>
            <div className="grid">
              <div className="col-6-12">
                <h2>Pick Piece Type</h2>
                <ChoosePieceType choosable={!!this.state.dataUrl} chosenPieceType={this.state.chosenPieceType} />
                <a className="show-availability-link" onClick={AppActions.onToggleAvailability}>{this.state.showAvailability ? 'hide' : 'show'} availability</a>
                <div style={{display: this.state.showAvailability ? 'block' : 'none'}}>
                  <Availability />
                </div>
              </div>
              <div className="col-6-12">
                <h2>And Scale</h2>
                <ChooseScale choosable={!!this.state.dataUrl} chosenScale={this.state.chosenScale} />
              </div>
            </div>
          </div>
        </section>
        {this.getResults(this.state.pixelData)}
      </div>
    );
  }
}

export default App;
