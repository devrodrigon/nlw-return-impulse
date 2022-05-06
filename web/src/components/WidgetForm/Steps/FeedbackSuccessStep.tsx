import { CloseButton } from "../../CloseButton";

import successImageUrl from "../../../assets/success.svg"

interface FeedbackContentStepProps {
    onFeedbackRestardRequested: () => void
}

export function FeedbackSuccessStep({onFeedbackRestardRequested}:FeedbackContentStepProps){
    return (
        <>
            <header>
                <CloseButton/>
            </header>

            <div className="flex flex-col items-center py-10 w-[384px]">
                <img src={successImageUrl}/>
                <span className="text-xl mt-2">Agradecemos o feedback!</span>
            
                <button
                    type="button"
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:big-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    onClick={onFeedbackRestardRequested}
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}