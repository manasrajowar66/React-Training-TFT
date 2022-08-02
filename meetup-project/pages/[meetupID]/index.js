import { useRouter } from 'next/router'
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First MeetUp',
        image:
            'https://images.unsplash.com/photo-1572381484686-596e8b94ce86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        address: 'Some Address',
        description: 'This is meetup!',
    },
    {
        id: 'm2',
        title: 'A Second MeetUp',
        image:
            'https://images.unsplash.com/photo-1572381484686-596e8b94ce86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        address: 'Some Address 2',
        description: 'This is meetup!',
    },
    {
        id: 'm3',
        title: 'A Third MeetUp',
        image:
            'https://images.unsplash.com/photo-1572381484686-596e8b94ce86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        address: 'Some Address 3',
        description: 'This is meetup!',
    },
    {
        id: 'm4',
        title: 'A Fourth MeetUp',
        image:
            'https://images.unsplash.com/photo-1598908314941-ddc4ef84509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        address: 'Some Address 4',
        description: 'This is meetup!',
    },
]

const MeetUpDetails = (props) => {
    // const router = useRouter()
    // const meetupId = router.query.meetupID
    const { meetupData } = props;
    // const index = DUMMY_MEETUPS.findIndex((meetup) => meetup.id === meetupId)
    // if (index === -1) {
    //     return <h1>No MeetUp Found</h1>
    // }
    return (
        <>
            <Head>
                <title>{meetupData.title}</title>
                <meta name="description" content={meetupData.description} />
            </Head>
            <MeetupDetail
                image={meetupData.image}
                title={meetupData.title}
                address={meetupData.address}
                description={meetupData.description}
            />
        </>
    )
}


export async function getStaticPaths() {
    const client = await MongoClient.connect(
        'mongodb+srv://manasrajowar:XWJzu8dAjZHKXhXq@cluster0.gwwmy.mongodb.net/meetups?retryWrites=true&w=majority',
    )
    const db = client.db()

    const meetupsCollections = db.collection('meetups')

    const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();
    client.close()
    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: { meetupID: meetup._id.toString() }
        }))
    }
}


export async function getStaticProps(context) {
    const meetupId = context.params.meetupID;
    const client = await MongoClient.connect(
        'mongodb+srv://manasrajowar:XWJzu8dAjZHKXhXq@cluster0.gwwmy.mongodb.net/meetups?retryWrites=true&w=majority',
    )
    const db = client.db()

    const meetupsCollections = db.collection('meetups')

    const meetup = await meetupsCollections.findOne({ _id: ObjectId(meetupId) });
    client.close()
    return {
        props: {
            meetupData: {
                id: meetup._id.toString(),
                image: meetup.image,
                title: meetup.title,
                address: meetup.address,
                description: meetup.description
            }
        }
    }
}

export default MeetUpDetails
