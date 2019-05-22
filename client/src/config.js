export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-files-ob"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://t5i18qv6te.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_BkrUylfIE",
    APP_CLIENT_ID: "5h61jsfcab8djbknbbijcpcm1n",
    IDENTITY_POOL_ID: "us-east-2:bc6ee1c1-2faa-4439-b155-829d2466a23b"
  },
  MAX_ATTACHMENT_SIZE: 5000000
};
