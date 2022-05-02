import { useRouter } from 'next/router'
import MeetupDetail from '../../components/meetups/MeetupDetail'

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

const MeetUpDetails = () => {
    const router = useRouter()
    const meetupId = router.query.meetupID
    const index = DUMMY_MEETUPS.findIndex((meetup) => meetup.id === meetupId)
    if (index === -1) {
        return <h1>No MeetUp Found</h1>
    }
    return (
        <>
            <MeetupDetail
                image={DUMMY_MEETUPS[index].image}
                title={DUMMY_MEETUPS[index].title}
                address={DUMMY_MEETUPS[index].address}
                description={DUMMY_MEETUPS[index].description}
            />
        </>
    )
}

export default MeetUpDetails
