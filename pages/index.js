import React, { Component }from "react";
import '../ethereum/factory';
import instance from "../ethereum/factory";
import {Card, Button} from 'semantic-ui-react'
import Layout from "../components/Layout"
import {Link} from '../routes'

class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns = await instance.methods.getDeployedCampaigns().call()
        return {campaigns}
    }

    renderCampaigns(){
        const items = this.props.campaigns.map((address)=>{
            return {
                header: address,
                description: <Link route={`/compaigns/${address}`}><a>View Campaign</a></Link>,
                fluid: true
            }
        })

        return <Card.Group items={items}/>
    }

    render() {
        return(
            <Layout>
            <div>
            
            <h3>Open Campaigns</h3>
            <Link route='/campaigns/new'>
                <a>
                    <Button floated='right' content="Create Campaign" icon="add circle" primary/>
                </a>
            </Link>
            
            
            {this.renderCampaigns()}
            
            </div></Layout>
            
        );
    }
}

export default CampaignIndex;