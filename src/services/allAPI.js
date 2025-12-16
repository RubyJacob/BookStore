import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//register api: called by Auth component
export const registerAPI = async (userDetails) =>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

//login api
export const loginAPI = async (userDetails) =>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

//login api
export const googleLoginAPI = async (userDetails) =>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

// /user/book/add addbook api 
export const addbookAPI = async(reqBody,reqHeader) =>{
  return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}

