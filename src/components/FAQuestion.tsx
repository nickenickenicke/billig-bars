interface FAQuestionProps {
  summary: string
  children: React.ReactNode
}

export const FAQuestion = ({ summary, children }: FAQuestionProps) => {
  return (
    <details className="group w-full border-b border-black">
      <summary className="cursor-pointer list-none items-end pb-[0.5lh] pt-[1lh] group-open:text-red-400">
        {summary}
      </summary>
      {children}
    </details>
  )
}
