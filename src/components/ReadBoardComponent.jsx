import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comId: this.props.match.params.comId,
            board: {}
        }

        this.goToUpdate = this.goToUpdate.bind(this);

    }

    componentDidMount() {
        BoardService.getOneBoard(this.state.comId).then( res => {
            this.setState({board: res.data});
            console.log("get result => "+ JSON.stringify(res.data));
        });

        
    }


    /*returnBoardType(typeNo) {
        let type = null;
        if (typeNo == 1) {
            type = "자유게시판";

        } else if (typeNo == 2 ) {
            type = "질문과 답변 게시판";

        } else {
            type = "타입 미지정";
        }

        return (
            <div className = "row">
                <label> Board Type : </label> {type}
            </div>
        )

    }*/

    /*returnDate(cTime, uTime) {
        return (
            <div className = "row">
                <label>생성일 : [ {cTime} ] / 최종 수정일 : [ {uTime} ] </label>
            </div>
        )
    }*/

    goToList() {
        this.props.history.push('/board');
    }

    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/create-board/${this.state.comId}`);
    }

    /*deleteView = async function () {
        if(window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
            BoardService.deleteBoard(this.state.no).then( res => {
                console.log("delete result => "+ JSON.stringify(res));
                if (res.status == 200) {
                    this.props.history.push('/board');
                } else {
                    alert("글 삭제가 실패했습니다.");
                }
            });

        }
    }*/

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> 상세 목록</h3>
                    <div className = "card-body">
                            <div className= "row">
                                <label> 기업 아이디 </label> : {this.state.board.comId}
                            </div>
                            <div className = "row">
                                <label> 기업명  </label>:
                                {this.state.board.comNm}
                            </div>
                            <div className = "row">
                                <label> 기업 설명  </label>:
                                {this.state.board.comDesc}
                            </div>
                            <div className = "row">
                                <label>  주소 </label>:
                                {this.state.board.addr}
                            </div>
                            <div className = "row">
                                <label> 교육 과정 유형 </label>:
                                {this.state.board.eduTypeCd}
                            </div>
                            <div className = "row">
                                <label> 약정 인원  </label>:
                                {this.state.board.stuNum}
                            </div>
                            <div className = "row">
                                <label> 연락처 </label>:
                                {this.state.board.telNum}
                        </div>


                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>

                    </div>
                </div>

            </div>
        );
    }
}


export default ReadBoardComponent;