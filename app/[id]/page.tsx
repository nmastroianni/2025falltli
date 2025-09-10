import React from 'react'
import data from '@/lib/data.json'

const Session = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params
  const session = data[id]
  const lecturers: Array<number> = session.Feedback.filter((item) => {
    const value = item['Question 1']
    return typeof value === 'number' && value === 5
  }).map((item) => item['Question 1'])
  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-center text-3xl font-black py-4 lg:py-8">
        {session.SessionTitle}
      </h1>
      <p className="text-center font-light text-xs">
        {session.Feedback.length} Ratings Submitted
      </p>
      <p>{lecturers.length} Lecturers</p>
    </div>
  )
}

export default Session
