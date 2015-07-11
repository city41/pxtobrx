// ported over from https://github.com/paramaggarwal/react-dropzone
// changes made include styling and only showing an input[type=file]
// for mobile
import React, { PropTypes } from 'react';
import MobileDetect from 'mobile-detect';
import styles from './DropZone.less';
import withStyles from '../../decorators/withStyles';
import { canUseDOM } from 'react/lib/ExecutionEnvironment';

@withStyles(styles)
class DropZone extends React.Component {
  static contextTypes = {
    foo: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      isDragActive: false
    };
  }

  onDragLeave() {
    this.setState({
      isDragActive: false
    });
  }

  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';

    this.setState({
      isDragActive: true
    });
  }

  onDrop(e) {
    e.preventDefault();

    this.setState({
      isDragActive: false
    });

    var files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    var maxFiles = (this.props.multiple) ? files.length : 1;
    for (var i = 0; i < maxFiles; i++) {
      files[i].preview = URL.createObjectURL(files[i]);
    }

    if (this.props.onDrop) {
      files = Array.prototype.slice.call(files, 0, maxFiles);
      this.props.onDrop(files, e);
    }
  }

  onClick() {
    this.open();
  }

  open() {
    var fileInput = React.findDOMNode(this.refs.fileInput);
    fileInput.value = null;
    fileInput.click();
  }

  render() {
    const userAgent = this.props.userAgent || (canUseDOM && window.navigator.userAgent) || '';
    const md = new MobileDetect(userAgent);

    if (md.mobile()) {
      return (
        <div>
          <h2 className="drag-header">Choose some pixel art</h2>
          <input className="mobile-input-file" type='file'
                 ref='fileInput'
                 onChange={this.onDrop.bind(this)} />
        </div>
      );
    } else {
      return (
        <div className="drop-zone"
             onClick={this.onClick.bind(this)}
             onDragLeave={this.onDragLeave}
             onDragOver={this.onDragOver.bind(this)}
             onDrop={this.onDrop.bind(this)}>

             <input style={{display: 'none'}}
                    type='file'
                    ref='fileInput'
                    onChange={this.onDrop.bind(this)}/>
            {this.props.children}
        </div>
      );
    }
  }
}

DropZone.propTypes = {
  onDrop: React.PropTypes.func.isRequired,
  supportClick: React.PropTypes.bool,
  accept: React.PropTypes.string
};

DropZone.defaultProps = {
  supportClick: true,
  multiple: true
};

export default DropZone;
