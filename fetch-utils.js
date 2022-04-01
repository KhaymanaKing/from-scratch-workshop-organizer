const SUPABASE_URL = 'https://lgzsfsqaohtkvywluksc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnenNmc3Fhb2h0a3Z5d2x1a3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgxMzc4NzMsImV4cCI6MTk2MzcxMzg3M30.om7bZuYtorq0m3djqz_kSD3Nk_4yrHIUjDusyXl-Z9s';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./workshops-list');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function getWorkShops() {
    const response = await client
        .from('workshops')
        .select('*, participants (*)');
    
    return response.body;
    
}
export async function createParticipant(name, workshop_id) {
    const response = await client
        .from('participants')
        .insert({
            participant_name: name,
            workshop_id: workshop_id
        });


    return response.body;
    
}
export async function deleteParticipant(id) {
    const response = await client
        .from('participants')
        .delete()
        .match({ id: id })
        .single();
    return checkError(response);
}
function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
