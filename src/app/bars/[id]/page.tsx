interface BarPageProps {
  params: { id: string }
}

export default async function BarPage({ params }: BarPageProps) {
  return (
    <>
      <h1>{JSON.stringify(params.id)}</h1>
      <p>Hej!</p>
    </>
  )
}
