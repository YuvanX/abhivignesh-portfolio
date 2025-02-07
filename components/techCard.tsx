export default function Tech({tech}:{tech: string}) {
    return <span className="border rounded text-xs px-2 py-2 bg-black text-white hover:bg-white hover:text-black font-custom font-semibold">{tech}</span>
}