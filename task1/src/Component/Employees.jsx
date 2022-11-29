import React, { Component } from 'react'
import './styles.nav.css'
 class Employees extends Component {
    state = {
        data :[
            {id:'1',name:'antonio',role:'teacher'},
            { id:'2',name:'john', role:'programmer'},
            { id:'3',name:'cedric', role:'actor'},
            { id:'4',name:'trump', role:'engineer'},
        ]
    }
    componentDidMount(){
        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
        .then(res => res.json())
        .then(json => this.setState({data:json}))
    }
    clickName = (e) =>{
              this.setState({name:e.target.value})
      
    }
    clickRole = (e) =>{
      this.setState({role:e.target.value})
    }
  render() {
        console.log(this.state)
    return (
      <div>
        {this.state.data.map(item =>{
            return <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',padding:'20px'}} key={item.id}>
            <h2>{item.name}</h2>
            <br></br>
            <p style={{marginLeft:'20px'}}>{item.department}</p>
            <p style={{marginLeft:'20px'}}>{item.role}</p>
            </div>
        })}
      </div>
    )
  }
}

export default Employees