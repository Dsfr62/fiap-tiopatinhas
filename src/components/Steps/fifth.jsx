import React from 'react'
import { MultiForm } from '../MultiForm'
import { ReactComponent as InfoSvg } from '../../assets/svgs/info.svg'

const Fifth = React.memo(({ formData, handleInputChange, handleCommentChange, addComment, removeComment, errors }) => {
  const visibleComments = Array.isArray(formData.visibleComments) ? formData.visibleComments : []

  return (
    <MultiForm.Step>
      <MultiForm.Title>Etapa 5: Comentários e Resolução</MultiForm.Title>
      <MultiForm.Subtitle>Adicione comentários visíveis e a resolução final.</MultiForm.Subtitle>
      {visibleComments.map((comment, index) => (
        <MultiForm.InputContainer key={index}>
          <MultiForm.Label htmlFor={`visibleComments-${index}`}>Comentário Visível {index + 1}</MultiForm.Label>
          <div className="flex items-center">
            <MultiForm.Textarea
              id={`visibleComments-${index}`}
              value={comment}
              onChange={(e) => handleCommentChange(index, e.target.value)}
              aria-label={`Comentário Visível ${index + 1}`}
            />
            <MultiForm.Button
              type="button"
              onClick={() => removeComment(index)}
              className="ml-2"
              aria-label={`Remover comentário ${index + 1}`}
            >
              Remover
            </MultiForm.Button>
          </div>
        </MultiForm.InputContainer>
      ))}
      <MultiForm.Button type="button" onClick={addComment} className="mb-4">
        Adicionar Comentário
      </MultiForm.Button>
      <MultiForm.InputContainer>
        <div className="flex items-center gap-x-1">
          <MultiForm.Label htmlFor="resolution">Resolução</MultiForm.Label>
          <div class="has-tooltip">
            <span class="tooltip -mt-[180px] max-w-[300px] rounded bg-gray-100 p-1 text-base text-blue-500 shadow-lg max-md:-ms-[80px]">
              Este campo não é obrigatório. Se deixado em branco, a resolução será gerada automaticamente por
              inteligência artificial. Se preenchido, o conteúdo fornecido será utilizado para treinar o modelo de I.A.,
              ajudando a melhorar futuras resoluções
            </span>
            <InfoSvg className="h-4 w-4" />
          </div>
        </div>
        <MultiForm.Textarea id="resolution" value={formData.resolution || ''} onChange={handleInputChange} />
      </MultiForm.InputContainer>
    </MultiForm.Step>
  )
})

export default Fifth
