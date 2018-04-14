import React from 'react';
import axios from 'axios';
import card from './card';

class Application extends React.Component{
    
    constructor(){
        super();
        
        this.state={
            count :0,
            company:[]
        }
    }
    
    getWanted(){
        alert('a');
        axios.get('http://localhost:4000/company').then(response=>{
            this.setState({
                count:response.data.count,
                company:response.data.company
            })
        }).catch(error=>{});
    }
  
	render(){
        
        const {count, company} =this.state;
        
        return(<div>
                <button onClick={this.getWanted.bind(this)}>데이터가져오기</button>
                <div>{count}</div>
                <hr style={{margin:'10px 0'}} />
                
                <div className="container">
                {company.map((value)=>{
                    console.log(value.name)
                    return (
                        <card info={value} />
                        )
                })}
                </div>
                
            </div>)
    }
}
               
export default Application;