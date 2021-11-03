const { Client } = require('@notionhq/client');
// const notion = new Client({
//   auth: process.env.NOTION_API_KEY
// })

// module.exports = async (req, res) => {
//   try {
//     const response = await notion.databases.query({
//       database_id: databaseId
//     })
//     console.log(response.results[0].properties.Name.title)
//     console.log(
//       "h-----------------------------------------i"
//     )
//   }
//   catch (error) {
//     console.log(notion)
//     console.log(error)
//   }
// }

// const testGet = async () => {
//   try {
//     const fetchData = await fetch("/notion")
//     console.log(fetchData)
//   }
//   catch (error) {
//     console.log(error)
//   }
// }

// testGet()