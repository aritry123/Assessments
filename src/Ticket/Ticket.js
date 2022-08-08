import React from "react"
import OpenTicket from "./OpenTicket"
import CloseTicket from "./CloseTicket"
class Ticket extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            result:this.props.data
        }
    }
    getOpenedTickets=()=>{
        return this.state.result.filter((item)=>item.status===true)
    }
    getClosedTickets=()=>{
        return this.state.result.filter((item)=>item.status===false)
    }
    handleStatusChange=(itemid)=>{
        let temp=[...this.state.result]
        let obj=temp.find((item)=>item.id===itemid)
        obj.status=!obj.status
        this.setState({result:temp})
    }
    addSummary=(sum,itemid)=>{
        let temp=[...this.state.result]
        let obj=temp.find((item)=>item.id===itemid)
        obj.summary=sum
        this.setState({result:temp})
        this.handleStatusChange(itemid)
    }
    render() {
      return (
        <div>
          <div>
            <h2 style={{textAlign: 'center',color: 'green'}}>Opened Tickets</h2>
            <OpenTicket data={this.getOpenedTickets()} handleStatusChange={this.handleStatusChange} addSummary={this.addSummary}></OpenTicket>
          </div>
          <div className="row">
            <h2 style={{textAlign: 'center',color: 'red'}}>Closed Tickets</h2>
            <CloseTicket data={this.getClosedTickets()}></CloseTicket>
          </div>
        </div>
      )
    }
}
export default Ticket