"use server";

import { hashUserPassword } from '@/lib/hash';
import { redirect } from 'next/navigation';
import { createAuthSession } from '@/lib/auth';


async function createUser(username, email, password) {
  try {
    console.log('Try Creating user...');
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to sign up');
      }
    
      const data = await response.json();
      console.log('User created this is his ID:', data.userId);
      return data.userId;

    } catch (error) {
      if (error.message === 'Email already exists') {
        console.error('This email is already registered.');
        throw new Error('This email is already registered.');
        // Display a user-friendly message in the UI
      } else if (error.message === 'Username already exists') {
        console.error('This username is already taken.');
        throw new Error('This username is already taken.'); 
        // Display a user-friendly message in the UI
      } else {
        console.error('Error:', error.message);
        throw new Error('Failed to sign up');        
        // Handle other errors
      }

    }
  }

export async function signup(formData) {

    console.log('signup action');   

    const email = formData.get('email');
    const password = formData.get('password');
    const username = formData.get('username');

    let errors = {};
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    // Vérification de l'email
    if (!email.includes('@')) {
        errors.email = 'Please enter a valid email';
    }

    // Vérification de la longueur du mot de passe
    // if (password.length < 8 && !specialCharRegex.test(password)) {
    //     errors.password = 'Password must be at least 8 characters and contain a special character';
    // }

    // Si des erreurs sont présentes, les retourner
    if (Object.keys(errors).length > 0) {
        return {errors: errors}
    }
    const hashedPassword = hashUserPassword(password);
    let userId = null;
    try {
      userId = await createUser(username, email, hashedPassword);
      console.log('userId:', userId);

      await createAuthSession(userId);      

    } catch (error) {
      console.error('Error creating user:', error.message);
      // Handle the error as needed, such as displaying an error message in the UI
      return { error: error.message }; // Return the error to handle it in the UI

    }
    

    if (!userId.errors) {
      // Redirect the user to the dashboard page
      redirect('/browse');
    }

}