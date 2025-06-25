import { Team } from '@/types';

export const loadTeams = (): Team[] => {
  try {
    const stored = localStorage.getItem('teams');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveTeams = (teams: Team[]) => {
  localStorage.setItem('teams', JSON.stringify(teams));
};

export const loadSelectedTeamId = (): string | null =>
  localStorage.getItem('selectedTeamId');

export const saveSelectedTeamId = (id: string) =>
  localStorage.setItem('selectedTeamId', id);
