type Routes = Record<string, string | { href: string; protected: boolean }>;

export const advancedRoutes = {
  overview: "/overview",
  ja: "bla",
  tjo: 5,
  sk: {
    href: "/sk",
    protected: false,
  },
  admin: {
    href: "/admin",
    protected: true,
  },
} as const satisfies Routes;

advancedRoutes.admin.href;
