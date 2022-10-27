import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { Component } from "react";

const API_KEY = "5b47020c18d445a2ae6d03a5cd983525"
const PAGE_SIZE = 10
// const URL = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}`;


const initialState = {
    entities: [],
};

// untuk fetching berita indonesia
export const fetchIndonesiaNews = createAsyncThunk("news/fetchIndonesiaNews", async () => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`);
    // console.log(response.data.articles)
    return response.data.articles
})
// untuk fetching berita programming
export const fetchProgrammingNews = createAsyncThunk("news/fetchProgrammingNews", async () => {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=programming&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`);
    // console.log(response.data.articles)
    return response.data.articles
})
// untuk fetching berita covid
export const fetchCovidNews = createAsyncThunk("news/fetchCovidNews", async () => {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=covid&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`);
    // console.log(response.data.articles)
    return response.data.articles
})
// untuk fetching berita dari searchbar
export const fetchSearchResponse = createAsyncThunk("news/fetchSearchQuery", async (query) => {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}`);
    console.log(response.data.articles)
    return response.data.articles
})

export const Slicer = createSlice({
    name: "news",
    initialState,
    reducers: {
        searchQuery: (state, action) => {
            const response = axios.get(`https://newsapi.org/v2/everything?q=${action.payload}&apiKey=${API_KEY}`);
            state.entities = []
            state.entities.push(response.data.articles)
            console.log(state)
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchIndonesiaNews.fulfilled, (state, action) => {
                state.entities = []
                state.entities.push(...action.payload);
            })
            .addCase(fetchProgrammingNews.fulfilled, (state, action) => {
                state.entities = []
                state.entities.push(...action.payload);
            })
            .addCase(fetchCovidNews.fulfilled, (state, action) => {
                state.entities = []
                state.entities.push(...action.payload);
            })
            .addCase(fetchSearchResponse.fulfilled, (state, action) => {
                state.entities = []
                state.entities.push(...action.payload);
            })
    },
});

// console.log(Slicer)

export default Slicer.reducer