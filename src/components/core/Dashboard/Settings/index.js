import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'

export default function Settings(){
    return (
        <>
            <h1 className='mb-14 text-3xl font-medium text-richblack-5 pl-12 w-11/12'>
                Edit Profile
            </h1>
            <div className='w-[calc(100vh+28rem)]'>
                {/* Change Profile Picture */}
                <ChangeProfilePicture/>
                {/* Profile */}
                <EditProfile/>
                {/* Password */}
                <UpdatePassword/>
                {/* Delete Account */}
                <DeleteAccount/>
            </div>
        </>
    )
}