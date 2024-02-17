'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { setTimeout } from 'timers/promises';

const BACKEND = 'http://0.0.0.0:9001';

const callModel = async (path, data) => {
    const url = BACKEND + path;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({q: data}),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json;
}

export async function predict(formData: FormData) {
    const inputText = formData.get('input');
    if(!inputText)  {
        return
    }
    console.log(inputText);
    revalidatePath('/');
    redirect('/');
}