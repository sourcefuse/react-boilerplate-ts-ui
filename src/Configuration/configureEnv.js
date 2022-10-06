const dotenv = require('dotenv');
const {writeFileSync} = require('fs');

dotenv.config();

const content = `{
    "client_id": "${process.env.CLIENT_ID}",
    "client_secret": "${process.env.CLIENT_SECRET}",
    "app_api_base_url": "${process.env.APP_API_BASE_URL}",
    "auth_api_base_url": "${process.env.AUTH_API_BASE_URL}",
    "audit_api_base_url": "${process.env.AUDIT_API_BASE_URL}"
}`;

const writeFilePAth = './src/Configuration/config.json';

writeFileSync(writeFilePAth, content, (err) => {
  console.log('error while setting up environment json', err);
});
