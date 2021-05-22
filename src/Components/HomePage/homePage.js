import React, {useState, useEffect} from "react";
import { Button, Icon, Header, Message, Label } from 'semantic-ui-react'
import "./homePage.css"
import EndpointsList from "../../Services/listEndpoints"
import CreateEndpoint from "../../Services/createEndpoint"
import Endpoints from "../Endpoints/endpoints"
const HomePage = () => {
    const [endpointList, setEndpointList] = useState([])
    const [endpoint, setEndpoint] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [isCreated, setCreated] = useState(false)

  useEffect(() => {
        listEndpoints();
  }, [endpoint])
    const listEndpoints = async () => {
        setLoading(true)
        const endpoints = await EndpointsList();
        setLoading(false)
        setEndpointList(endpoints)
    }

    const createEndpoint = async () => {
        setCreated(false)
        const createdEndpoint = await CreateEndpoint();
        setEndpoint(createdEndpoint)
        navigator.clipboard.writeText(createdEndpoint.url)
        setCreated(true)
    }

  return (
        <div>
            <div className='heading'>
            <Header as='h1' textAlign='center' inverted color='grey'>Create New <span>HTTP</span> endpoints to inspect the data in user friendly way!</Header>
          <Button color='red' size='large' onClick={createEndpoint}>
            <Icon name='add circle' /> Create New
         </Button>
         {isCreated ? (
             <div className='created-url'>
             <Label color='green' size='medium'>URL Successfully created and copied to ClipBoard!</Label></div>
         ) : (null)}
          </div>
        {isLoading ? (
            <div className="loading-container">
                <div className="load"></div>
            </div>
        ) : 
        <Endpoints endpoints={endpointList} />
        }
        </div>
  );
};

export default HomePage;
