const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

export const fetchTeam = async () => {
    const res = await fetch(`${baseURL}/web/team`);
    const data = await res.json();
    return data.data;
};

export const fetchCareers = async () => {
    const res = await fetch(`${baseURL}/web/careers`);
    const data = await res.json();
    return data.data;
};

export const fetchBlogPosts = async () => {
    const res = await fetch(`${baseURL}/web/blog`);
    const data = await res.json();
    return data.data;
};

export const fetchBlogPost = async (id) => {
    const res = await fetch(`${baseURL}/web/blog/${id}`);
    const data = await res.json();
    return data.data;
};

export const fetchCookiePolicy = async () => {
    const res = await fetch(`${baseURL}/web/cookie-policy`);
    const data = await res.json();
    return data.data;
};
