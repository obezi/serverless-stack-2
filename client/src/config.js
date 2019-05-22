const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1cgts0hs5d2ke"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://w5pl91jwta.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_WaYToplQ8",
    APP_CLIENT_ID: "4h6ct040qdu91jl2ugmuhsel39",
    IDENTITY_POOL_ID: "us-east-1:aa75fcee-7df5-494c-ad94-738dd687892b"
  },
  MAX_ATTACHMENT_SIZE: 5000000
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1gst7ty7i7e5g"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6m5ejlnlbg.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_obEysy4gb",
    APP_CLIENT_ID: "o07c3eettrh4kh6qkmccdfkhn",
    IDENTITY_POOL_ID: "us-east-1:c6d579bc-b3c7-49cc-84b4-f9411c8de590"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
