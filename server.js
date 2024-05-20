require('dotenv').config();
const express = require('express');
const app = express();
const webpush = require('web-push');
const cors = require('cors');

const port = process.env.NODE_PORT;

const apiKeys = {
    publicKey: process.env.WEB_PUSH_PUBLIC_KEY,
    privateKey: process.env.WEB_PUSH_PRIVATE_KEY,
};

webpush.setVapidDetails(
    `mailto:${process.env.WEB_PUSH_MAILTO_STRING}`,
    apiKeys.publicKey,
    apiKeys.privateKey
);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

const subDatabse = [];

app.post('/save-subscription', (req, res) => {
    console.log('req => ', req);
    subDatabse.push(req.body);
    res.json({ status: 'Success', message: 'Subscription saved!' });
});

app.get('/send-notification', (req, res) => {
    webpush.sendNotification(subDatabse[0], 'Hello world');
    res.json({ statue: 'Success', message: 'Message sent to push service' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});
