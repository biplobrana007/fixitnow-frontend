import MyProfile from '@/components/user/myProfile';
import { getMe } from '@/services/getMe';
import React from 'react';

const MyProfilePage = async () => {
    const user = await getMe()
    return (
        <div>
            <MyProfile user={user}></MyProfile>
        </div>
    );
};

export default MyProfilePage;