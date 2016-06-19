import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {}
interface State {}

export class App extends React.Component<Props, State> {
    render() {
        return <div>Simple React + Babel + Bootstrap + Webpack + TypeScriptss yup yup fasda</div>;
    }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
