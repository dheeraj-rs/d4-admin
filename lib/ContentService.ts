/* eslint-disable @typescript-eslint/no-explicit-any */

export const ContentService = {
  getContentData(): Promise<any> {
    // Try to get from localStorage first for persistence
    const savedContent = localStorage.getItem('websiteContent');
    if (savedContent) {
      return Promise.resolve(JSON.parse(savedContent));
    }

    // If no localStorage data, fetch from JSON file
    return fetch('/api/content')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch content');
        }
        return res.json();
      })
      .then((data) => {
        // Save to localStorage for persistence
        localStorage.setItem('websiteContent', JSON.stringify(data));
        return data;
      });
  },

  saveContentData(content: any): Promise<void> {
    return fetch('/api/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(content),
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Failed to save content');
      }
      // Update localStorage
      localStorage.setItem('websiteContent', JSON.stringify(content));
    });
  },
}; 