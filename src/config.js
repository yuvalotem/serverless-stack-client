export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-upload-intro"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://i9i0mztuel.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_nCitTCgOF",
      APP_CLIENT_ID: "5pd251js3b4jtj5qvqa9njbr88",
      IDENTITY_POOL_ID: "us-east-2:fdb478dd-3b02-4166-8cb4-8d8bb25be8ce"
    }
  };