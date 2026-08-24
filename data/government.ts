export interface GovernmentTopic {
  id: string;
  title: string;
  description: string;
}

// Add governance doctrines and institutional turning points only when they are established in play.
export const governmentTopics: GovernmentTopic[] = [];
