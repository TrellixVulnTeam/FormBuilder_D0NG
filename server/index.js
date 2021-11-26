
require('dotenv').config({ path: __dirname + '/.env' })
const express = require("express");
const notion = require("./notion_api")
// const path = require("path")
const PORT = process.env.PORT || 3001;
const app = express();

const notion_api = new notion.NotionAPI()

app.get('/api', (req, res) => {
    try {
        res.end("No information available")
    }
    catch (error) {
        console.log(error)
    }
})

app.get('/api/teamMembers', (req, res) => {
    ; (async () => {
        let data = await notion_api.getTeamMembers();
        res.end(data)
    })()
})

app.get('/api/references', (req, res) => {
    ; (async () => {
        let data = await notion_api.getReferences();
        res.end(data)
    })()
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});