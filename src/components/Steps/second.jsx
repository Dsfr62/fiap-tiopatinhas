import React from 'react'
import { MultiForm } from '../MultiForm'

const Second = React.memo(({ formData, handleInputChange, errors, nextStep, prevStep }) => {
  return (
    <MultiForm.Step>
      <MultiForm.Title>Etapa 2: Detalhes do Relatório</MultiForm.Title>
      <MultiForm.Subtitle>Forneça mais informações sobre o relatório.</MultiForm.Subtitle>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="reportResolved">
          Resolvido em <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="reportResolved"
          type="date"
          value={formData.reportResolved}
          onChange={handleInputChange}
          aria-invalid={errors.reportResolved ? 'true' : 'false'}
          aria-describedby="reportResolved-error"
          className={errors.reportResolved ? 'border-red-500' : ''}
        />
        {errors.reportResolved && (
          <span id="reportResolved-error" className="mt-1 text-sm text-red-500">
            {errors.reportResolved}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="reportCategory">
          Categoria Relatório <span className="text-red-500">*</span>
        </MultiForm.Label>
        <MultiForm.Input
          id="reportCategory"
          type="text"
          value={formData.reportCategory}
          onChange={handleInputChange}
          aria-invalid={errors.reportCategory ? 'true' : 'false'}
          aria-describedby="reportCategory-error"
          className={errors.reportCategory ? 'border-red-500' : ''}
        />
        {errors.reportCategory && (
          <span id="reportCategory-error" className="mt-1 text-sm text-red-500">
            {errors.reportCategory}
          </span>
        )}
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="reportSubcategory">Subcategoria Relatório</MultiForm.Label>
        <MultiForm.Input
          id="reportSubcategory"
          type="text"
          value={formData.reportSubcategory}
          onChange={handleInputChange}
        />
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="symptom">Sintoma</MultiForm.Label>
        <MultiForm.Input id="symptom" type="text" value={formData.symptom} onChange={handleInputChange} />
      </MultiForm.InputContainer>
      <MultiForm.InputContainer>
        <MultiForm.Label htmlFor="symptomQualification">Qualificação de Sintoma</MultiForm.Label>
        <MultiForm.Input
          id="symptomQualification"
          type="text"
          value={formData.symptomQualification}
          onChange={handleInputChange}
        />
      </MultiForm.InputContainer>
    </MultiForm.Step>
  )
})

export default Second
