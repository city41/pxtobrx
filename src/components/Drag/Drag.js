import React, { PropTypes } from 'react';
import MobileDetect from 'mobile-detect';
import styles from './Drag.less';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';

import Dropzone from '../DropZone';

const MAX_DIM = 320;

@withStyles(styles)
class Drag extends React.Component {
  static propTypes = {
    userAgent: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  onImgUrl(imgUrl) {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let img = new Image();

    img.onload = () => {
      if (img.naturalWidth > MAX_DIM || img.naturalHeight > MAX_DIM) {
        this.setState({
          error: `The maximum image size is ${MAX_DIM}x${MAX_DIM}px`
        });
        return;
      }

      setTimeout(() => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        ctx.drawImage(img, 0, 0);
        let pixelData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;

        AppActions.onImageData(pixelData, img.naturalWidth, img.naturalHeight);
        setTimeout(() => {
          AppActions.onImageDataUrl(canvas.toDataURL());
        }, 1);
      }, 1);
    };
    img.src = imgUrl;
  }

  onDrop(files) {
    const md = new MobileDetect(window.navigator.userAgent);

    if (files[0].type !== 'image/png' && files[0].type !== 'image/gif' && !md.mobile()) {
      this.setState({
        error: 'only pngs or gifs will work'
      });
      return;
    }

    this.setState({error: null});

    let objectUrl = URL.createObjectURL(files[0]);
    this.onImgUrl(objectUrl);
  }

  render() {
    let error;

    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }
    return (
      <div>
        {error}
        <Dropzone userAgent={this.props.userAgent} onDrop={this.onDrop.bind(this)} >
          <div className="dropzone-explanation">
            <div>Drop a pixel art file here</div>
            <div>or click here to open a file dialog</div>
          </div>
        </Dropzone>
      </div>
    );
  }

}

export default Drag;
