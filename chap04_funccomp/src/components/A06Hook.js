import React, {useReducer, useEffect, useCallback, useMemo} from "react";

function reducer(state, action) {
  // console.log(state);
  // console.log(action)
  switch (action.key) {
    case 'CHANGE_TODAY':
      return {...state, today: action.payload}
    case 'CHANGE_NUM':
      let value = Number(action.payload.value);
      if (isNaN(value)) value = '';
      return {...state, [action.payload.name]: value};
    case 'CHANGE_STR':
      return {...state, [action.payload.name]: action.payload.value}
    case 'ADD_LIST':
      return {...state, list: state.list.concat(state.avg)}
    default:
      return state;
  }
}
const title = 'A06. Reducer';

function A06Hook() {
  // dispatch는 메서드. useReducer 지정한 메서드를 호출.
  // 값은 useReducer 지정한 메서드의 두번째 매개변수로 전달한다
  const [data, dispatch] = useReducer(reducer, {
    num: '0',
    str: 'Nolbu',
    today: new Date(),
    avg: '',
    list: [],
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch({key: 'CHANGE_TODAY', payload: new Date()})
    }, 2000);
  }, [])
  
  const changeNumber = useCallback(evt => {
    dispatch({key: 'CHANGE_NUM', payload: evt.target})
  }, []);
  const changeString = useCallback(evt => {
    dispatch({key: 'CHANGE_STR', payload: evt.target})
  }, []);
  const addList = useCallback( () => {
    dispatch({key: 'ADD_LIST'})
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
      <h3>A06. Reducer / {title}</h3>

      <div>
        Num: {data.num}
          <input type="text" name="num" className="form-control" 
            value={data.num} onChange={changeNumber} />
          <br />

        Str: {data.str}
          <input type="text" name="str" className="form-control"
            value={data.str} onChange={changeString} />
          <br />

        Today: {data.today.toLocaleString()}<br />
        <br />

        Avg: {data.avg} / {getAverageMemo}
          <div className="input-group">
            <input type="text" name="avg" className="form-control" 
                value={data.avg} onChange={changeNumber}/>
            <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
          </div>
      </div>
    </div>
  );
}
export default A06Hook;
