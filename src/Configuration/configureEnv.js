const dotenv = require('dotenv');
const {writeFileSync} = require('fs');

dotenv.config();

const content = `{
    "client_id": "${process.env.CLIENT_ID}",
    "client_secret": "${process.env.CLIENT_SECRET}",
    "app_api_base_url": "${process.env.APP_API_BASE_URL}",
    "auth_api_base_url": "${process.env.AUTH_API_BASE_URL}",
    "audit_api_base_url": "${process.env.AUDIT_API_BASE_URL}",
    "enable_session_timeout": ${process.env.ENABLE_SESSION_TIMEOUT},
    "storage_session_time_key": "${process.env.STORAGE_SESSION_TIME_KEY}",
    "expiry_time_in_minute": ${+process.env.EXPIRY_TIME_IN_MINUTE},
    "warning_alert_timeout_in_minute": ${+process.env.WARNING_ALERT_TIMEOUT_IN_MINUTE}
  }`;

const writeFilePAth = './src/Configuration/config.json';

writeFileSync(writeFilePAth, content, (err) => {
  console.log('error while setting up environment json', err);
});
