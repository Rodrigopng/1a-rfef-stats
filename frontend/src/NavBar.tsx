import React from 'react';
import { useLocation } from "react-router-dom";
import { clsx } from "clsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { 
  BarChart3, 
  Users, 
  Trophy, 
  Activity,
  Home,
  PieChart,
} from 'lucide-react';


export default function NavBar() {
    const location = useLocation();
    const path = location.pathname;
      function isActive(route: string) {
    return path === route;
  }
    return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="flex-shrink-0 flex items-center">
                    <Trophy className="w-8 h-8 text-blue-600 mr-2" />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        1ª RFEF Stats
                    </span>
                    </div>
                </div>

                {/* Navigation Menu */}
                <NavigationMenu>
                    <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={clsx(navigationMenuTriggerStyle(), isActive("/") && "bg-blue-100 text-blue-900")} href="/">
                        <Home className="w-4 h-4 mr-2" />
                        Dashboard
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={clsx(isActive("/stats") && "bg-blue-100 text-blue-900")}>
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Estadísticas
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                            <NavigationMenuLink asChild>
                                <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/stats"
                                >
                                <PieChart className="h-6 w-6 self-center" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                    Análisis Avanzado
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                    Métricas detalladas y análisis predictivo de equipos y jugadores.
                                </p>
                                </a>
                            </NavigationMenuLink>
                            </li>
                            <ListItem href="/stats/teams" title="Estadísticas de Equipos">
                            Rendimiento y métricas por equipo
                            </ListItem>
                            <ListItem href="/stats/players" title="Estadísticas de Jugadores">
                            Análisis individual de jugadores
                            </ListItem>
                            <ListItem href="/stats/matches" title="Análisis de Partidos">
                            Datos detallados de cada encuentro
                            </ListItem>
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={clsx(isActive("/teams") && "bg-blue-100 text-blue-900")}>
                        <Users className="w-4 h-4 mr-2" />
                        Equipos
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                            <NavigationMenuLink asChild>
                                <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/teams"
                                >
                                <PieChart className="h-6 w-6 self-center" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                    Todos los Equipos
                                </div>
                                </a>
                            </NavigationMenuLink>
                            </li>
                            <ListItem title="Clasificación" href="/standings">
                            Tabla de posiciones actualizada
                            </ListItem>
                            <ListItem title="Comparar Equipos" href="/compare">
                            Análisis comparativo entre equipos
                            </ListItem>
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink className={clsx(navigationMenuTriggerStyle(), isActive("/matches") && "bg-blue-100 text-blue-900")} href="/matches">
                        <Activity className="w-4 h-4 mr-2" />
                        Partidos
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu> 

            </div>
        </div>
    </nav>
    );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={clsx(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"