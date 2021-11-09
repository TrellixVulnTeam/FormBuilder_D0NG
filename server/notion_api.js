require('dotenv').config()
const { Client } = require('@notionhq/client')

class NotionAPI {
    constructor() {
        this.databaseTeamMembersId = process.env.NOTION_DATABASE_TEAMMEMBERS_ID
        this.databaseReferencesId = process.env.NOTION_DATABASE_REFERENCES_ID
        this.client = new Client({
            auth: process.env.NOTION_API_KEY
        })
    }

    // To retrieve the information from the DB -- GET
    async getTeamMembers() {
        try {
            const response = await this.client.databases.query({
                database_id: this.databaseTeamMembersId
            })
            let TeamMembers = {
                teamMembers: []
            }
            const length = response.results.length
            for (let i = 0; i < length; i++) {
                let person = {
                    person: {
                        name: response.results[i].properties.Name.title[0].plain_text,
                        designation: response.results[i].properties.Designation.rich_text[0].plain_text,
                        cv: response.results[i].properties.CV.rich_text[0].plain_text,
                        skills: response.results[i].properties.Skills.rich_text[0].plain_text,
                    }
                }
                TeamMembers["teamMembers"].push(person)
            }
            let info = JSON.stringify(TeamMembers)
            return info
        }
        catch (error) {
            return error
        }
    }

    // Passing a team member to the DB --- POST
    createTeamMember({ title, designation, CV, skills }) {
        try {
            this.client.pages.create({
                parent: {
                    database_id: this.databaseTeamMembersId
                },
                properties: {
                    [process.env.NOTION_TEAMMEMBERS_NAME_ID]: {
                        title: [{
                            type: 'text',
                            text: {
                                content: title
                            }
                        }]
                    },
                    [process.env.NOTION_TEAMMEMBERS_DESIGNATION_ID]: {
                        rich_text: [{
                            type: 'text',
                            text: {
                                content: designation
                            }
                        }]
                    },
                    [process.env.NOTION_TEAMMEMBERS_CV_ID]: {
                        rich_text: [{
                            type: 'text',
                            text: {
                                content: CV
                            }
                        }]
                    },
                    [process.env.NOTION_TEAMMEMBERS_SKILLS_ID]: {
                        rich_text: [{
                            type: 'text',
                            text: {
                                content: skills
                            }
                        }]
                    }
                }

            })
            console.log("Succes with the transation")
        }
        catch (error) {
            console.log(error)
        }

    }

    async getReferences() {
        try {
            const response = await this.client.databases.query({
                database_id: this.databaseReferencesId
            })
            let references = {
                references: []
            }
            const length = response.results.length
            console.log(response.results[0])
            for (let i = 0; i < length; i++) {
                let person = {
                    person: {
                        name: response.results[i].properties.Name.title[0].plain_text,
                        referenceName: response.results[i].properties.referenceName.rich_text[0].plain_text,
                        phone: response.results[i].properties.phone.rich_text[0].plain_text,
                        page: response.results[i].properties.page.rich_text[0].plain_text,
                        email: response.results[i].properties.email.rich_text[0].plain_text,
                    }
                }
                references["references"].push(person)
            }
            let info = JSON.stringify(references)
            return info
        }
        catch (error) {
            return error
        }
    }

}


module.exports.NotionAPI = NotionAPI
