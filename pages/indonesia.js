import React from 'react';
import IndexPage from '../components/Dashboard/indexPages';
import fetch from 'isomorphic-fetch';

const config = require ("../config.json");

class indonesia extends React.Component {

     //Untuk get APi dari config.json
     static async getInitialProps(){
        const data = await fetch(`${config["api-indonesia"].base_url}${config["api-indonesia"].update}`); //getAPI
        const items = await data.json(); //merubah data ke bentuk JSON

        const data2 = await fetch(`${config["api-indonesia"].base_url}${config["api-indonesia"].prov}`); //getAPI
        const items2 = await data2.json(); //merubah data ke bentuk JSON


        const stat = await fetch(`${config["global-api"].base_url}${config["global-api"].total_live}`);
        const statDataCovid = await stat.json();

        return{
            items,
            statDataCovid,
            items2
            
        }
        
    }

    
    
    render(){
        const {items, statDataCovid, items2} = this.props;
        // console.log("pea",items.update.total);
        return(

            <IndexPage isGlobal={false} data ={items.update.total} statistik={statDataCovid} data2={items2.list_data}/>

        )
    }
}

export default indonesia;