const mapping: Record<string, string> = {
  articles: 'article',
  companies: 'company',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
