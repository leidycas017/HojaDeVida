import { PlaylistCard } from "./PlaylistCard"

interface PlaylistContainerProps{
    name: string;
}

const PlaylistContainer = ({name}:PlaylistContainerProps) => {
    return (
        <section className="flex flex-col gap-5 bg-gray-300 p-10">
            <div className="flex justify-between">
                <span className="text-white text-2xl font-bold">{name}</span>
            </div>
            <div className="flex gap-5">
                <PlaylistCard image="/images/todays-top-hits.jpeg" title="Todays top hits" description="Jung hook is on top of the hottest 50"/>
                <PlaylistCard image="/images/todays-top-hits.jpeg" title="Todays top hits" description="Jung hook is on top of the hottest 50"/>
            </div>
        </section>

    )

}

export { PlaylistContainer }