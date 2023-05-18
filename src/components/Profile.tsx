import { user } from "../data"


const Profile = () => {
    return (
        <>
            <h1>{user.name}</h1>
            {/* <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            /> */}
        </>
    )
}

export default Profile
