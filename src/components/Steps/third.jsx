import React from 'react'
import { MultiForm } from '../MultiForm'

const Third = React.memo(({ formData, handleInputChange, errors, nextStep, prevStep }) => {
  return (
    <MultiForm.Step>
      <MultiForm.Title>Etapa 3: Atribuição e Prioridade</MultiForm.Title>
      <MultiForm.Subtitle>Defina a atribuição e prioridade do chamado.</MultiForm.Subtitle>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="attributionGroup">
          Grupo de atribuição <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="attributionGroup"
          type="text"
          value={formData.attributionGroup}
          onChange={handleInputChange}
          aria-invalid={errors.attributionGroup ? 'true' : 'false'}
          aria-describedby="attributionGroup-error"
          className={errors.attributionGroup ? 'border-red-500' : ''}
        />
        {errors.attributionGroup && (
          <span id="attributionGroup-error" className="mt-1 text-sm text-red-500">
            {errors.attributionGroup}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="category">
          Categoria <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="category"
          type="text"
          value={formData.category}
          onChange={handleInputChange}
          aria-invalid={errors.category ? 'true' : 'false'}
          aria-describedby="category-error"
          className={errors.category ? 'border-red-500' : ''}
        />
        {errors.category && (
          <span id="category-error" className="mt-1 text-sm text-red-500">
            {errors.category}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="assigned">
          Atribuído a <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="assigned"
          type="text"
          value={formData.assigned}
          onChange={handleInputChange}
          aria-invalid={errors.assigned ? 'true' : 'false'}
          aria-describedby="assigned-error"
          className={errors.assigned ? 'border-red-500' : ''}
        />
        {errors.assigned && (
          <span id="assigned-error" className="mt-1 text-sm text-red-500">
            {errors.assigned}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="priority">
          Prioridade <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Select
          id="priority"
          value={formData.priority}
          onChange={handleInputChange}
          aria-invalid={errors.priority ? 'true' : 'false'}
          aria-describedby="priority-error"
          className={errors.priority ? 'border-red-500' : ''}
        >
          <option value="">Selecionar...</option>
          <option value="1 - Alto">1 - Alto</option>
          <option value="2 - Médio">2 - Médio</option>
          <option value="3 - Baixo">3 - Baixo</option>
          <option value="4 - Planejamento">4 - Planejamento</option>
        </MultiForm.Select>
        {errors.priority && (
          <span id="priority-error" className="mt-1 text-sm text-red-500">
            {errors.priority}
          </span>
        )}
      </MultiForm.InputContainer>
    </MultiForm.Step>
  )
})

export default Third
