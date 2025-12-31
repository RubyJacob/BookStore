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

// homepage books api - called by homecomponent when page loads
export const getHomePageBookAPI = async() =>{
  return await commonAPI("GET",`${serverURL}/books/home`,{})
}


// bookspage api - called by books component when page loads
export const getAllBooksPageAPI = async(reqHeader) =>{
  return await commonAPI("GET",`${serverURL}/books/all`,{},reqHeader)
}

// useruploadbooks api - called by profile-book status component when page loads
export const getAllUserBooksAPI = async(reqHeader) =>{
  return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

// userPurchasebooks api - called by profile-book status component when page loads
export const getAllUserPurchaseBooksAPI = async(reqHeader) =>{
  return await commonAPI("GET",`${serverURL}/user-books/purchase`,{},reqHeader)
}

// userPurchasebooks api - called by profile-book status component when page loads
export const viewBookAPI = async(reqHeader,id) =>{
  return await commonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}


// edituser api - called by edit component when update button clicks
export const ediUserAPI = async(id,reqBody,reqHeader) =>{
  return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}

// get all books  - called by admin collection component 
export const getAllAdminBookAPI = async(reqHeader) =>{
  return await commonAPI("GET",`${serverURL}/admin-books/all`,{},reqHeader)
}

// get all users  - called by admin collection component 
export const getAllUsersAPI = async(reqHeader) =>{
  return await commonAPI("GET",`${serverURL}/admin-users/all`,{},reqHeader)
}

// put request to update book status  - called by admin collection component 
export const updateBookStatusAPI = async(id,reqHeader) =>{
  return await commonAPI("PUT",`${serverURL}/books/${id}/update`,{},reqHeader)
}


// delete request from  book status component  - called by admin collection component 
export const deleteBookAPI = async(id,reqHeader) =>{
  return await commonAPI("DELETE",`${serverURL}/books/${id}/delete`,{},reqHeader)
}


