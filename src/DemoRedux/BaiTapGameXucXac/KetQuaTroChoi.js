import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                    ban chon: <span className="text-success">Tai</span>
                </div>
                <div className="display-4">
                    So ban thang: <span className="text-success">5</span>
                </div>
                <div className="display-4">
                   Tong so ban choi: <span className="text-success">10</span>
                </div>
                <button className="btn btn-success">Ket qua</button>
            </div>
        )
    }
}
