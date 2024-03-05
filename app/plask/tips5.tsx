type Routes = Record<string, string | { href: string; protected: boolean }>;

export const advancedRoutes: Routes = {
  overview: "/overview",
  admin: {
    href: "/admin",
    protected: true,
  },
};

advancedRoutes.overview;
advancedRoutes.admin;
