import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
    if (res.method === 'GET') {
        const client = await MongoClient.connect(
            'mongodb+srv://manasrajowar:XWJzu8dAjZHKXhXq@cluster0.gwwmy.mongodb.net/meetups?retryWrites=true&w=majority',
        )
        const db = client.db()

        const meetupsCollections = db.collection('meetups')

        const meetups = meetupsCollections.find().toArray()
        client.close()
        res.status(201).json({
            meetups: meetups.map((meetup) => {
                return {
                    image: meetup.image,
                    description: meetup.description,
                    title: meetup.title,
                    id: meetup._id.toString(),
                }
            }),
        });
    }
}

export default handler;
