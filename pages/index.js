import React from 'react';
import IndexPage from '../components/Dashboard/indexPages';
import fetch from 'isomorphic-fetch';

const config = require ("../config.json");
class index extends React.Component {

    //Untuk get APi dari config.json
    // static async getInitialProps(){
    //     const data = await fetch(`${config["global-api"].base_url}/summary`);
    //     const items = await data.json(); //merubah data ke bentuk JSON
    //     return{
    //         items,
    //     }
    // }

    static async getInitialProps(){
        const data = await fetch(`${config["api-global-new"].base_url}`);
        const items = await data.json(); //merubah data ke bentuk JSON
        return{
            items,
        }
    }

    render(){
        const {items} = this.props;
        // console.log(items);
        return(
            <>
                        <IndexPage isGlobal={true} data ={items}/>

            </>
        )
    }
}

export default index;
