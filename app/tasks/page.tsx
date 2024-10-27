import { getUser } from '../settings/get-user.action';

export default async function TasksPage() {
  const user = await getUser();

  if (user == null) return null;
  return <div>Tasks</div>;
}
