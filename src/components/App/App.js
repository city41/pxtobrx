import React, { PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import basicStyles from './Basics.less';
import appStyles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';

import Drag from '../Drag';
import Sample from '../Sample';
import ChoosePieceType from '../ChoosePieceType';
import ChooseScale from '../ChooseScale';
import PieceList from '../PieceList';
import PieceMap from '../PieceMap';
import Dimensions from '../Dimensions';
import Price from '../Price';

import AppStore from '../../stores/AppStore';

function getState() {
  return {
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
          <h2>Build Instructions</h2>
          <section>
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
    return (
      <div>
        <h1 className="app-title">pxtobrx <span className="alpha">(this site is not done yet!)</span></h1>
        <section className="drag-section">
          <h2>Choose an Image</h2>
          <div className="grid">
            <div className="col-4-12">
              <Drag
                userAgent={this.props.userAgent}
              />
            </div>
            <div className="col-8-12">
              <h2 className="drag-header">or ... try one of these</h2>
              <div>
                <Sample src="/img/samples/megaman.png" />
                <Sample src="/img/samples/samus.png" />
                <Sample src="/img/samples/thwomp.png" />
                <Sample src="/img/samples/smb3-tanooki-mario.png" />
                <Sample src="/img/samples/super-metroid.png" />
              </div>
            </div>
          </div>
        </section>
        <section className="choose-section">
          <div className={this.state.dataUrl ? 'choose-section-container choosable' : 'choose-section-container'}>
            <h2>Pick Your Pieces and Sizing</h2>
            <ChoosePieceType choosable={!!this.state.dataUrl} chosenPieceType={this.state.chosenPieceType} />
            <ChooseScale choosable={!!this.state.dataUrl} chosenScale={this.state.chosenScale} />
          </div>
        </section>
        {this.getResults(this.state.pixelData)}
      </div>
    );
  }
}

export default App;
