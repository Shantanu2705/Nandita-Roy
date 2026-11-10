import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nanditaspeaks.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/about",
    "/programs",
    "/endorsements",
    "/photo-gallery",
    "/video-gallery",
    "/programs-events",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/about" || route === "/programs" ? 0.9 : 0.8,
  }));
}

