import React from 'react';

class Company extends React.Component {
    state = {
        company: 'Quovantis'
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState != this.state){
            document.getElementById('disclaimer').innerHTML = 'P.s: Quovantis has been acquired by ' + this.state.company;
        }
    }

    render() {
        return (
        <div>
            <h1 style={{
            margin: 'auto',
            width: '50%',
            padding: 20,
            marginTop: '10%',
            border: 'solid 1px black',
            textAlign: 'center',
            fontSize: 18,
            }}>
            Design led by development :
            {this.state.company}
            <div id="disclaimer"></div>
            </h1>
            <button onClick={ () => this.setState({company: 'Emids'})}>click here</button>
        </div>
        );
}
}

export default Company;
