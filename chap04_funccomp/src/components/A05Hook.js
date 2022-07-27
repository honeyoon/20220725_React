import React, {useState, useEffect, useRef, useCallback} from "react";

function A05Hook() {
  // useState
  // 값 보존과 화면 갱신
  const [data, setData] = useState({
    num: 0,
    str: '',
  });
  const [today, setToday] = useState(new Date());

  // useRef()
  // 값 보존, DOM 연결
  // const cnt = useRef(1);
  const numRef = useRef();      // dom 연결시에는 값 없음

  // componentDidMount, componentDidUpdate => useEffect
  useEffect( () => {
    setTimeout(() => {
      setToday(new Date())
    }, 2000);
  }, [data.num]);     // 의존 관계 설정
  // [] 가 없으면 화면 리 렌더링 마다 재 실행된다
  // [] => componentDidMount. 처음 1번만 실행된다
  // [data.num, ] => data.num이 변경되면 재 실행된다.

  useEffect(() => {
    // console.log(numRef.current);
    numRef.current.style.background = 'orange';
  }, []);

  // useCallback => Event Handler
  const changeNum = useCallback(evt => {
    setData({...data, num: evt.target.value})
  }, [data]);   // 내부에서 참조하는 state 변수, 함수가 대상이 된다

  const changeStr = useCallback( evt => {
    setData( data => ({...data, [evt.target.name]: evt.target.value}) )
  }, []);

  return (
    <div>
      <h3>A05. useState, useEffect</h3>

      <div>
        Num: {data.num}
          <input type="text" name="num" className="form-control" ref={numRef}
              value={data.num} onChange={changeNum} />
          <br />

        Str: {data.str}
          <input type="text" name="str" className="form-control"
              value={data.str} onChange={changeStr} />
          <br />

        Today: {today.toLocaleString()}<br />
        <br />

        Avg:
        <div className="input-group">
          <input type="text" name="str" className="form-control" />
          <button className="btn btn-outline-primary btn-sm">ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A05Hook;
