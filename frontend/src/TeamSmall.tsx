import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Trophy, Award } from "lucide-react"
import type { Team } from "./types";

interface TeamSmallProps {
  team: Team
}

export default function TeamSmall({ team }: TeamSmallProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Recent Matches */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="w-5 h-5 mr-2 text-blue-500" />
            Últimos Partidos de {team.name} en el grupo {team.group}
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

      {/* Top Performers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
            Clasificación
          </CardTitle>
          <CardDescription>
            Top equipos por puntos
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {/* Future content: standings list */}
          </div>

          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full">
              <Award className="w-4 h-4 mr-2" />
              Ver clasificación completa
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
