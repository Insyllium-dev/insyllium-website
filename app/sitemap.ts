import { MetadataRoute } from "next";

export default function sitemap (): MetadataRoute.Sitemap {

    return [
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/work/hakbus`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/work/insylink`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/work/lans`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/services/mobile-apps`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/services/web-apps`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/services/branding`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/services/graphic-design`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/terms-of-service`
        },
    ]
    
}