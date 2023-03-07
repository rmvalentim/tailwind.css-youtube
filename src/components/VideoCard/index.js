import Image from "next/image"

export default function VideoCard({ card }) {

    return (
        <div className="flex m-1">
            <div className="w-5/12">
                <Image
                    src="/img/card.webp"
                    width="168"
                    height="94"
                    className="rounded-md"
                />
            </div>
            <div className="w-7/12 p-1 pr-3">
                <div className="text-md text-slate-300 font-sm">{card.description}</div>
                <div className="text-xs text-slate-500 font-medium">{card.chanel}</div>
                <div className="text-xs text-slate-500 font-medium">{card.views}</div>
            </div>
        </div>
    )
}