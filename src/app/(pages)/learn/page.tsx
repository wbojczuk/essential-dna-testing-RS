import Today from "@/app/(mainsite)/components/homepage/Today/Today"
import Learn from "@/app/(mainsite)/components/learnpage/Learn/Learn"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Learn | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Learn | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function LearnPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Learn More" />
			<Learn />
			<Today />
	 	 </>
	 )
}