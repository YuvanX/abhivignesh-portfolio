
export default function Skills() {
    const skills = ["JavaScript", "TypeScript", "Java", "React", "Next.js", "Tailwind", "MongoDB", "PostgresSQL", "Prisma", "Docker", "AWS", "Express", "Node.js", "Turborepo", "Git", "GitHub", "Zod"]
    return <div>
        <h1 className="text-center text-3xl font-custom font-semibold">Skills</h1>
        <div className="flex flex-wrap gap-3 justify-center my-10">
            {skills.map((skill, index) => (
                <span key={index} className="border rounded text-xs px-2 py-2 bg-white text-black font-custom font-semibold cursor-pointer">{skill}</span>
            ))}
        </div>
    </div>
}