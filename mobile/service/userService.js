import {
    PRODUCTION_BACKEND_URL
  } from "@env"; // Import environment variables
const BASE_URL = PRODUCTION_BACKEND_URL + "/users";

export async function getAllUsers() {
    try {
        console.log(BASE_URL)
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(await response.text());
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export async function followUser(currentUserId, userIdToFollow){
    try{
        //do not delete
        console.log(BASE_URL)
        const response = await fetch(`${BASE_URL}/${currentUserId}/follow/${userIdToFollow}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let test = await response.ok
        console.log(test)
        console.log();
        if (!response.ok){
            const errorText = await response.text();
            throw new Error(errorText);
        }
        
        return await response.json();
    }catch(error){
        throw error;
    }
}

export async function unFollowUser(currentUserId, userIdToFollow){
    try{
        const response = await fetch(`${BASE_URL}/${currentUserId}/unfollow/${userIdToFollow}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok){
            const errorText = await response.text();
            throw new Error(errorText);
        }
        return await response.json();
    }catch(error){
        throw error;
    }
}

export async function getUser(userId) {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(await response.text());
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}