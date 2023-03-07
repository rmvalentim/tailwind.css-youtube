import VideoCard from "../VideoCard"
import cards from "../VideoCard/cards"

export default function SugestedVideos() {


    return (
        <div className="flex flex-col p-2">
            {cards.map(card => {
                return (
                    <VideoCard card={card} />
                )
            })}
        </div>
    )
}