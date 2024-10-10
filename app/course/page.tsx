import { Input } from '@/components/ui/input'
// import { createCourse } from './create-course'

export default async function CoursePage() {
  // const course = await createCourse()

  return (
    <div>
      {/* <pre className='max-w-lg text-wrap'>{JSON.stringify(JSON.parse(course.choices[0].message.tool_calls?.[0].function.arguments ?? '{}'), null, 2)}</pre> */}
      <Input placeholder="What do you want to learn?" />
    </div>
  )
}
