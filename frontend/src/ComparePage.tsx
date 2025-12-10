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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog";

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Users } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import NavBar from './NavBar';
import { 
  GitCompare, 
  Calendar,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Team } from "./types/team";
import TeamSmallCompare from './TeamSmallCompare';
import { useTeams } from "./context/TeamsContext";

export default function ComparePage() {
  const { teams, loading } = useTeams();
  if (loading) return <div>Loading...</div>;
  const grupo1Teams = teams?.["Grupo 1"] ?? [];
  const grupo2Teams = teams?.["Grupo 2"] ?? [];

  const [showPopup, setShowPopup] = useState(false);
  const [splitView, setSplitView] = useState(false)

  function handleSplitView(newValue: boolean) {
    setSplitView(newValue);
    setSelectedTeamLeft(null);
    setSelectedTeamRight(null);
  }
  const [selectedTeamLeft, setSelectedTeamLeft] = useState<Team | null>(null);
  // Search LEFT
  const [searchTermLeft, setSearchTermLeft] = useState('');
  const teamsLeft = [...grupo1Teams, ...grupo2Teams];

  // Filtrar equipos por búsqueda
  const filteredTeamsLeft = teamsLeft.filter((team) =>
    team.name.toLowerCase().includes(searchTermLeft.toLowerCase())
  );

  const [selectedTeamRight, setSelectedTeamRight] = useState<Team | null>(null);
  // Search RIGHT
  const [searchTermRight, setSearchTermRight] = useState('');
  const teamsRight = [...grupo1Teams, ...grupo2Teams];

  // Filtrar equipos por búsqueda
  const filteredTeamsRight = teamsRight.filter((team) =>
    team.name.toLowerCase().includes(searchTermRight.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <NavBar/>
      <div className="max-w-7xl mx-auto">
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
              <Button
                onClick={() => {
                  if (!selectedTeamLeft || !selectedTeamRight) {
                    setShowPopup(true);
                    return;
                  }

                  if (selectedTeamLeft === selectedTeamRight) {
                    setShowPopup(true);
                  } else {
                    setSplitView(true);
                  }
                }}
                className="
                  transition-all duration-200
                  hover:scale-105 hover:shadow-lg
                  active:scale-95 active:shadow-md
                "
              >
                <GitCompare className="w-4 h-4 mr-2" />
                Comparar
              </Button>

              {splitView && (
                <Button
                  onClick={() => handleSplitView(false)}
                  className="
                    flex items-center
                    transition-all duration-200
                    hover:scale-105 hover:shadow-lg
                    active:scale-95 active:shadow-md
                  "
                  variant="secondary"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Selecciona dos equipos distintos</DialogTitle>
            <DialogDescription>
              Para comparar, elige un equipo distinto en cada lado.
            </DialogDescription>
          </DialogHeader>

          <Button onClick={() => setShowPopup(false)}>Entendido</Button>
        </DialogContent>
      </Dialog>

      
      {splitView ? (
        <div>
          {selectedTeamLeft && selectedTeamRight && (
            <TeamSmallCompare teamLeft={selectedTeamLeft} teamRight={selectedTeamRight} />
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Search Bar LEFT  */}
        <Card className="h-full">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar equipo..."
                value={searchTermLeft}
                onChange={(e) => setSearchTermLeft(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>
        {/* Search Bar RIGHT */}
        <Card className="h-full">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar equipo..."
                value={searchTermRight}
                onChange={(e) => setSearchTermRight(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>
          {/* Teams Grid GRUPO 1 LEFT*/}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {selectedTeamLeft ? (
                  <span>Seleccionado: {selectedTeamLeft.name}</span>
                ) : (
                  <span></span>
                )}
                <Badge variant="secondary">{filteredTeamsLeft.length} equipos</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TooltipProvider delayDuration={100}>
                  {filteredTeamsLeft.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-4 py-2">
                        <AnimatePresence mode="popLayout">
                        {filteredTeamsLeft.map((team) => {
                          const isSelectedLeft = selectedTeamLeft === team;
                          const someoneSelectedLeft = selectedTeamLeft !== null;
                          return (
                            <motion.div
                              key={team.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div
                                    onClick={() => setSelectedTeamLeft(isSelectedLeft ? null : team)}
                                    className={`
                                      w-20 h-20 flex items-center justify-center
                                      bg-white dark:bg-slate-800 rounded-lg
                                      border transition-all duration-200 cursor-pointer
                                      shadow-sm
                                      ${isSelectedLeft
                                        ? "border-blue-600 shadow-lg scale-110"
                                        : "border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:shadow-md"
                                      }
                                    `}
                                    style={{
                                      // Only grayscale when *someone* is selected AND this team is not selected
                                      filter:
                                        someoneSelectedLeft && !isSelectedLeft
                                          ? "grayscale(100%)"
                                          : "none",
                                    }}
                                  >
                                    <img
                                      src={`/src/assets/${team.icon}`}
                                      alt={team.name}
                                      className="w-16 h-16 object-contain"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "https://via.placeholder.com/48?text=?";
                                      }}
                                    />
                                  </div>
                                </TooltipTrigger>

                                <TooltipContent side="bottom">
                                  <p className="font-semibold">{team.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 py-10">
                      <Search className="w-8 h-8 text-gray-400" />
                      <p className="text-muted-foreground">
                        No se encontraron equipos con "{searchTermLeft}"
                      </p>
                    </div>
                  )}
                </TooltipProvider>
            </CardContent>
          </Card>

          {/* Teams Grid GRUPO 2*/}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {selectedTeamRight ? (
                  <span>Seleccionado: {selectedTeamRight.name}</span>
                ) : (
                  <span></span>
                )}                
                <Badge variant="secondary">{filteredTeamsRight.length} equipos</Badge>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <TooltipProvider delayDuration={100}>
                  {filteredTeamsRight.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-4 py-2">
                        <AnimatePresence mode="popLayout">
                        {filteredTeamsRight.map((team) => {
                          const isSelectedRight = selectedTeamRight === team;
                          const someoneSelectedRight = selectedTeamRight !== null;
                          return (
                            <motion.div
                              key={team.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div
                                    onClick={() => setSelectedTeamRight(isSelectedRight ? null : team)}
                                    className={`
                                      w-20 h-20 flex items-center justify-center
                                      bg-white dark:bg-slate-800 rounded-lg
                                      border transition-all duration-200 cursor-pointer
                                      shadow-sm
                                      ${isSelectedRight
                                        ? "border-blue-600 shadow-lg scale-110"
                                        : "border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:shadow-md"
                                      }
                                    `}
                                    style={{
                                      // Only grayscale when *someone* is selected AND this team is not selected
                                      filter:
                                        someoneSelectedRight && !isSelectedRight
                                          ? "grayscale(100%)"
                                          : "none",
                                    }}
                                  >
                                    <img
                                      src={`/src/assets/${team.icon}`}
                                      alt={team.name}
                                      className="w-16 h-16 object-contain"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = "https://via.placeholder.com/48?text=?";
                                      }}
                                    />
                                  </div>
                                </TooltipTrigger>

                                <TooltipContent side="bottom">
                                  <p className="font-semibold">{team.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 py-10">
                      <Search className="w-8 h-8 text-gray-400" />
                      <p className="text-muted-foreground">
                        No se encontraron equipos con "{searchTermRight}"
                      </p>
                    </div>
                  )}
                </TooltipProvider>
            </CardContent>
          </Card>
        </div>
      )}

      </div>
    </div>
  );
}