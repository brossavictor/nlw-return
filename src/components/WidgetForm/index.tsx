import { useState } from 'react'
import { CloseButton } from '../CloseButton'
import alertImage from '../../assets/alert.svg'
import alertIdea from '../../assets/idea.svg'
import alertThought from '../../assets/thought.svg'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problem',
    image: {
      source: alertImage,
      alt: 'Icon of an alert sign.'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: alertIdea,
      alt: 'Icon of a light bulb.'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: alertThought,
      alt: 'Icon of a thought bubble.'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto]">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Made with ♥ by{' '}
        <a
          className="underline underline-offset-2"
          href="https://github.com/joaobrossa/joaobrossa"
          target="_blank"
        >
          Victor Brossa
        </a>
      </footer>
    </div>
  )
}
