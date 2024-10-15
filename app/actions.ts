'use server'

import { encodedRedirect } from '@/utils/utils'
import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { routes } from './routes'

export const signUpAction = async (formData: FormData) => {
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const supabase = createClient()
  const origin = headers().get('origin')

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    console.error(error.code + ' ' + error.message)
    return encodedRedirect('error', routes.signUp, error.message)
  } else {
    return encodedRedirect(
      'success',
      routes.signUp,
      'Thanks for signing up! Please check your email for a verification link.'
    )
  }
}

export const signInAction = async (formData: FormData) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return encodedRedirect('error', routes.signIn, error.message)
  }

  return redirect(routes.createAgent)
}

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get('email')?.toString()
  const supabase = createClient()
  const origin = headers().get('origin')
  const callbackUrl = formData.get('callbackUrl')?.toString()

  if (!email) {
    return encodedRedirect('error', routes.forgotPassword, 'Email is required')
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  })

  if (error) {
    console.error(error.message)
    return encodedRedirect(
      'error',
      routes.forgotPassword,
      'Could not reset password'
    )
  }

  if (callbackUrl) {
    return redirect(callbackUrl)
  }

  return encodedRedirect(
    'success',
    routes.forgotPassword,
    'Check your email for a link to reset your password.'
  )
}

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = createClient()

  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (!password || !confirmPassword) {
    encodedRedirect(
      'error',
      routes.resetPassword,
      'Password and confirm password are required'
    )
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      'error',
      routes.resetPassword,
      'Passwords do not match'
    )
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  })

  if (error) {
    encodedRedirect(
      'error',
      routes.resetPassword,
      'Password update failed'
    )
  }

  encodedRedirect('success', routes.resetPassword, 'Password updated')
}

export const signOutAction = async () => {
  const supabase = createClient()
  await supabase.auth.signOut()
  return redirect(routes.signIn)
}
