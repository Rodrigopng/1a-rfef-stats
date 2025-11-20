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
import NavBar from './NavBar';
const HomePage = () => {
  // Datos de ejemplo para el dashboard
  const stats = [
    {
      title: "Equipos Analizados",
      value: "24",
      description: "De 1ª División RFEF",
      icon: Users,
      trend: "+2 este mes",
      color: "bg-blue-500"
    },
    {
      title: "Partidos Procesados",
      value: "156",
      description: "Temporada 2024-25",
      icon: Activity,
      trend: "+12 esta semana",
      color: "bg-green-500"
    },
    {
      title: "Estadísticas Generadas",
      value: "2,840",
      description: "Métricas calculadas",
      icon: BarChart3,
      trend: "+340 hoy",
      color: "bg-purple-500"
    },
    {
      title: "Precisión Análisis",
      value: "94.2%",
      description: "Predicciones acertadas",
      icon: Target,
      trend: "+1.2% vs mes anterior",
      color: "bg-orange-500"
    }
  ];

  const recentMatches = [
    {
      homeTeam: "Real Madrid C",
      awayTeam: "Atlético Baleares",
      date: "15 Sep 2025",
      result: "2-1",
      status: "Finalizado"
    },
    {
      homeTeam: "FC Barcelona B",
      awayTeam: "CE Sabadell",
      date: "14 Sep 2025",
      result: "1-0",
      status: "Finalizado"
    },
    {
      homeTeam: "Real Sociedad B",
      awayTeam: "SD Amorebieta",
      date: "13 Sep 2025",
      result: "3-2",
      status: "Finalizado"
    }
  ];

  const topPerformers = [
    { name: "Real Madrid C", points: 15, position: 1, trend: "up" },
    { name: "FC Barcelona B", points: 13, position: 2, trend: "same" },
    { name: "Athletic Bilbao B", points: 12, position: 3, trend: "up" },
    { name: "Real Sociedad B", points: 10, position: 4, trend: "down" }
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <NavBar/>
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Dashboard 1ª RFEF Stats
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Análisis y estadísticas de la Primera División RFEF
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="px-3 py-1">
                <Calendar className="w-4 h-4 mr-1" />
                Temporada 2024-25
              </Badge>
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </CardTitle>
                    <div className={`p-2 rounded-lg ${stat.color}`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {stat.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {stat.trend}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Matches */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2 text-blue-500" />
                Últimos Partidos
              </CardTitle>
              <CardDescription>
                Resultados más recientes de la competición
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {match.homeTeam} vs {match.awayTeam}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {match.date}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {match.result}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {match.status}
                      </Badge>
                    </div>
                  </div>
                ))}
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
                {topPerformers.map((team, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        index === 1 ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200' :
                        index === 2 ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                        'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
                      }`}>
                        {team.position}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {team.name}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gray-900 dark:text-white">
                        {team.points}
                      </span>
                      <TrendingUp className={`w-4 h-4 ${
                        team.trend === 'up' ? 'text-green-500' :
                        team.trend === 'down' ? 'text-red-500 rotate-180' :
                        'text-gray-400'
                      }`} />
                    </div>
                  </div>
                ))}
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
};



export default HomePage;