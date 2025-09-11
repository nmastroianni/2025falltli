import React from 'react'
import data from '@/lib/data.json'
import {
  agreementsToCount,
  countResponses,
  programsToCount,
  rolesToCount,
} from '@/lib/utils'
import RoleChart from '@/components/RoleChart'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import ProgramChart from '@/components/ProgramChart'
import DeepThinkingChart from '@/components/DeepThinkingChart'
import BeneficialChart from '@/components/BeneficialChart'

const Session = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params
  const session = data[id]

  const roles = countResponses(session, rolesToCount, 'Question 1')
  const programs = countResponses(session, programsToCount, 'Question 3')
  const deepThinking = countResponses(session, agreementsToCount, 'Question 4')
  const beneficial = countResponses(session, agreementsToCount, 'Question 5')
  const goals = countResponses(session, agreementsToCount, 'Question 7')
  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-center text-3xl font-black py-4 lg:py-8">
        {session.SessionTitle}
      </h1>
      <p className="text-center font-light text-xs">
        {session.Feedback.length} Ratings Submitted
      </p>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8 p-4 lg:p-8">
        <Card className="min-w-[600px]">
          <CardHeader>
            <CardTitle className="text-center">Roles present</CardTitle>
          </CardHeader>
          <CardContent>
            <RoleChart data={roles} />
          </CardContent>
        </Card>
        <Card className="min-w-[600px]">
          <CardHeader>
            <CardTitle className="text-center">When I attended...</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgramChart data={programs} />
          </CardContent>
        </Card>
        <Card className="min-w-[600px]">
          <CardHeader>
            <CardTitle className="text-center">
              This session made me think deeply...
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DeepThinkingChart data={deepThinking} />
          </CardContent>
        </Card>
        <Card className="min-w-[600px]">
          <CardHeader>
            <CardTitle className="text-center">
              I felt this session was beneficial...
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BeneficialChart data={beneficial} />
          </CardContent>
        </Card>
        <Card className="min-w-[600px]">
          <CardHeader>
            <CardTitle className="text-center">
              I felt this session was aligned with my goals...
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BeneficialChart data={goals} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Session
