interface FAQuestionProps {
  summary: string
  children: React.ReactNode
}

export const FAQuestion = ({ summary, children }: FAQuestionProps) => {
  return (
    <details className="group w-full border-b border-black">
      <summary className="flex cursor-pointer list-none items-center justify-between pb-2 pt-8 font-medium group-first-of-type:pt-6 md:pt-12 md:group-first-of-type:pt-10">
        {summary}
        <span className="block h-full pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="rotate-90 transition-transform group-open:rotate-[270deg]"
          >
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </span>
      </summary>
      {children}
    </details>
  )
}
