export function getFooterLinks(appName: string) {
  return [
    { href: "/#tools", label: "All image tools" },
    { href: "/about", label: "About " + appName },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/guide", label: "Image editing guides" },
    { href: "/guide#formats", label: "Image formats" },
    { href: "/#questions", label: "Help & FAQs" },
  ];
}
