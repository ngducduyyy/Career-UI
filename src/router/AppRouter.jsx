import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Signin from '../Page/Signin'
import Login from '../Page/Login'
import ForgotPassword from '../Page/ForgotPassword'
import ChangePassword from '../Page/ChangePassword'
import UpdatePersonalInfo from '../Page/UpdatePersonalInfo'
import Home from '../Page/Home'
import UpdateCompanyInfo from '../Page/UpdateCompanyInfo'
import JobDetails from '../Page/JobDetails'
import Job from '../Page/Job'
import PostJob from '../Page/PostJob'
import JobList from '../Page/JobList/JobList'
import CommpanyInfo from '../Page/CommpanyInfo.jsx'
import PersonInfo from '../Page/PersonInfo'
import SliceCompany from '../Page/SliceHome/SliceCompany.jsx'
import SliceJob from '../Page/SliceHome/SliceJob.jsx'
import AllJob from '../Page/AllJob/AllJob.jsx'




const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/updatepersonalinfo" element={<UpdatePersonalInfo/>}/>
        <Route path="/updatecompanyinfo" element={<UpdateCompanyInfo/>}/>
        <Route path="/jobdetails" element={<JobDetails/>}/>
        <Route path="/job" element={<Job/>}/>
        <Route path="/postjob" element={<PostJob/>}/>
        <Route path="/joblist" element={<JobList/>}/>
        <Route path="/jobdetails/:id" element={<JobDetails/>}/>
        <Route path="/companyinfo" element={<CommpanyInfo/>}/>
        <Route path="/personinfo" element={<PersonInfo/>}/>
        <Route path="/slicehome" element={<SliceCompany/>}/>
        <Route path="/slicejob" element={<SliceJob/>}/>
        <Route path="/alljob" element={<AllJob/>}/>

      </Routes>

    </div>
  )
}

export default AppRouter