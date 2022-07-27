import React, {useState, useEffect, useRef, useCallback, useMemo} from "react";

function A05Hook() {
  // useState
  // 값 보존과 화면 갱신
  const [data, setData] = useState({
    num: 0,
    str: '',
    avg: '',
    list: [],
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
    return () => console.log('update 전에 실행할 명령이 있으면 기술');
  }, []);

  // useCallback => Event Handler
  const changeNum = useCallback(evt => {
    setData({...data, [evt.target.name]: Number(evt.target.value)})
  }, [data]);   // 내부에서 참조하는 state 변수, 함수가 대상이 된다

  const changeStr = useCallback( evt => {
    setData( data => ({...data, [evt.target.name]: evt.target.value}) )
  }, []);   // 의존 관계가 없으므로 최초 1번만 실행된다. 가능하면 이 방법 사용.

  const addList = useCallback(() => {
    setData(data => {
      if (data.avg > 0) {
        return {...data, list: data.list.concat(data.avg)}
      }
    });
  }, []);

  // useMemo => 일반 메서드
  const getAverage = (arr) => {
    console.log('계산중...');
    if (arr.length === 0) return 0;
    const total = arr.reduce((total, item) => total + item, 0);
    return total / arr.length;
  };

  const getAverageMemo = useMemo(() => {
    return getAverage(data.list);
  }, [data.list]);


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

        Avg: {data.avg} / {getAverageMemo}
        <div className="input-group">
          <input type="text" name="avg" className="form-control" 
            value={data.avg} onChange={changeNum}/>
          <button className="btn btn-outline-primary btn-sm"
            onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A05Hook;
