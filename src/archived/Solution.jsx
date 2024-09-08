import { Banner } from '../components/Banner'
import { SolutionForm, SolutionFormFullfilled } from '../utils/forms/solution.form'
import { Form } from '../components/Form'
import { useState } from 'react'
import Button from '../components/Button'

const SolutionPage = () => {
  const [solutionForm, setSolutionForm] = useState(new SolutionFormFullfilled())
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)

  const solution = `Com base na descrição do problema de lentidão no sistema e na falta de sintomas mais específicos, uma solução aplicável poderia ser reiniciar o serviço de banco de dados. Frequentemente, problemas de desempenho em sistemas podem estar relacionados ao estado atual do banco de dados. A reinicialização pode ajudar a limpar caches, liberar recursos e resolver travamentos ou bloqueios temporários que possam estar afetando a performance.

Ação Sugerida:

- Verifique se há usuários ativos ou operações críticas sendo realizadas no momento para evitar interrupções.
- Notifique os usuários sobre a reinicialização iminente do serviço de banco de dados.
- Reinicie o serviço de banco de dados apropriado ao sistema "Adapt".
- Monitore o desempenho do sistema após a reinicialização para confirmar se a lentidão foi resolvida.
- Por favor, registre qualquer mudança no comportamento do sistema após esta ação para futuras referências e para ajudar a diagnosticar problemas semelhantes no futuro.`

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(solutionForm)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (solutionForm.resolution) {
        setSolutionForm(new SolutionForm())
      } else {
        setShowForm(false)
      }
    }, 3000)
  }

  return (
    <div className="">
      <Banner.Container variantSize="lg" variantColor="secondary">
        <Banner.Title>Gerador de Soluções</Banner.Title>
        <p className="text-md italic text-white">
          O nosso gerador de soluções conseguirá analisar os dados do chamado em questão e te entregar insights valiosos
          para resolver os problemas do cliente.
        </p>
      </Banner.Container>
      <div className="flex flex-col items-center bg-primary-light py-8">
        {showForm ? (
          <Form.Container className="items-center md:w-[1000px]" isLoading={isLoading} onSubmit={handleSubmit}>
            <Form.Title>
              Dados do Chamado
              <Form.SubTitle>Preencha os campos abaixo com os dados do seu chamado</Form.SubTitle>
            </Form.Title>
            <div className="my-6 grid w-[400px] grid-cols-1 gap-4 px-4 md:w-[600px] md:grid-cols-2 lg:w-[1000px]">
              <Form.InputContainer>
                <Form.Label htmlFor="number">Número</Form.Label>
                <Form.Input
                  type="text"
                  id="number"
                  value={solutionForm.number}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, number: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="open">Aberto em</Form.Label>
                <Form.Input
                  type="text"
                  id="open"
                  value={solutionForm.open}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, open: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="updated">Atualizado em</Form.Label>
                <Form.Input
                  type="text"
                  id="updated"
                  value={solutionForm.updated}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, updated: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="reportState">Estado do Relatório</Form.Label>
                <Form.Select
                  id="reportState"
                  value={solutionForm.reportState}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, reportState: event.target.value }))
                  }}
                >
                  <option value="Aberto">Aberto</option>
                  <option value="Fechado">Fechado</option>
                  <option value="Resolvido">Resolvido</option>
                </Form.Select>
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="reportResolved">Resolvido em</Form.Label>
                <Form.Input
                  type="text"
                  id="reportResolved"
                  value={solutionForm.reportResolved}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, reportResolved: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="reportCategory">Categoria Relatório</Form.Label>
                <Form.Input
                  type="text"
                  id="reportCategory"
                  value={solutionForm.reportCategory}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, reportCategory: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="reportSubcategory">Subcategoria Relatório</Form.Label>
                <Form.Input
                  type="text"
                  id="reportSubcategory"
                  value={solutionForm.reportSubcategory}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, reportSubcategory: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="symptom">Sintoma</Form.Label>
                <Form.Input
                  type="text"
                  id="symptom"
                  value={solutionForm.symptom}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, symptom: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="symptomQualification">Qualificação de Sintoma</Form.Label>
                <Form.Input
                  type="text"
                  id="symptomQualification"
                  value={solutionForm.symptomQualification}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, symptomQualification: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="attributionGroup">Grupo de atribuição</Form.Label>
                <Form.Input
                  type="text"
                  id="attributionGroup"
                  value={solutionForm.attributionGroup}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, attributionGroup: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="category">Categoria</Form.Label>
                <Form.Input
                  type="text"
                  id="category"
                  value={solutionForm.category}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, category: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="assigned">Atribuído a</Form.Label>
                <Form.Input
                  type="text"
                  id="assigned"
                  value={solutionForm.assigned}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, assigned: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="priority">Prioridade</Form.Label>
                <Form.Select
                  id="priority"
                  value={solutionForm.priority}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, priority: event.target.value }))
                  }}
                >
                  <option value="">Selecionar...</option>
                  <option value="1 - Alto">1 - Alto</option>
                  <option value="2 - Médio">2 - Médio</option>
                  <option value="3 - Baixo">3 - Baixo</option>
                  <option value="4 - Planejamento">4 - Planejamento</option>
                </Form.Select>
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="closed">Encerrado em</Form.Label>
                <Form.Input
                  type="text"
                  id="closed"
                  value={solutionForm.closed}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, closed: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="taskRequester">Solicitante Tarefa</Form.Label>
                <Form.Input
                  type="text"
                  id="taskRequester"
                  value={solutionForm.taskRequester}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, taskRequester: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer>
                <Form.Label htmlFor="location">Local</Form.Label>
                <Form.Input
                  type="text"
                  id="location"
                  value={solutionForm.location}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, location: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              <Form.InputContainer className="md:col-span-2">
                <Form.Label htmlFor="description">Descrição</Form.Label>
                <Form.Textarea
                  id="description"
                  value={solutionForm.description}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, description: event.target.value }))
                  }}
                />
              </Form.InputContainer>
              {solutionForm.visibleComments.map((_, index) => (
                <Form.InputContainer key={index} className="md:col-span-2">
                  <Form.Label htmlFor={`visibleComments-${index}`}>Comentário Visível {index + 1}</Form.Label>
                  <Form.Textarea
                    id={`visibleComments-${index}`}
                    value={solutionForm.visibleComments[index]}
                    onInput={(event) => {
                      setSolutionForm((solutionForm) => {
                        const visibleComments = [...solutionForm.visibleComments]
                        visibleComments[index] = event.target.value
                        return { ...solutionForm, visibleComments }
                      })
                    }}
                  />
                </Form.InputContainer>
              ))}
              <div className="md:col-span-2">
                <Button
                  type={'button'}
                  variantStyle="primary"
                  onClick={() =>
                    setSolutionForm((solutionForm) => {
                      const visibleComments = [...solutionForm.visibleComments]
                      visibleComments.push('')
                      return { ...solutionForm, visibleComments }
                    })
                  }
                >
                  Adicionar Comentário
                </Button>
              </div>
              <Form.InputContainer className="md:col-span-2">
                <Form.Label htmlFor="resolution">Resolução</Form.Label>
                <Form.Textarea
                  id="resolution"
                  value={solutionForm.resolution}
                  onInput={(event) => {
                    setSolutionForm((solutionForm) => ({ ...solutionForm, resolution: event.target.value }))
                  }}
                />
              </Form.InputContainer>
            </div>
            <Form.Button className={solutionForm.resolution ? 'bg-green-500' : ''}>
              {solutionForm.resolution ? 'Adicionar ao sistema' : 'Enviar'}
            </Form.Button>
          </Form.Container>
        ) : (
          <Form.Container
            className="items-center md:w-[1000px]"
            isLoading={isLoading}
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <Form.Title>
              Solução Gerada
              <Form.SubTitle>Confira abaixo a solução gerada pela IA</Form.SubTitle>
            </Form.Title>
            <Form.Textarea
              id="solution"
              value={solution}
              disabled
              className="text-md my-6 h-[390px] w-full rounded border border-black bg-white font-semibold"
            />
            <div className="flex gap-x-16">
              <Button
                className="bg-red-500"
                onClick={(event) => {
                  setShowForm(true)
                }}
              >
                Voltar
              </Button>
              <Button
                className="bg-green-600"
                onClick={(event) => {
                  setIsLoading(true)
                  setTimeout(() => {
                    setIsLoading(false)
                    setSolutionForm(new SolutionForm())
                    setShowForm(true)
                  }, 3000)
                }}
              >
                Salvar
              </Button>
            </div>
          </Form.Container>
        )}
      </div>
    </div>
  )
}

export default SolutionPage

//Número	Aberto	Atualizado em	Estado Relatório	Resolvido Relatório	Categoria Relatório	Subcategoria Relatório	Sintoma	Qualificação Sintoma	Grupo de atribuição	Categoria	Atribuído a	Prioridade	Encerrado	Solicitante Tarefa	Local	Descrição	Comentários Visiveis 	Comentários Visiveis 	Comentários Visiveis 	Comentários Visiveis 	Comentários Visiveis 	Comentários Visiveis 	Comentários Visiveis 	Comentários Visiveis 	Comentários Visiveis 	Resolução
