import { createContext, useContext, useState, useEffect } from "react";
import type { Team } from "../types/team";

interface TeamsContextType {
  teams: Record<string, Team[]> | null;
  loading: boolean;
}

const TeamsContext = createContext<TeamsContextType>({
  teams: null,
  loading: true,
});

export function TeamsProvider({ children }: { children: React.ReactNode }) {
  const [teams, setTeams] = useState<Record<string, Team[]> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // try loading from localStorage first
    const cached = localStorage.getItem("teamsData");
    if (cached) {
      setTeams(JSON.parse(cached));
      setLoading(false);
      return;
    }

    // otherwise fetch from backend
    fetch("http://localhost:5000/teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
        localStorage.setItem("teamsData", JSON.stringify(data));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <TeamsContext.Provider value={{ teams, loading }}>
      {children}
    </TeamsContext.Provider>
  );
}

export function useTeams() {
  return useContext(TeamsContext);
}
