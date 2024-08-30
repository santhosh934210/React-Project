
import React from "react";

class ToggleMessage extends React.Component
{
  state={
    show:"Show Component",msg:""
  }
  ShowMsg=()=>{
    if(this.state.show==="Show Component")
    {
      this.setState({show:"Hide Component"})
      this.setState({msg:"Hi! How are You"})
      
    }
    else{
      this.setState({show:"Show Component"})
      this.setState({msg:""})
    }
  }
  render()
  {
    return(
      <div>
        <button onClick={this.ShowMsg}>{this.state.show}</button>
        <p>{this.state.msg}</p>
      </div>
    ) 
  }
}
export default ToggleMessage;
