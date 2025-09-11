import data from '@/lib/data.json'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Presentation } from 'lucide-react'
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
                <Card className="bg-neutral-800 min-w-[320px] h-full hover:shadow-lg hover:bg-neutral-900 shadow-purple-800 transition-colors ease-in-out duration-300">
                  <CardHeader>
                    <Presentation className="mx-auto" />
                    <CardTitle
                      className="text-center leading-6 font-semibold"
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
