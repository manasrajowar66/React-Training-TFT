import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from 'next/head';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First MeetUp',
        image: 'https://images.unsplash.com/photo-1572381484686-596e8b94ce86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        address: 'Some Address',
        description: 'This is meetup!'
    },
    {
        id: 'm2',
        title: 'A Second MeetUp',
        image: 'https://images.unsplash.com/photo-1572381484686-596e8b94ce86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        address: 'Some Address 2',
        description: 'This is meetup!'
    },
    {
        id: 'm3',
        title: 'A Third MeetUp',
        image: 'https://images.unsplash.com/photo-1572381484686-596e8b94ce86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        address: 'Some Address 3',
        description: 'This is meetup!'
    },
    {
        id: 'm4',
        title: 'A Fourth MeetUp',
        image: 'https://images.unsplash.com/photo-1598908314941-ddc4ef84509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZXR1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
        address: 'Some Address 4',
        description: 'This is meetup!'
    },
]

const HomePage = (props) => {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React meetups!" />
            </Head>
            <MeetupList meetups={props.meetups} />

        </>
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    //fetch some data
    const client = await MongoClient.connect(
        'mongodb+srv://manasrajowar:XWJzu8dAjZHKXhXq@cluster0.gwwmy.mongodb.net/meetups?retryWrites=true&w=majority',
    )
    const db = client.db()

    const meetupsCollections = db.collection('meetups')

    const meetups = await meetupsCollections.find().toArray()
    client.close()
    return {
        props: {
            meetups: meetups.map(meetup => {
                return {
                    image: meetup.image,
                    description: meetup.description,
                    title: meetup.title,
                    address: meetup.address,
                    id: meetup._id.toString(),
                }
            })
        },
        revalidate: 10
    }
}

export default HomePage;