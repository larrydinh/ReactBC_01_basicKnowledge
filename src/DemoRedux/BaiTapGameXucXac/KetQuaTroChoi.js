import React, { Component } from 'react'
//Thu vien ket noi voi store cua redux
import {connect} from 'react-redux'
 class KetQuaTroChoi extends Component {
    render() {
        let {stateGame}=this.props;
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
        ban chon: <span className="text-success">{this.props.stateGame.banChon}</span>
                </div>
                <div className="display-4">
        So ban thang: <span className="text-success">{stateGame.soBanThang}</span>
                </div>
                <div className="display-4">
        Tong so ban choi: <span className="text-success">{stateGame.tongSoBanChoi}</span>
                </div>

                <div className="display-4"> 
                <button onClick={()=>{
                    //tao ra 1 action
                    const action = {
                        type: 'PLAY_GAME'
                    }
                    //Dua action len reducer
                    this.props.dispatch(action)
                }} className="btn btn-success p-3"><span className="h3">Play Game</span></button>
                </div>
             
            </div>
        )
    }
}

const mapStateToProps = (rootReducer)=>{
    return{
        stateGame:rootReducer.baiTapGameReducer
        //Lay het de hieu van de
        // banChon:rootReducer.baiTapGameReducer.banChon
    }
} //state dai dien cho rootReducer

export default connect(mapStateToProps) (KetQuaTroChoi)

// rfcredux 