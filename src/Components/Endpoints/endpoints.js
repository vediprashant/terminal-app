import React from "react";
import { List, Button } from 'semantic-ui-react'

import "./endpoints.css";

const Endpoints = ({ endpoints }) => {
    const copyToClipboard = (url) => {
        navigator.clipboard.writeText(url)
    }
      
  return (
          <List divided relaxed inverted>
          {endpoints.map((endpoint, index) => (
            <List.Item>
        <Button color='yellow inverted' circular icon='copy outline' title='copy' floated='left' onClick={() => copyToClipboard(endpoint.url)}/>
          <List.Content>
          <List.Header className='url'>{endpoint.url}</List.Header>
          </List.Content>
          <List.Content floated='right' className='time-left'>
            {
                Math.floor(endpoint.expiration_time_left/60) >=1 ? (
                    <List.Description className='time-left'> Expires in {Math.floor(endpoint.expiration_time_left/60)} minutes</List.Description>
                ) : (
                    <List.Description className='time-left'> Expiring in less then a minute</List.Description>
                )
            }   
        </List.Content>
        </List.Item>
        ))}
  </List>
  );
};

export default Endpoints;