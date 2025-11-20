import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Users } from 'lucide-react';
import teamsData from './teams.json';
import { motion, AnimatePresence } from "framer-motion";
import NavBar from './NavBar';
import { 
  TrendingUp, 
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from "react-router-dom";

interface Team {
  name: string;
  icon: string;
  short: string;
}

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const grupo1Teams: Team[] = teamsData['Grupo 1'];
  const grupo2Teams: Team[] = teamsData['Grupo 2'];

  // Filtrar equipos por búsqueda
  const filteredTeams1 = grupo1Teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTeams2 = grupo2Teams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <NavBar/>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Equipos
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Busca tu equipo y encuentra estadísticas avanzadas sobre él.
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

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar equipo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

      {/* Teams Grid GRUPO 1*/}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Grupo 1</span>
            <Badge variant="secondary">{filteredTeams1.length} equipos</Badge>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <TooltipProvider delayDuration={100}>
              {filteredTeams1.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-4 py-2">
                  <AnimatePresence mode="popLayout">
                    {filteredTeams1.map((team) => (
                      <motion.div
                        key={team.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link to={`/${team.short}`}>
                              <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-100 cursor-pointer shadow-sm hover:shadow-md">
                                <img
                                  src={`/src/assets/${team.icon}`}
                                  alt={team.name}
                                  className="w-16 h-16 object-contain"
                                  onError={(e) => {
                                    const target = e.target;
                                    if (target instanceof HTMLImageElement) {
                                      target.src =
                                        "https://via.placeholder.com/48?text=?";
                                    }
                                  }}
                                />
                              </div>
                            </Link>
                          </TooltipTrigger>

                          <TooltipContent side="bottom">
                            <p className="font-semibold">{team.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 py-10">
                  <Search className="w-8 h-8 text-gray-400" />
                  <p className="text-muted-foreground">
                    No se encontraron equipos con "{searchTerm}"
                  </p>
                </div>
              )}
            </TooltipProvider>
        </CardContent>
      </Card>

      {/* Teams Grid GRUPO 2*/}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Grupo 2</span>
            <Badge variant="secondary">{filteredTeams2.length} equipos</Badge>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <TooltipProvider delayDuration={100}>
            {filteredTeams2.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4 py-2">
                <AnimatePresence mode="popLayout">
                  {filteredTeams2.map((team) => (
                    <motion.div
                      key={team.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link to={`/${team.short}`}>
                            <div className="w-20 h-20 flex items-center justify-center bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-100 cursor-pointer shadow-sm hover:shadow-md">
                              <img
                                src={`/src/assets/${team.icon}`}
                                alt={team.name}
                                className="w-16 h-16 object-contain"
                                onError={(e) => {
                                  const target = e.target;
                                  if (target instanceof HTMLImageElement) {
                                    target.src =
                                      "https://via.placeholder.com/48?text=?";
                                  }
                                }}
                              />
                            </div>
                          </Link>
                        </TooltipTrigger>

                        <TooltipContent side="bottom">
                          <p className="font-semibold">{team.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 py-10">
                <Search className="w-8 h-8 text-gray-400" />
                <p className="text-muted-foreground">
                  No se encontraron equipos con "{searchTerm}"
                </p>
              </div>
            )}
          </TooltipProvider>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}