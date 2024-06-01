import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
    const { name } = props;
    return (
        <>
            <h1>
                Hello {name}
            </h1>
            <button type="button" className="btn btn-primary">
                This is a bootstrap button...
            </button>
        </>
    );
}

export default App;