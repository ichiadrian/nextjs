import React from 'react';
import IndexPage from '../components/Dashboard/indexPages';
import fetch from 'isomorphic-fetch';

const config = require ("../config.json");

class indonesia extends React.Component {

     //Untuk get APi dari config.json
     static async getInitialProps(){
        const data = await fetch(`${config["api-indonesia"].base_url}`);
        const items = await data.json(); //merubah data ke bentuk JSON
        return{
            items
            
        }
        
    }

    
    
    render(){
        const {items} = this.props;
        // console.log("pea",items.update.total);
        return(

            <IndexPage isGlobal={false} data ={items.update.total}/>

        )
    }
}

export default indonesia;