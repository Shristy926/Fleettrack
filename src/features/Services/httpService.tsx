import axios from 'axios';

const http = axios.create({
  baseURL: 'http://ivms.api.ivmssuite.com/api',
  headers: {
    ProjectId : '87B8FF56-D898-4E44-A92B-809F8435172F',
    AppId : '87B8FF56-D898-4E44-A92B-809F8435172F',
    ApplicationId : '87B8FF56-D898-4E44-A92B-809F8435172F',
    'Content-Type': 'application/json',
  },
});

export default http;
