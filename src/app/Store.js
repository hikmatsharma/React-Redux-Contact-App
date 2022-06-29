import {configureStore } from '@reduxjs/toolkit'
import addContactReducer from '../features/contactSlice'

export const store = configureStore(
    {
        reducer: {
            AddContact : addContactReducer,
        },
    }
)