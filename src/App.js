import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';

class App extends Component {
    state = {
        list: [],
        output: '',
        bgStyle: { background: '#fff' }
    }

    componentDidMount() {
        let list = [ 32 ]

        for( let i = 97; i <= 122; i++ ) {
            list.push( i )
        }

        this.setState({ list })
    }

    alterCharacter() {
        let randNum = _.shuffle( this.state.list )[0]
        let randChar = String.fromCharCode( randNum )

        this.state.output === '' && randChar === 'h' ? this.setState({ output: randChar })
        : this.state.output === 'h' && randChar === 'e' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'he' && randChar === 'l' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'hel' && randChar === 'l' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'hell' && randChar === 'o' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'hello' && randChar === ' ' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'hello ' && randChar === 'w' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'hello w' && randChar === 'o' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'hello wo' && randChar === 'r' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'hello wor' && randChar === 'l' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'hello worl' && randChar === 'd' ? this.setState({ output: this.state.output + randChar })
        : this.state.output === 'hello world' && randChar ? this.handleBg()
        : null
    }

    handleBg() {
        let bgList = [ 'red', 'green', 'blue', 'yellow', 'purple', 'orange', 'cyan' ]
        let i = 0;

        setInterval(() => {
            this.setState({ bgStyle: { background: bgList[i] } })

            if( i <= 6 )
                i++
            else
                i = 0
        }, 100);
    }

    render() {

        return (
            <div className="App" style={ this.state.bgStyle }>
                <input onChange={() => this.alterCharacter()} />
                {this.state.output}
            </div>
        );
    }
}

export default App;