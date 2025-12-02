import { Link } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import teamsData from './teams.json';
import NavBar from './NavBar';
import { 
  TrendingUp, 
  Calendar,
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';

interface Team {
  name: string;
  icon: string;
  short: string;
}

export default function Standings() {
  const grupo1Teams: Team[] = teamsData['Grupo 1'];
  const grupo2Teams: Team[] = teamsData['Grupo 2'];

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
                Clasificación
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Posiciones actuales y mucho más.
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
<div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6 pl-5 pr-5">
  {/* Grupo 1 */}
  <Card>
    <CardHeader>
      <CardTitle>Grupo 1</CardTitle>
      <CardDescription>20 equipos</CardDescription>
    </CardHeader>

    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Posicion</TableHead>
            <TableHead className="text-center">Escudo</TableHead>
            <TableHead className="text-center">Equipo</TableHead>
            <TableHead>PJ</TableHead>
            <TableHead>PG</TableHead>
            <TableHead>PE</TableHead>
            <TableHead>PP</TableHead>
            <TableHead>DG</TableHead>
            <TableHead>Pts</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {grupo1Teams.map((team) => (
            <TableRow key={team.short} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                <TableCell>#</TableCell>
                <TableCell className="flex justify-center items-center">
                <img
                    src={`/src/assets/${team.icon}`}
                    alt={team.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                        "https://via.placeholder.com/40?text=?";
                    }}
                />
                </TableCell>
                <TableCell className="font-medium">  
                  <Link
                    to={`/${team.short}`}
                    className="
                      font-medium 
                      text-blue-600 
                      hover:text-blue-800 
                      transition-all 
                      duration-150 
                      hover:underline
                      active:scale-95
                      inline-block
                    "
                  >
                    {team.name}
                  </Link>
                </TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
                <TableCell>#</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>

  {/* Grupo 2 */}
  <Card>
    <CardHeader>
      <CardTitle>Grupo 2</CardTitle>
      <CardDescription>20 equipos</CardDescription>
    </CardHeader>

    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Posicion</TableHead>
            <TableHead className="text-center" >Escudo</TableHead>
            <TableHead className="text-center" >Equipo</TableHead>
            <TableHead>PJ</TableHead>
            <TableHead>PG</TableHead>
            <TableHead>PE</TableHead>
            <TableHead>PP</TableHead>
            <TableHead>DG</TableHead>
            <TableHead>Pts</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {grupo2Teams.map((team) => (
            <TableRow key={team.short} className="hover:bg-slate-50 dark:hover:bg-slate-800">
            <TableCell>#</TableCell>
              <TableCell className="flex justify-center items-center" >
                <img
                  src={`/src/assets/${team.icon}`}
                  alt={team.name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://via.placeholder.com/40?text=?";
                  }}
                />
              </TableCell>

            <TableCell className="font-medium">  
              <Link
                to={`/${team.short}`}
                className="
                  font-medium 
                  text-blue-600 
                  hover:text-blue-800 
                  transition-all 
                  duration-150 
                  hover:underline
                  active:scale-95
                  inline-block
                "
              >
                {team.name}
              </Link>
            </TableCell>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>
            <TableCell>#</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</div>
      </div>
    </div>
  );
}