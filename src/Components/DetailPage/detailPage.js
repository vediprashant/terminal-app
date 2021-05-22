import React, {useState, useEffect} from "react";
import { Icon, Input, Button, Segment, Divider, Header, Container, List } from 'semantic-ui-react'
import "./detailPage.css"
import urldetail from "../../Services/endpointDetails"
import API_URL from "../../Constants/urlConstants";


const DetailPage = () => {
    const [endpointDetails, setEndpointDetails] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [endpoint, setEndpoint] = useState('')
    const [isError, setError] = useState(false)
    const [message, setMessage] = useState('')

    const fetchDetails = async () => {
        setError(false)
        setLoading(true)
        const fetchedDetails = await urldetail(endpoint);
        setLoading(false)
        if(fetchedDetails.message){
            setError(true)
            setMessage("Please provide valid URL")
        }
        else{
            setEndpointDetails(fetchedDetails)
            if(fetchedDetails.length > 0){
                setError(false)
            }
            if(fetchedDetails.length==0){
                setError(true)
                setMessage(`No data exist for this URL. Please provide valid URL or Post data to ${API_URL.EndpointDetailUrl('<URL>')} this Endpoint`)
            }
        }
    }
    const onChangeHandler = (e) => {
        setEndpoint(e.target.value);
      };
      const expirationTimeLeft = (time) => {
        const timeLeft = Math.floor(time/60)
        if(timeLeft==0){
            return 'Less Than A Minute Is Left'
        }
        return `${timeLeft} Minutes Left`
      };
      const convertToDict = (value) => {
          value = value.substring(1, value.length - 1)
          let check = value.split(", '")
            for(let i=0;i<check.length;i++){
                check[i]=check[i].replace(/'/g, '');
            }
          return check
      };
  return (
        <div>
            <div className='input-url'>
                <Input icon={<Icon name='search' inverted circular link />}
                    placeholder='Endpoint...' onChange={onChangeHandler} value={endpoint} />
                <Button color="google plus" onClick={fetchDetails}>Inspect Endpoint</Button>
            </div>
            {
                isError ? (
                    <Segment>
                        <Header>{message}</Header>
                    </Segment>
                ) : isLoading ? (
                    <div className="loading-container">
                        <div className="load"></div>
                    </div>
                ) : endpointDetails.length > 0 ? (
                    <div>
                    <List divided relaxed>
                <List.Item>
                <List.Content floated='left' className='endpoint'>
                    <Header className='endpoint'>EndPoint => {endpoint}</Header>
                </List.Content>
                <List.Content floated='right' className='time-left'>
                    <Header className='time-left'>{expirationTimeLeft(endpointDetails[0].expiration_time_left)}</Header>
                </List.Content>
                </List.Item>
                </List>
                {endpointDetails.map((endpoint, index) => (
                    <Segment inverted color='grey'>
                        <Container>
                            <Header>Raw Body</Header>
                            <Segment compact inverted color='black'>{endpoint.body}</Segment>
                        </Container>
                        <Divider />
                        <Container>
                            <Header>Headers</Header>
                        <Segment compact inverted color='black'>{convertToDict(endpoint.headers).map((header) => (
                            <p>{header}</p>
                        ))}</Segment>
                        </Container>
                        <Divider />
                        <Container>
                            <Header>Query params</Header>
                            <Segment compact inverted color='black'>{endpoint.query_params}</Segment>
                        </Container>
                        
                    </Segment>
                ))}
                </div>
                ) : (
                    (null)
                )
            }
            </div>
  );
};

export default DetailPage;
