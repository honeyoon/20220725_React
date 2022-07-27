import React, {useState} from 'react'

function A03FuncEvent() {
  const [data, setData] = useState({
    name: '',
    age: '',
    date: '2022-07-27',
    sports: 'baseball',
    isChecked: false,
    language: ['React'],
    baseball: '',
    four: []
  });

  const changeString = evt => {
    if (evt.target.value.trim().length !== 0) {
      const newData = {...data, [evt.target.name]: evt.target.value}
      setData(newData)
    }
  }
  const changeNumber = evt => {
    let value = Number(evt.target.value);
    if (isNaN(value)) value = '';
    setData(data => ({...data, [evt.target.name]: value}));    // state의 변수를 참조하는 함수로도 기술 가능
  }
  const changeCheck = evt => setData({...data, [evt.target.name]: !data[evt.target.name]})
  const changeLanguage = evt => {
    const value = evt.target.value;
    if (data.language.includes(value)) {
      const lang = data.language.filter(item => item !== value);
      setData({...data, language: lang});
    } else {
      setData({...data, language: data.language.concat(value)});
    }
  };
  const changeOption = evt => {
    const elem = Array.from(evt.target.selectedOptions);
    const x = elem.map(item => item.value);
    console.log(elem, data)
    setData({...data, [evt.target.name]: x})
  }

  return (
    <div>
      <h3>A03 Function Component Event & Form</h3>

      <form>
        Name: {data.name}
          <input type="text" name="name" className="form-control" 
            value={data.name} onChange={changeString} />
        Age: {data.age + 100}
          <input type="text" name="age" className="form-control" 
            value={data.age} onChange={changeNumber} />
        Date: {data.date}
          <input type="date" name="date" className="form-control" 
            value={data.date} onChange={changeString}  />

        RadioButton: {data.sports}<br />
          <div className="form-check">
            <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input" 
                defaultChecked={data.sports === 'baseball'} onChange={changeString} />
            <label htmlFor="baseball" className="form-check-label">야구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input"
                defaultChecked={data.sports === 'soccer'} onChange={changeString} />
            <label htmlFor="soccer" className="form-check-label">축구</label>
          </div>
          <div className="form-check">
            <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input" 
                defaultChecked={data.sports === 'basketball'} onChange={changeString}/>
            <label htmlFor="basketball" className="form-check-label">농구</label>
          </div>

        CheckBox One: {data.isChecked ? '동의' : '동의 안함'}<br />
          <div className="form-check">
            <input type="checkbox" name="isChecked" className="form-check-input" 
                value={data.isChecked} onChange={changeCheck} />
            <label htmlFor="check" className="form-check-label">동의</label>
          </div>

        CheckBox: {data.language.join(' - ')}<br />
          <div className="form-check">
            <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input" 
                defaultChecked={data.language.includes('Angular')} onChange={changeLanguage} />
            <label htmlFor="baseball" className="form-check-label">앵귤러</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="React" id="react" className="form-check-input" 
                defaultChecked={data.language.includes('React')} onChange={changeLanguage} />
            <label htmlFor="react" className="form-check-label">리엑트</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
                defaultChecked={data.language.includes('Vue')} onChange={changeLanguage} />
            <label htmlFor="vue" className="form-check-label">뷰</label>
          </div>

        SelectBox: {data.baseball}<br/>
          <select name="baseball" className="form-control"  
              value={data.baseball} onChange={changeString}>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
          </select>
        
        SelectBox Multi: {data.four}<br />
          <select name="four" multiple size="3" className="form-control" 
              value={data.four} onChange={changeOption}>
            <option>NC</option>
            <option>두산</option>
            <option>엘지</option>
          </select>
          <br />

        <button type="submit">SEND</button>
      </form>
    </div>
  )
}

export default A03FuncEvent
