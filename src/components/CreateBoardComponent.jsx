import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class CreateBoardComponent extends Component {
    constructor(props) {
        super(props);
//dkssdfasdfs
        this.state = {
            comId:'',
            comNm:'',
            comDesc:'',
            eduTypeCd:'',
            addr:'',
            stuNum:'',
            telNum:'',

        }

        this.changeComIdHandler = this.changeComIdHandler.bind(this);
        this.changeComNmHandler= this.changeComNmHandler.bind(this);
        this.changeComDescHandler =this.changeComDescHandler(this);
        this.changeTelNumHandler =this.changeTelNumHandler(this);
        //this.changeStuNumHandler =this.changeStuNumHandler(this);
        this.changeAddrHandler =this.changeAddrHandler(this);
        this.changeEduTypeCdHandler =this.changeEduTypeCdHandler(this);
        this.createBoard = this.createBoard.bind(this);
    }



    changeComIdHandler = (event) => {
        this.setState({comId: event.target.value});
    }

    changeComNmHandler = (event)=> {
        this.setState({comNm: event.target.value});
    }
    changeComDescHandler = (event)=> {
        this.setState({comDesc: event.target.value});
    }
    changeTelNumHandler = (event)=> {
        this.setState({telNum: event.target.value});
    }
    /*changeStuNumHandler = (event)=> {
        this.setState({stuNum: event.target.value});
    }*/
    changeAddrHandler = (event)=> {
        this.setState({addr: event.target.value});
    }
    changeEduTypeCdHandler = (event)=> {
        this.setState({eduTypeCd: event.target.value});
    }

    createBoard = (event) => {
        event.preventDefault();
        let board = {
            comId: this.state.comId,
            comNm: this.state.comNm,
            comDesc: this.state.comDesc,
            telNum: this.state.telNum,
            //stuNum: this.state.stuNum,
            addr: this.state.addr,
            eduTypeCd: this.state.eduTypeCd
        };
        console.log("board => "+ JSON.stringify(board));
            BoardService.createBoard(board).then(res => {
                this.props.history.push('/board');
            });
        } /*else {
            BoardService.updateBoard(this.state.comId, board).then(res => {
                this.props.history.push('/board');
            });
        }*/


    cancel() {
        this.props.history.push('/board');
    }

    /*
    getTitle() {
        if (this.state.comId === '_create') {
            return <h3 className="text-center"> 추가 </h3>
        } else {
            return <h3 className="text-center">{this.state.comId}글을 수정 합니다.</h3>
        }
    }

    // For update function add
    componentDidMount() {
        if (this.state.comId === '_create') {
            return
        } else {
            BoardService.getOneBoard(this.state.comId).then( (res) => {
                let board = res.data;
                console.log("board => "+ JSON.stringify(board));
                
                this.setState({
                        type: board.type,
                        title: board.title,
                        contents: board.contents,
                        memberNo: board.memberNo
                    });
            });
        }
    }

    */

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> 기업 등록 </h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                    <label> 기업 아이디 </label>
                                    <input type="text" placeholder="comId" name="comId" className="form-control"
                                           value={this.state.comId} onChange={this.changeComIdHandler}/>
                                </div>
                                    <div className = "form-group">
                                        <label> 기업명</label>
                                        <textarea placeholder="comNm" name="comNm" className="form-control"
                                        value={this.state.comNm} onChange={this.changeComNmHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>  기업 설명 </label>
                                        <input placeholder="comDesc" name="comDesc" className="form-control"
                                        value={this.state.comDesc} onChange={this.changeComDescHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 주소 </label>
                                        <input placeholder="addr" name="addr" className="form-control"
                                               value={this.state.addr} onChange={this.changeAddrHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 교육 과정 유형  </label>
                                        <input placeholder="eduTypeCd" name="eduTypeCd" className="form-control"
                                               value={this.state.eduTypeCd} onChange={this.changeEduTypeCdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 연락처  </label>
                                        <input placeholder="telNum" name="telNum" className="form-control"
                                               value={this.state.telNum} onChange={this.changeTelNumHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateBoardComponent;