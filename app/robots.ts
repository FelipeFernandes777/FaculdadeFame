import { MetadataRoute } from "next";

export default function RobotsRouter(): MetadataRoute.Robots {
    return {
        host: "https://site.com.br",
        rules: {
            allow: "*",
            userAgent: ["Googlebot", "Bingbot", "AppleBot"],
        },
        sitemap: "https://site.com.br/sitemap.xml"
    }
}