type ProjectProps = {
    title: string;
    thumbnail: string;
    url: string;
}
import { Link } from "@remix-run/react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "~/components/ui/card"
  import { Button } from "~/components/ui/button"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel"

const projects = [
    {
        title: "Ricochet Robots",
        thumbnail: "thumbnails/robots.png",
        url: "https://briansmiley.github.io/p5/ricochetrobots"
    },
    {
        title: "Binary Tree",
        thumbnail: "thumbnails/binarytree.png",
        url: "https://briansmiley.github.io/p5/binarytree"
    },
    {
        title: "Drops",
        thumbnail: "thumbnails/drops_color.png",
        url: "https://briansmiley.github.io/p5/drops"
    },
    {
        title: "Voronoi",
        thumbnail: "thumbnails/voronoi.png",
        url: "https://briansmiley.github.io/p5/voronoi"
    },
    {
        title: "Pong",
        thumbnail: "thumbnails/pong.png",
        url: "https://briansmiley.github.io/p5/pong"
    },
    {
        title: "BitMapper",
        thumbnail: "thumbnails/bitmapper.png",
        url: "https://briansmiley.github.io/p5/bitmapper"
    },
]
export default function ProjectCarousel() {
    return (
        <div className="flex justify-center">
            <Carousel className="w-[75%]">
                <CarouselContent>
                    {projects.map((project, idx) => (
                        <CarouselItem className="basis-1/3" key={idx}>
                            <div className="p-1">
                            <Link to={project.url}><Card>
                                    <CardHeader className="flex items-center justify-center p-6"><span><a href={project.url}>{project.title}</a></span></CardHeader>
                                    <CardContent ><img src={project.thumbnail}></img>
                                    </CardContent>
                                </Card></Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

