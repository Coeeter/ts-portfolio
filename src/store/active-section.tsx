import { ActiveSection } from '@/types/active-section';
import { create } from 'zustand';

type ActiveSectionStore = {
  activeSection: ActiveSection;
  lastChanged: Date;
  setActiveSection: (section: ActiveSection, mode?: 'click') => void;
};

export const useActiveSection = create<ActiveSectionStore>(set => ({
  activeSection: 'about me',
  lastChanged: new Date(),
  setActiveSection: (section: ActiveSection, mode?: 'click') => {
    return set(({ lastChanged }) => ({
      activeSection: section,
      lastChanged: mode === 'click' ? new Date() : lastChanged,
    }));
  },
}));
