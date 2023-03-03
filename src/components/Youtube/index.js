import Navbar from "../Navbar"
import VideoPlayer from "../VideoPlayer"
import Chips from "../Chips"
import SugestedVideos from "../SugestedVideos"
import Chanel from "../Chanel"

export default function Youtube() {

    return (
        <main className="h-screen bg-gradient-to-r from-base to-gray-800">
            <div>
                <Navbar />
            </div>
            <div className="container mx-auto flex">
                <div className="flex-initial w-8/12  ml-8">
                    <div className="flex flex-col">
                        <div>
                            <VideoPlayer />
                        </div>
                        <div className="mt-4">
                            <h1 className="text-slate-100 text-xl font-semibold">Aprenda em 13:37: Tailwind CSS</h1>
                        </div>
                        <div>
                            <Chanel />
                        </div>
                    </div>
                </div>
                <div className="flex-initial w-4/12">
                    <div className="flex flex-col">
                        <div>
                            <Chips />
                        </div>
                        <div>
                            <SugestedVideos />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}