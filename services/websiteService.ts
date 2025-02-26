import { Website } from "@/types/website";

export const websiteService = {
  getWebsites: async () => {
    const response = await fetch('/api/items');
    if (!response.ok) {
      throw new Error('Failed to fetch websites');
    }
    return response.json();
  },

  getWebsiteById: async (id: string) => {
    const response = await fetch(`/api/items/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch website');
    }
    return response.json();
  },

  createWebsite: async (website: Website) => {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(website),
    });
    if (!response.ok) {
      throw new Error('Failed to create website');
    }
    return response.json();
  },

  // Add other mutation methods as needed
}; 