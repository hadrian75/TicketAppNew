import { Navbar, Footer } from '.'
import UserProfile from '../Profile.json'
import Avatar from '@mui/material/Avatar'
import { useState } from 'react'
import { storage } from '../Firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { Mail24Regular, Phone24Regular, Person24Regular, Edit24Regular } from '@fluentui/react-icons'

const ProfileScreen = () => {
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState(null)


    const handleImageChange = (photo) => {
        if (photo.target.files[0]) {
            setImage(photo.target.files[0])
        }
    }
    const handleSubmit = () => {
        const imageRef = ref(storage, "image")
        uploadBytes(imageRef, image).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setUrl(url)
            }).catch((error) => {
                console.log(error.message, "Error getting The Image URL")
            })
            setImage(null)
        }).catch((error) => {
            console.log(error.message, "Error getting The Image URL")
        })
    }



    return (
        <>
            <Navbar />
            <div className='py-32 w-full min-w-full'>
                {
                    UserProfile && UserProfile.map(userProfiles => {
                        return (
                            <div className='mx-[auto] bg-frameColor flex flex-col w-[30%] px-6 rounded-lg' key={userProfiles.id}>
                                <h1 className='text-[24px] font-bold text-white text-center mt-8 my-4'>My Profile</h1>
                                <div className="relative flex justify-center">
                                    <Avatar
                                        alt="Remy Sharp"
                                        sx={{ width: 100, height: 100 }}
                                        variant="rounded"
                                        className='mx-auto'
                                    />
                                    <input type="file" name="" id="" onChange={handleImageChange} onSubmit={handleSubmit} className="absolute  cursor-pointer w-32 h-32 opacity-0 " />
                                </div>
                                <div className='flex flex-col py-6 gap-12 ml-1 items-center'>
                                    <span className='flex gap-10 rounded-lg border-[1px] border-white w-[80%] px-14 py-3 mx-auto'>
                                        <Person24Regular className='text-base-20' />
                                        <h1 className='font-normal text-[16px] text-base-20'>{userProfiles.userName}</h1>
                                    </span>
                                    <span className='flex gap-10 rounded-lg border-[1px] border-white w-[80%] px-14 py-3 mx-auto'>
                                        <Mail24Regular className='text-base-20' />
                                        <h1 className='font-normal text-[16px] text-base-20'>{userProfiles.userEmail}</h1>
                                    </span>
                                    <span className='flex gap-10 rounded-lg border-[1px] border-white w-[80%] px-14 py-3 mx-auto'>
                                        <Phone24Regular className='text-base-20 ' />
                                        <h1 className='font-normal text-[16px] text-base-20'>{userProfiles.userName}</h1>
                                    </span>
                                    <button className='w-[80%] bg-primary rounded-lg py-5'><a href="">Edit Account</a></button>
                                </div>
                                <span className='w-full h-[1px] mt-8 mb-12 bg-white'></span>
                                <div className='flex flex-row gap-12 w-full pb-10'>
                                    <a href="/login" className='w-[50%]'><button className="rounded-lg py-[1rem] bg-white font-bold text-[14px] w-full ">Verification</button></a>
                                    <a href="/login" className='w-[50%]'><button className="rounded-lg py-[0.9rem] mt-0.5 text-error ring-2 ring-error font-bold text-[14px] w-full ">Log Out</button></a>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
            <Footer />
        </>
    )
}
export default ProfileScreen