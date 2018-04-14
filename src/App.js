import React from 'react'
import axios from 'axios';
//통신 백엔드랑 npm install --save axios

class App extends React.Component{
    constructor(){
        super();
        this.state={
            title:'초기값',
            name:'초기이름'
        }
    }
    
    getCompany(){
        alert('a');
        axios.get('http://localhost:4000/company').then(response=>{
            console.log(response);
            this.setState({
                title:response.data.title,
                name:response.data.name
            });
        }).catch(error=>{
        });
    }
	render(){
        return(<div>
            <div>백엔드통신해보기</div>
            <button onClick={this.getCompany.bind(this)}>통신시작</button>
                <div>{this.state.title}</div>
                <div>{this.state.name}</div>
            </div>)
    }
}
               
export default App;