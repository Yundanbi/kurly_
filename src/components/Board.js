import React, { useState } from "react";
import "./Board.css";
import Header from "./Header";
import Footer from "./Footer";

const FruitBoard = () => {
  const [boardList, setBoardList] = useState([
    {
      no: "1",
      title: "오늘까지 온다고 되어있는데 아직 도착 안함",
      description: "내일 캠핑인데ㅠㅠ",
      viewCount: 1,
    },
    {
      no: "2",
      title: "컬리 칼국수 지존임",
      description: "눈 깜빡하니 없어졌어요 돌려주세요",
      viewCount: 2,
    },
    {
      no: "3",
      title: "김치 포장 안됐어요",
      description: "다 새서 옴 환불요망",
      viewCount: 1,
    },
    {
      no: "4",
      title: "날씨가 더운지 상해서 왔네요",
      description: "반품 가능한가요?",
      viewCount: 1,
    },
  ]);

  const [listOk, setListOk] = useState(true);
  const [readOk, setReadOk] = useState(false);
  const [writeOk, setWriteOk] = useState(false);
  const [editOk, setEditOk] = useState(false);
  const [boardInfo, setBoardInfo] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editNo, setEditNo] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const boardListView = () => {
    setListOk(true);
    setReadOk(false);
    setWriteOk(false);
    setEditOk(false);
  };

  const boardRead = (no) => {
    const updatedList = boardList.map((b) =>
      b.no === no ? { ...b, viewCount: b.viewCount + 1 } : b
    );
    setBoardList(updatedList);
    const selectedBoard = boardList.find((b) => b.no === no);
    setBoardInfo(selectedBoard);
    setListOk(false);
    setReadOk(true);
    setWriteOk(false);
    setEditOk(false);
  };

  const boardWrite = () => {
    setListOk(false);
    setReadOk(false);
    setWriteOk(true);
    setEditOk(false);
  };

  const boardSave = () => {
    if (title.trim() === "" || description.trim() === "") {
      setErrorMessage("제목과 내용을 입력하세요!");
      return;
    }
    const newBoard = {
      no: (boardList.length + 1).toString(),
      title,
      description,
      viewCount: 0,
    };
    setBoardList([...boardList, newBoard]);
    setTitle("");
    setDescription("");
    setErrorMessage("");
    boardListView();
  };

  const boardDelete = (no) => {
    const updatedList = boardList.filter((b) => b.no !== no);
    setBoardList(updatedList);
    boardListView();
  };

  const boardEdit = (no) => {
    const boardToEdit = boardList.find((b) => b.no === no);
    setEditNo(boardToEdit.no);
    setEditTitle(boardToEdit.title);
    setEditDescription(boardToEdit.description);
    setListOk(false);
    setReadOk(false);
    setWriteOk(false);
    setEditOk(true);
  };

  const updateBoard = () => {
    const updatedList = boardList.map((b) =>
      b.no === editNo
        ? { ...b, title: editTitle, description: editDescription }
        : b
    );
    setBoardList(updatedList);
    boardListView();
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="board-header-container">
          <div id="left_side">
            <h2>고객센터</h2>
            <ul>
              <li>
                <button className="inquiry-button">고객 게시판 &gt;</button>
              </li>
              <li>
                <button className="inquiry-button">공지사항 &gt;</button>
              </li>
              <li>
                <button className="inquiry-button">자주하는 질문 &gt;</button>
              </li>
              <li>
                <button className="inquiry-button">1:1 문의 &gt;</button>
              </li>
            </ul>
          </div>

          <div id="center">
            {listOk && (
              <div className="board-list-section">
                <h2>고객 게시판</h2>
                <table className="board-table">
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>문의글</th>
                      <th>조회수</th>
                      <th>문의하기</th>
                    </tr>
                  </thead>
                  <tbody>
                    {boardList
                      .slice()
                      .reverse()
                      .map((board) => (
                        <tr key={board.no}>
                          <td>{board.no}</td>
                          <td onClick={() => boardRead(board.no)}>
                            {board.title}
                          </td>
                          <td onClick={() => boardRead(board.no)}>
                            {board.description}
                          </td>
                          <td>{board.viewCount}</td>
                          <td>
                            <button
                              className="btn-action"
                              onClick={() => boardRead(board.no)}
                            >
                              읽기
                            </button>
                            <button
                              className="btn-action"
                              onClick={() => boardEdit(board.no)}
                            >
                              수정
                            </button>
                            <button
                              className="btn-action"
                              onClick={() => boardDelete(board.no)}
                            >
                              삭제
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <button class="puple" onClick={boardWrite}>
                  문의글 작성하기
                </button>
              </div>
            )}

            {readOk && (
              <div className="board-read-section">
                <h5>{boardInfo.title}</h5>
                <hr></hr>
                <p>{boardInfo.description}</p>
                <div className="button-right">
                  <button onClick={boardListView}>목록으로</button>
                </div>
              </div>
            )}

            {writeOk && (
              <div className="board-write-section">
                <h5>문의글 작성</h5>
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목 입력"
                />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="내용 입력"
                />
                <div className="button-right">
                  <button onClick={boardSave}>저장</button>
                  <button onClick={boardListView}>목록으로</button>
                </div>
              </div>
            )}

            {editOk && (
              <div className="board-edit-section">
                <h5>게시물 수정</h5>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder="수정 제목"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="수정 내용"
                />
                <div className="button-right">
                  <button onClick={updateBoard}>수정</button>
                  <button onClick={boardListView}>목록으로</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FruitBoard;
