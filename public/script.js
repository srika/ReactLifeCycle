writeToScreen('Initial', 'primary');

var Welcome = React.createClass({
    getInitialState: function(){
        writeToScreen('GetInitialState', 'Info');
        return{ show: 1}
    },
    getDefaultProps: function(){
        writeToScreen('GetDefaultProps', 'Info');
        return{ hello: 2}
    },
    update: function(){
        writeToScreen('Updating State', 'primary');
        this.setState({show: 2})
    },
    render: function(){
        writeToScreen('Render','Success');
        return(
            <div>
                This.state.show: {this.state.show} <br/>
                This.state.hello: {this.props.hello} <br/>
                <hr/>
                <button className="btn btn-success" onClick={this.update}> Update the state</button>
            </div>
        )
    },
    componentWillMount: function(){
        writeToScreen('componentWillMount', 'warning');
    },
    componentDidMount: function(){
        writeToScreen('componentDidMount', 'warning');
    },
    shouldComponentUpdate: function(){
        writeToScreen('shouldComponentUpdate', 'info');
        return true
    },
    componentWillRecieveProps: function(){
        writeToScreen('componentWillRecieveProps', 'warning');
    },
    componentWillUpdate: function(){
        writeToScreen('componentWillUpdate', 'warning');
    },
    componentDidUpdate: function(){
        writeToScreen('componentDidUpdate', 'warning');
    },
    componentWillUnmount: function(){
        writeToScreen('componentWillUnmount', 'danger');
    }

})

var App = React.createClass({
    getInitialState: function(){
        return{ id: 1}
    },
    update: function(){
        writeToScreen('Updating Props', 'primary');
        this.setState({id: 2})
    },
    render: function(){
        return(
            <div>
                <hr/>
                <Welcome hello={this.state.id}/>
                <hr/>
                <button className="btn btn-primary" onClick={this.update}>
                    Update Props
                </button>
            </div>
        )
    }
})



ReactDOM.render(
    <App/>,
    document.getElementById('app')
)

var unMountBtn = document.getElementById('unmount');
unMountBtn.addEventListener('click', unmount);

function unmount(){
    writeToScreen('Unmounting', 'primary');
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    unMountBtn.remove();
}


function writeToScreen(msg, level){
    var elem = document.getElementById('screen');
    elem.innerHTML += '<div class="log bg-' +level+ '">' +
    '<span class="glyphicon glyphicon-ok"> </span> &nbsp;&nbsp;' +
    msg +
    '</div>';
}