import {Navigate, Route, Routes} from "react-router-dom";
import {Landing} from "../pages/landing/Landing.jsx";
import React from 'react';
import {Home} from "../pages/home/Home.jsx";
import {SubjectList} from "../pages/subjects/SubjectList.jsx";
import {SuggestSubjectList} from "../pages/subjects/SuggestSubjectList.jsx";
import {SubjectDetail} from "../pages/subjects/SubjectDetail.jsx";
import {RecentSubjectList} from "../pages/subjects/RecentSubjectList.jsx";
import {CourseDetail} from "../pages/course/CourseDetail.jsx";
import {CourseList} from "../pages/course/CourseList.jsx";
import UserProfile from "../pages/userprofile/UserProfile.jsx";
import EditProfile from "../pages/userprofile/EditProfile.jsx";
import RecentlyUsedAvatars from "../pages/userprofile/RecentlyUsedAvatars.jsx";
import PlayScreen from "../pages/video/PlayScreen.jsx";
import LoginWizard from "../pages/landing/LoginWizard.jsx";

let router;
let routes;

export function getRoutes() {

    routes ??= <Routes>

        <Route path="" element={<Navigate to="/landing/greeting"/>}/>

        <Route path="/">
            {/*TODO: Update this*/}
            <Route path="landing">
                <Route index path="greeting" element={<Landing/>} />
                <Route path="wizard" element={<LoginWizard/>} />
            </Route>

            <Route path="home" element={<Home/>}/>

            <Route path="subjects">
                <Route index={true} path="list" element={<SubjectList />}/>
                <Route path="detail/:subjectId" element={<SubjectDetail />} />
                <Route path="recent" element={<RecentSubjectList />} />
                <Route path="suggest" element={<SuggestSubjectList />} />
            </Route>

            <Route path="courses">
                <Route path="list" element={<CourseList/>}/>
                <Route path="detail/:courseId" element={<CourseDetail/>}/>
                <Route path="play" element={<PlayScreen/>}/>
            </Route>

            <Route path="profile">
                <Route index={true} path="self" element={<UserProfile/>}/>
                <Route path="edit" element={<EditProfile/>}/>
                <Route path="avatars" element={<RecentlyUsedAvatars/>}/>
            </Route>

        </Route>

    </Routes>;


    return routes;

}