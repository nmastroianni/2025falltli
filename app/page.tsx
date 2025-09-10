import data from '@/lib/data.json'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 lg:gap-8">
        {data.length > 0 &&
          data.map((session) => {
            return (
              <Link
                key={session.id}
                href={`/${session.id}`}
                aria-labelledby={`${session.id}`}
              >
                <Card className="bg-neutral-800 min-w-[300px]">
                  <CardHeader>
                    <CardTitle
                      className="text-center"
                      id={`session-${session.id}`}
                    >
                      {session.SessionTitle}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
      </div>
    </div>
  )
}
