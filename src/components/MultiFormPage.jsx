import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { MultiForm } from '../components/MultiForm'
import { Card } from '../components/Card'
import { ProgressBar } from '../components/ProgressBar'
import { StepIndicator } from '../components/StepIndicator'
import First from './Steps/first'
import Second from './Steps/second'
import Third from './Steps/third'
import Fourth from './Steps/fourth'
import Fifth from './Steps/fifth'
import SummaryCard from './SummaryCard'
import { useNavigate } from 'react-router-dom'

const TOTAL_STEPS = 5

const MultiStepFormPage = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    number: '',
    open: '',
    updated: '',
    reportState: '',
    reportResolved: '',
    reportCategory: '',
    reportSubcategory: '',
    symptom: '',
    symptomQualification: '',
    attributionGroup: '',
    category: '',
    assigned: '',
    priority: '',
    closed: '',
    taskRequester: '',
    location: '',
    description: '',
    visibleComments: [],
    resolution: '',
  })
  const [errors, setErrors] = useState({})
  const [showSummary, setShowSummary] = useState(false)

  const validateStep = useCallback(
    (stepNumber) => {
      const stepErrors = {}
      const requiredFields = {
        1: ['number', 'open', 'reportState'],
        2: ['reportCategory', 'reportResolved'],
        3: ['attributionGroup', 'category', 'assigned', 'priority'],
        4: ['closed', 'taskRequester', 'location', 'description'],
        5: [],
      }

      requiredFields[stepNumber].forEach((field) => {
        if (!formData[field]) {
          stepErrors[field] = `${
            field.charAt(0).toUpperCase() +
            field
              .slice(1)
              .replace(/([A-Z])/g, ' $1')
              .trim()
          } é obrigatório`
        }
      })

      setErrors(stepErrors)
      return Object.keys(stepErrors).length === 0
    },
    [formData]
  )

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target
    setFormData((prevData) => ({ ...prevData, [id]: value }))
  }, [])

  const handleCommentChange = useCallback((index, value) => {
    setFormData((prevData) => ({
      ...prevData,
      visibleComments: prevData.visibleComments.map((comment, i) => (i === index ? value : comment)),
    }))
  }, [])

  const addComment = useCallback(() => {
    setFormData((prevData) => ({
      ...prevData,
      visibleComments: [...prevData.visibleComments, ''],
    }))
  }, [])

  const removeComment = useCallback((index) => {
    setFormData((prevData) => ({
      ...prevData,
      visibleComments: prevData.visibleComments.filter((_, i) => i !== index),
    }))
  }, [])

  const nextStep = useCallback(() => {
    if (validateStep(step)) {
      if (step < TOTAL_STEPS) {
        setStep((prevStep) => prevStep + 1)
      } else {
        setShowSummary(true)
      }
    }
  }, [step, validateStep])

  const prevStep = useCallback(() => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1)
      setShowSummary(false)
    }
  }, [step])

  const handleEdit = useCallback(() => {
    setShowSummary(false)
    setStep(TOTAL_STEPS)
  }, [])

  const confirmSubmit = useCallback(() => {
    console.log('Formulário enviado:', formData)
    // TODO: Aqui você pode implementar a lógica de envio do formulário para o backend

    setFormData({
      number: '',
      open: '',
      updated: '',
      reportState: '',
      reportResolved: '',
      reportCategory: '',
      reportSubcategory: '',
      symptom: '',
      symptomQualification: '',
      attributionGroup: '',
      category: '',
      assigned: '',
      priority: '',
      closed: '',
      taskRequester: '',
      location: '',
      description: '',
      visibleComments: [],
      resolution: '',
    })
    navigate('/tickets')
  }, [formData])

  const renderStep = useMemo(() => {
    const steps = [
      <First formData={formData} handleInputChange={handleInputChange} errors={errors} />,
      <Second formData={formData} handleInputChange={handleInputChange} errors={errors} />,
      <Third formData={formData} handleInputChange={handleInputChange} errors={errors} />,
      <Fourth formData={formData} handleInputChange={handleInputChange} errors={errors} />,
      <Fifth
        formData={formData}
        handleInputChange={handleInputChange}
        handleCommentChange={handleCommentChange}
        addComment={addComment}
        removeComment={removeComment}
        errors={errors}
      />,
    ]

    return steps[step - 1]
  }, [step, formData, handleInputChange, handleCommentChange, addComment, removeComment, errors])

  useEffect(() => {
    const savedData = localStorage.getItem('formData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  if (showSummary) {
    return <SummaryCard formData={formData} handleEdit={handleEdit} confirmSubmit={confirmSubmit} />
  }

  return (
    <Card.Container className="mx-auto max-w-5xl py-8">
      <MultiForm.Container onSubmit={(e) => e.preventDefault()}>
        <Card.Header>
          <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
          <StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />
        </Card.Header>
        <Card.Content>{renderStep}</Card.Content>
        <Card.Footer className="mt-6 flex justify-between">
          {step > 1 && <MultiForm.Button onClick={prevStep}>Anterior</MultiForm.Button>}
          <MultiForm.Button onClick={nextStep}>{step < TOTAL_STEPS ? 'Próximo' : 'Revisar e Enviar'}</MultiForm.Button>
        </Card.Footer>
      </MultiForm.Container>
    </Card.Container>
  )
}

export default MultiStepFormPage
