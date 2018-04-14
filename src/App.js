import React from 'react'

class App extends React.Component{
    
    
    getCompany(){
        alert('a');
    }
	render(){
        return(<div>
            <div>백엔드통신해보기</div>
            <button onClick={this.getCompany.bind(this)}>통신시작</button>
            </div>)
    }
}
               
export default App;