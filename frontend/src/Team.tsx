import { useParams } from "react-router-dom";
import teams from "./teams.json";
import NavBar from "./NavBar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Users, 
  Trophy, 
  TrendingUp, 
  Calendar,
  Activity,
  Target,
  Award,
} from 'lucide-react';
import TeamSmall from "./TeamSmall";
export default function Team() {
  const { teamShort } = useParams();

  // Flatten both groups
  const allTeams = [...teams["Grupo 1"], ...teams["Grupo 2"]];

  const team = allTeams.find((t) => t.short === teamShort);

  if (!team) {
    return <div className="p-4">Page not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <NavBar/>
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
                <img
                src={`/src/assets/${team.icon}`}
                className="w-40 h-40 object-contain"
                />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {team.name}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button>
                <TrendingUp className="w-4 h-4 mr-2" />
                Ver Análisis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TeamSmall team={team} />

        {/* Quick Actions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>
              Herramientas principales del dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <BarChart3 className="w-6 h-6" />
                <span className="text-sm">Estadísticas</span>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col space-y-2">
                <Link to="/teams">
                  <TrendingUp className="w-6 h-6" />
                  <span className="text-sm">Equipos</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Activity className="w-6 h-6" />
                <span className="text-sm">Análisis</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <TrendingUp className="w-6 h-6" />
                <span className="text-sm">Tendencias</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
