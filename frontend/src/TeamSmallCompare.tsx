import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Trophy, Award } from "lucide-react"
import type { Team } from "./types";

interface TeamSmallCompareProps {
  teamLeft: Team
  teamRight: Team
}

export default function TeamSmallCompare({ teamLeft, teamRight }: TeamSmallCompareProps) {
  return (
    <div>
      {/* Recent Matches */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 mr-2 text-blue-500" />
            Últimos Partidos de {teamLeft.name} y {teamRight.name}
          </CardTitle>
          <CardDescription>
            Resultados más recientes de la competición
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {/* Future content: recent matches */}
          </div>

          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full">
              Ver todos los partidos
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
