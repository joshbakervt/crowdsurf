import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AccordionCollapse } from 'react-bootstrap'

export default function useAuth(code) {
    // storing access token, refresh token, and expiration time
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()


    useEffect(() => {
        axios
        .post('http://localhost:3001/login', {
            code,
        })
        .then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, '/')
        })
        .catch(() => {
            // redirects the user back to login page
            window.location = '/'
        })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
        axios
            .post('http://localhost:3001/refresh', {
                refreshToken,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
            })
            .catch(() => {
                // redirects the user back to login page
                window.location = '/'
            })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return accessToken
}
