import React from 'react';
import IndexPage from '../components/Dashboard/indexPages';
import fetch from 'isomorphic-fetch';

const config = require ("../config.json");

class indonesia extends React.Component {

     //Untuk get APi dari config.json
     static async getInitialProps(){
        const data = await fetch(`${config["api-indonesia"].base_url}`); //getAPI
        const items = await data.json(); //merubah data ke bentuk JSON
        const stat = await fetch(`${config["global-api"].base_url}${config["global-api"].total_live}`);
        const statDataCovid = await stat.json();
        return{
            items,
            statDataCovid
            
        }
        
    }

    
    
    render(){
        const {items, statDataCovid} = this.props;
        // console.log("pea",items.update.total);
        return(

            <IndexPage isGlobal={false} data ={items.update.total} statistik={statDataCovid}/>

        )
    }
}

export default indonesia;