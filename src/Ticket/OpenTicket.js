import { result } from "lodash"
import React from "react"
import './OpenTicket.css'
class OpenTicket extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            result:this.props.data,
            flag:-1,
            input:''
        }
    }
    handleChange=(itemid)=>{
        this.setState({flag:itemid})
    }
    handleInput=(e)=>{
        this.setState({input:e.target.value})
    }
    render() {
        const {data, handleStatusChange, addSummary}=this.props
      return (
        <div className="row" style={{margin: '10px'}}>
            {
            data.map((item)=>(
                <div className="col-sm-12 col-lg-3">
                    <div className="card k1" style={{margin: '5px', backgroundColor: '#dddddd', boxShadow: '-4px 2px 2px 2px #dcdde1'}}>
                        <div className="card-body" style={{backgroundColor: `${item.bg}`}}>
                            <h3 className="card-text"><b></b>{item.description}</h3>
                            <p className="card-title">{item.timeStamp}</p>
                            <p className="card-text"><b>Ticket ID: </b>{item.id}</p>
                            {
                                this.state.flag===item.id ? 
                                <>
                                <input type="text" placeholder="Add summary" style={{marginRight: '5px'}} onChange={(e)=>this.handleInput(e)}></input>
                                <button onClick={(e)=>addSummary(this.state.input,item.id)}>Close</button>
                                </>
                                 :  <button className="x btn btn-outline-danger" onClick={(e)=>this.handleChange(item.id)}>Close</button>
                            }
                        </div>
                    </div>
                </div>
            ))
          }
        </div>
      )
    }
}
export default OpenTicket