import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

const NewMeetup = () => {
    const onAddMeetupHandler = async (meetupDetails) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <>
            <Head>
                <title>Add a new meetup</title>
                <meta name="description" content="Add your own meetups and create amazing network opportunities." />
            </Head>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />

        </>
    )
}

export default NewMeetup;