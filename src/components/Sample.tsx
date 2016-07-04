import * as React from "react";

interface Props {
    src: string;
    onSelect(url: string)
}

class Sample extends React.Component<Props, any> {
  render() {
    const { onSelect } = this.props;

    return (
      <img src={this.props.src} onClick={onSelect.bind(this, this.props.src)} />
    );
  }

}

export default Sample;
