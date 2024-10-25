import { Input } from '@/components/ui/input';
import { routes } from '../routes';
import SettingsLayout from './settings-layout';
import { updateUserHostAction } from './update-user-host.action';
import { SubmitButton } from '@/components/submit-button';
import { getUser } from './get-user.action';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

export default async function GeneralSettingsPage() {
  const user = await getUser();

  if (user == null) return null;
  return (
    <SettingsLayout route={routes.authorized.settings.general}>
      <div className="grid gap-6">
        <form>
          <Card>
            <CardHeader>
              <CardTitle>Ollama Host</CardTitle>
              <CardDescription>
                The host where your Ollama instance is running
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input name="host" defaultValue={user.host} />
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <SubmitButton formAction={updateUserHostAction} type="submit">
                Save
              </SubmitButton>
            </CardFooter>
          </Card>
        </form>
      </div>
    </SettingsLayout>
  );
}
