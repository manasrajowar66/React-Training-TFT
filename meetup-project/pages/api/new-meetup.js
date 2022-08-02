const { MongoClient, ServerApiVersion } = require('mongodb');

// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://manasrajowar:XWJzu8dAjZHKXhXq@cluster0.gwwmy.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollections = db.collection('meetups');

        const result = await meetupsCollections.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({ message: 'Meetup Inserted!' });
    }
}

export default handler;