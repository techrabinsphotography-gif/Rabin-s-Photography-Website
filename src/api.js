const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://app-server-maaw.onrender.com/api/v1';

export const fetchTeam = async () => {
    const res = await fetch(`${baseURL}/web/team?t=${Date.now()}`, { cache: 'no-store' });
    const data = await res.json();
    return data.data;
};

export const fetchCareers = async () => {
    const res = await fetch(`${baseURL}/web/careers?t=${Date.now()}`, { cache: 'no-store' });
    const data = await res.json();
    return data.data;
};

export const fetchCareerPost = async (id) => {
    const res = await fetch(`${baseURL}/web/careers/${id}?t=${Date.now()}`, { cache: 'no-store' });
    const data = await res.json();
    return data.data;
};

export const submitApplication = async (formData) => {
    const res = await fetch(`${baseURL}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Submission failed');
    return data;
};

export const uploadResume = async (file) => {
    const fd = new FormData();
    fd.append('resume', file);
    const res = await fetch(`${baseURL}/upload/resume`, { method: 'POST', body: fd });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Upload failed');
    return data.url;
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
