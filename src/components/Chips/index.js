import ChevronRightIcon from '@heroicons/react/20/solid/ChevronRightIcon'

export default function Chips() {

    const chipList = ['Todos', 'React', 'Next', 'Tailwind']

    return (
        <div className="flex ml-2 mt-6">
            {
                chipList.map(chip => {
                    return (
                        <div className="m-1 pt-1 pl-3 pb-1 pr-3 bg-ytgray text-slate-300 rounded-lg first:bg-slate-300 first:text-slate-800">
                            {chip}
                        </div>
                    )
                })
            }
            <div className="m-1 rounded-full w-8 h-8  hover:bg-ytgray flex justify-center items-center ml-4 mr-4 cursor-pointer">
                <ChevronRightIcon className="text-slate-100 w-5" />
            </div>
        </div>
    )
}