import { twMerge } from 'tailwind-merge'

export const SectionContainer = ({ children, ...rest }) => {
  return (
    <section className={twMerge('w-100 flex items-center justify-center px-4 average:px-8', rest.className)}>
      <div className="mb-[30px] flex flex-col gap-x-8 py-4 max-[1200px]:w-[100%] average:grid average:grid-cols-2 min-[1200px]:w-[1200px]">
        {children}
      </div>
    </section>
  )
}
