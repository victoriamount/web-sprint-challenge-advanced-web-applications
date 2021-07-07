import axios from 'axios'
import React from 'react'
import { axiosWithAuth } from './axiosWithAuth'

const fetchBubbles = (props) => {

    axiosWithAuth()
        .get('/colors')
        .then(res => {
        props.setColorList(res.data)
        })
        .catch(err => {
        console.log(err)
        })
}

export default fetchBubbles

