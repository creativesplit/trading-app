class Tardis extends React.Component {
    constructor(props) {
        super(props)
        this.state = tardis {
            name: 'Time and Relative Dimension in Space',
            caps: false
          }
    
    }
    render(){
        return(
            <div>
                <h1>Hello {name} </h1>
            </div>
        )
    }
    changeIt (text) {
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
      }
}

class DivOne extends React.Component{

}

class DivTwo extends React.Component{
    
}

class DivThree extends React.Component{
    
}