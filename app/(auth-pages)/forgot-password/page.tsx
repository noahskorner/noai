import { forgotPasswordAction } from '@/app/actions'
import { FormMessage, Message } from '@/components/form-message'
import { SubmitButton } from '@/components/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { routes } from '../../routes'

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: Message
}) {
  return (
    <form className="gap-2 text-foreground [&>input]:mb-6 flex-1 flex flex-col w-full max-w-[24rem]">
      <div>
        <h1 className="text-2xl font-medium">Forgot Password</h1>
        <p className="text-sm text-secondary-foreground">
          Already have an account?&nbsp;
          <Link className="text-primary underline" href={routes.signIn}>
            Sign in
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        <SubmitButton formAction={forgotPasswordAction}>
          Reset Password
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  )
}
