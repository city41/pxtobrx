import React, { PropTypes } from 'react';
import styles from './Sample.less';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';

@withStyles(styles)
class Sample extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  };

  onImgClick() {
    let img = React.findDOMNode(this.refs.sampleImg);

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    let pixelData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data;
    AppActions.onImageData(pixelData, img.naturalWidth, img.naturalHeight);
    AppActions.onImageDataUrl(canvas.toDataURL());
  }

  render() {
    return (
      <img className="sample-image" ref="sampleImg" src={this.props.src} onClick={this.onImgClick.bind(this)} />
    );
  }

}

export default Sample;
