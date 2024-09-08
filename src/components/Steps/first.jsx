import React from 'react'
import { MultiForm } from '../MultiForm'

const First = React.memo(({ formData, handleInputChange, errors, nextStep }) => {
  return (
    <MultiForm.Step>
      <MultiForm.Title>Etapa 1: Informações Básicas do Chamado</MultiForm.Title>
      <MultiForm.Subtitle>Preencha os dados iniciais do chamado.</MultiForm.Subtitle>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="number">
          Número <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="number"
          type="text"
          value={formData.number}
          onChange={handleInputChange}
          aria-invalid={errors.number ? 'true' : 'false'}
          aria-describedby="number-error"
          className={errors.number ? 'border-red-500' : ''}
        />
        {errors.number && (
          <span id="number-error" className="mt-1 text-sm text-red-500">
            {errors.number}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="open">
          Aberto em <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="open"
          type="text"
          value={formData.open}
          onChange={handleInputChange}
          aria-invalid={errors.open ? 'true' : 'false'}
          aria-describedby="open-error"
          className={errors.open ? 'border-red-500' : ''}
        />
        {errors.open && (
          <span id="open-error" className="mt-1 text-sm text-red-500">
            {errors.open}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="updated">Atualizado em</MultiForm.Label>
        <MultiForm.Input id="updated" type="text" value={formData.updated} onChange={handleInputChange} />
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="reportState">
          Estado do Relatório <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Select
          id="reportState"
          value={formData.reportState}
          onChange={handleInputChange}
          aria-invalid={errors.reportState ? 'true' : 'false'}
          aria-describedby="reportState-error"
          className={errors.reportState ? 'border-red-500' : ''}
        >
          <option value="">Selecione...</option>
          <option value="Aberto">Aberto</option>
          <option value="Fechado">Fechado</option>
          <option value="Resolvido">Resolvido</option>
        </MultiForm.Select>
        {errors.reportState && (
          <span id="reportState-error" className="mt-1 text-sm text-red-500">
            {errors.reportState}
          </span>
        )}
      </MultiForm.InputContainer>
    </MultiForm.Step>
  )
})

export default First
