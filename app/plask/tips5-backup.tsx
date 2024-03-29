type Routes = Record<string, string | { href: string; protected: boolean }>;

export const advancedRoutes = {
  overview: "/overview",
  admin: {
    href: "/admin",
    protected: true,
  },
};

advancedRoutes.admin.href;
