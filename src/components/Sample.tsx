import * as React from "react";

interface Props {
    src: string;
    onClick(url: string)
}

class Sample extends React.Component<Props, any> {
  render() {
    const { onClick } = this.props;

    return (
      <img src={this.props.src} onClick={onClick.bind(this, this.props.src)} />
    );
  }

}

export default Sample;
