import { Form } from '@/components/form/form'

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col items-center justify-center gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="container mb-20 flex items-center justify-center">
        <div className="w-full max-w-screen-sm rounded-lg  bg-background/30 px-6 py-8 shadow-md">
          <div className="mb-6">
            <h1 className="mb-12 text-2xl font-bold">Convert Currency</h1>
            <Form />
          </div>
        </div>
      </div>
    </main>
  )
}
