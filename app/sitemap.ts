import {MetadataRoute} from "next";

export default function SiteMapRouter():MetadataRoute.Sitemap {
    return [
        { url: "https://site.com.br", changeFrequency: "weekly", lastModified: new Date(), priority: 1 },
        { url: "https://site.com.br/suporte", changeFrequency: "monthly", lastModified: new Date(), priority: 0.5 },
        { url: "https://site.com.br/sobre-nos", changeFrequency: "yearly", lastModified: new Date(), priority: 0.5 },
    ]
}