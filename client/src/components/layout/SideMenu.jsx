import React from 'react'
import { Avatar, Grid } from '@mui/material'
import { orange } from '../../constants/color'

const SideMenu = ({setIsGroup,isGroup,setIsNewGroup,isNewGroup,setIsChatList,setIsProfile,setIsFriends,isFriends,isProfile,isChatList}) => {

    const openChatList=()=>{
        setIsChatList(true)
        setIsProfile(false)
        setIsFriends(false)
        setIsGroup(false)
    }
    const openProfile=()=>{
        setIsChatList(false)
        setIsProfile(true)
        setIsFriends(false)
        setIsGroup(false)
    }
    const openFriends=()=>{
        setIsChatList(false)
        setIsProfile(false)
        setIsFriends(true)
        setIsGroup(false)
    }
    const openGroup=()=>{
        setIsChatList(false)
        setIsProfile(false)
        setIsFriends(false)
        setIsGroup(true)
    }

    return (
        <>
            <Grid item xs={2} sm={0.8} sx={{ bgcolor: orange }} >
                <div className='flex flex-col items-center w-full h-full'>
                    <div className={`flex flex-col w-full py-4 border-b border-b-black items-center space-y-3 ${isProfile?'bg-orange-800 border-l-4 border-l-orange-300':""} `}>
                        <button onClick={openProfile} title='View Profile'>

                        <Avatar sx={{ width: '4rem', height: '4rem' }} src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk" />
                        </button>
                    </div>
                    
                    <div className='w-full flex flex-col justify-between h-full pb-8'>
                        <div className='w-full'>
                            <button onClick={openChatList} title='Open Chats' className={`w-full h-16 flex justify-center items-center py-3 ${isChatList?'bg-orange-800 border-l-4 border-l-orange-300':""} `}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-10 ${isChatList?'text-white':'text-gray-300' } `}>
                                    <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button onClick={openFriends} title='Manage Friends' className={`w-full h-16 flex justify-center items-center py-3 ${isFriends?'bg-orange-800 border-l-4 border-l-orange-300':""} `}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-7 ${isFriends?'text-white':'text-gray-300' } `}>
                                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                </svg>
                            </button>
                            <button onClick={openGroup} title='Manage Groups' className={`w-full h-16 flex justify-center items-center py-3 ${isGroup?'bg-orange-800 border-l-4 border-l-orange-300':""} `}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-7 ${isGroup?'text-white':'text-gray-300' } `}>
                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full">
                            <button className='w-full flex justify-center items-center py-3 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="size-7 text-gray-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                            </button>
                        </div>
                    </div>


                </div>
            </Grid>
        </>
    )
}

export default SideMenu