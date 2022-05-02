import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
    const onAddMeetupHandler = (meetupDetails) => {
        console.log(meetupDetails);
    }
    return (
        <>

            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />

        </>
    )
}

export default NewMeetup;