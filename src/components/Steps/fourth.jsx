import React from 'react'
import { MultiForm } from '../MultiForm'

const Fourth = React.memo(({ formData, handleInputChange, errors, nextStep, prevStep }) => {
  return (
    <MultiForm.Step>
      <MultiForm.Title>Etapa 4: Detalhes Finais e Descrição</MultiForm.Title>
      <MultiForm.Subtitle>Complete as informações finais e forneça uma descrição detalhada.</MultiForm.Subtitle>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="closed">
          Encerrado em <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="closed"
          type="date"
          value={formData.closed}
          onChange={handleInputChange}
          aria-invalid={errors.closed ? 'true' : 'false'}
          aria-describedby="closed-error"
          className={errors.closed ? 'border-red-500' : ''}
        />
        {errors.closed && (
          <span id="closed-error" className="mt-1 text-sm text-red-500">
            {errors.closed}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="taskRequester">
          Solicitante Tarefa <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="taskRequester"
          type="text"
          value={formData.taskRequester}
          onChange={handleInputChange}
          aria-invalid={errors.taskRequester ? 'true' : 'false'}
          aria-describedby="taskRequester-error"
          className={errors.taskRequester ? 'border-red-500' : ''}
        />
        {errors.taskRequester && (
          <span id="taskRequester-error" className="mt-1 text-sm text-red-500">
            {errors.taskRequester}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="location">
          Local <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="location"
          type="text"
          value={formData.location}
          onChange={handleInputChange}
          aria-invalid={errors.location ? 'true' : 'false'}
          aria-describedby="location-error"
          className={errors.location ? 'border-red-500' : ''}
        />
        {errors.location && (
          <span id="location-error" className="mt-1 text-sm text-red-500">
            {errors.location}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="description">
          Descrição <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Textarea
          id="description"
          value={formData.description}
          onChange={handleInputChange}
          aria-invalid={errors.description ? 'true' : 'false'}
          aria-describedby="description-error"
          className={errors.description ? 'border-red-500' : ''}
        />
        {errors.description && (
          <span id="description-error" className="mt-1 text-sm text-red-500">
            {errors.description}
          </span>
        )}
      </MultiForm.InputContainer>
    </MultiForm.Step>
  )
})

export default Fourth
