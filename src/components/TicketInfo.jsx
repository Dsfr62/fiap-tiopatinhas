import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IA_SOLUTION } from '../constants'

export const TicketInfo = () => {
  const [summaryOpen, setSummaryOpen] = useState(false)
  const data = JSON.parse(localStorage.getItem('formData'))

  let summaryData = Object.entries(data).filter(
    ([key]) =>
      [
        'number',
        'reportCategory',
        'reportState',
        'updated',
        'location',
        'description',
        'taskRequester',
        'resolution',
        'assigned',
        'reportResolved',
      ].indexOf(key) === -1
  )

  if (!data || data['number'] == '') {
    return (
      <Link to="/solucao" className="underline transition-all ease-linear hover:text-primary-500">
        Nenhum ticket foi encontrado, clique aqui para testar nossa solução
      </Link>
    )
  }

  return (
    <div>
      <div className="flex w-full flex-wrap items-start gap-4">
        <h1 className="text-3xl">{`${data['number']} - ${data['reportCategory']}`}</h1>
        <p className="rounded-md bg-primary-200 px-2.5 py-1 text-xs font-bold">{data['reportState']}</p>
      </div>
      <div className="my-4 flex w-full flex-wrap items-center justify-between gap-4 md:gap-12">
        <p>Última atualização em {data['updated']}</p>
        <p>{data['location']}</p>
      </div>
      <div className="my-10 w-full">
        <h2 className="text-sm font-medium">Descrição</h2>
        <p className="text-justify">{data['description']}</p>
        <p className="mt-2 text-sm font-medium">Criado por {data['taskRequester']}</p>
        <h2 className="mt-4 text-sm font-medium">Resolução</h2>
        {data['resolution'] != '' ? (
          <>
            <p className="text-justify">{data['resolution']}</p>
            <p className="mt-2 text-sm font-medium">
              Resolvido por {data['assigned']} ({data['reportResolved']})
            </p>
          </>
        ) : (
          <>
            <p className="text-justify">{IA_SOLUTION}</p>
            <p className="mt-2 text-sm font-medium">Resolvido por Tekdev IA ({data['reportResolved']})</p>
          </>
        )}
      </div>
      {!summaryOpen ? (
        <p
          className="w-fit cursor-pointer transition-all ease-linear hover:text-primary-500"
          onClick={() => setSummaryOpen(true)}
        >
          Ver mais informações do ticket
        </p>
      ) : (
        <>
          {summaryData.map((value) => (
            <div key={value[0]} className="flex flex-wrap items-center justify-between text-sm">
              <p className="font-medium">
                {value[0].charAt(0).toUpperCase() +
                  value[0]
                    .slice(1)
                    .replace(/([A-Z])/g, ' $1')
                    .trim()}
                :
              </p>
              <p>
                {(Array.isArray(value[1]) ? value[1].filter((item) => item.trim() !== '').join(', ') : value[1]) ||
                  '--'}
              </p>
            </div>
          ))}
          <p
            className="mt-4 w-fit cursor-pointer transition-all ease-linear hover:text-primary-500"
            onClick={() => setSummaryOpen(false)}
          >
            Ver menos informações do ticket
          </p>
        </>
      )}
    </div>
  )
}
