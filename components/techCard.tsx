export default function Tech({tech}:{tech: string}) {
    return <div className="border border-white bg-black hover:text-black cursor-pointer hover:bg-white text-xs px-2 py-1 rounded-r-full rounded-l-full font-extralight">
        {tech}
    </div>
}