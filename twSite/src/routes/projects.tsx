export default function Projects() {
    return (
        <div id="projects">
            <h1 className="text-5xl">Projects</h1>
            <button className="mt-4 p-0.5 rounded-md bg-offwhite" onClick={() => window.location.href="/Counter"}>Counter</button>
        </div>
    );
}