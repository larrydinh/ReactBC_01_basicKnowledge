import React, { Component } from 'react'

export default class HandleEvent extends Component {

handleClick =() => {
    alert('gi dei chai');
}
showMessage =(name)=>{
    alert('ten la ' +name)
}
// -------------------------------------------------
    render() {
        return (
            <div className="container">
                {/* Cach truyen callback truc tiep(old)  */}
               <button className="btn btn-success" onClick={this.handleClick}>Click</button>
               {/* có tham số thì .bind  */}
               <button className="btn btn-success" onClick={this.showMessage.bind(this,'Si')}>Clickkk</button>


                {/* Cach truyen ham nặc danh(new)  */}
                <button onClick={()=>{
                    this.showMessage('Phu')}}>Ham nac danh</button>
            </div>
        )
    }
}
