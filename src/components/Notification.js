import React from 'react'
import { Alert } from '@mui/material'

export default function Notification({type,message}) {
  return (
    <div>
        <Alert severity={type}>{message}</Alert>
    </div>
  )
}
