import React, { Component } from 'react'
import {Table, Button} from 'semantic-ui-react'
import web3 from '../ethereum/web3'
import Campaign from '../ethereum/campaign'
import {Router} from '../routes'

export default class RequestRow extends Component {

    onApprove=async()=>{
        const accounts = await web3.eth.getAccounts()
        const campaign = Campaign(this.props.address)
        await campaign.methods.approveRequest(this.props.id).send({from:accounts[0]})
        Router.pushRoute('/compaigns/requests/index') 
    }

    onFinalize=async()=>{
        const accounts = await web3.eth.getAccounts()
        const campaign = Campaign(this.props.address)
        await campaign.methods.pushRequest(this.props.id).send({from:accounts[0]})
        // Router.pushRoute('/compaigns/requests/index') 
    }


    render() {
        const {Row, Cell} = Table
        const {id,request}= this.props

        return (
            <Row disabled={request.complete}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{`${web3.utils.fromWei(request.value, 'ether')} ETH`}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount} </Cell>

                <Cell>{ request.complete ? null: (
                    <Button  color='green' basic onClick={this.onApprove}>Approve</Button>)
                }</Cell>
                <Cell>{request.complete ?null:(
                    <Button color='teal' basic onClick={this.onFinalize}>Finalize</Button>)
                }</Cell>

                
                
            </Row>
        )
    }
}
