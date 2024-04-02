import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: "1",
      title: "Famous in Chennai",
      category: "Food",
      description: " Idli Dosa: he most important dish in Chennai cuisine is the Idli Sambar. In a way, this dish represents all the cultures of south india where idli, dosa, and vada, and sambar are staple dishes. ",
    },
    {
      id: "2",
      title: "Famous in Delhi",
      category: "Food",
      description: " Chole Bhature, Chaat, and Nahari: If we talk about states and their famous cuisine, Delhi tops them all. Why? Because Delhi cuisine not only consists of mouth watering chole bhature and street chaat which include golgappa, aloo tikki, and much more but also mughlai delicacies like nahari, a speciality which is best served in Old Delhi.",
    },
    {
      id: "3",
      title: "Famous in Jaipur",
      category: "Food",
      description: " Idli Dosa: he most important dish in Chennai cuisine is the Idli Sambar. In a way, this dish represents all the cultures of south india where idli, dosa, and vada, and sambar are staple dishes. ",
    },
  ],
};

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      console.log(state.blogs);
    },
    updateBlog: (state, action) => {
      const { id, title, category, description } = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === (id));
      state.blogs[blogIndex].title = title;
      state.blogs[blogIndex].category = category;
      state.blogs[blogIndex].description = description;
    },
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
    },
    toggleLike: (state, action) => {
      const id = action.payload;
      const blogIndex = state.blogs.findIndex((blog) => blog.id === id);
      state.blogs[blogIndex].isLiked = !state.blogs[blogIndex].isLiked;
    },
  },
});

export const selectBlogById = (state, blogID) => {
  console.log(typeof Number(blogID));
  const number = blogID;
  const test = state.blogs.blogs.find((blog) => blog.id === number);
  console.log(test);
  return state.blogs.blogs.find((blog) => blog.id === (blogID));
};

export const { addBlog, updateBlog, deleteBlog, toggleLike } =
  blogSlice.actions;
export default blogSlice.reducer;
