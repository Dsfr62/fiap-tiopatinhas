import React from 'react'
import { Card } from '../components/Card'
import { MultiForm } from '../components/MultiForm/index'

const SummaryCard = ({ formData, handleEdit, confirmSubmit }) => {
  return (
    <Card.Container className="mx-auto max-w-5xl py-8">
      <MultiForm.Container>
        <Card.Header>
          <Card.Title>Revisão do Chamado</Card.Title>
        </Card.Header>
        <Card.Content className="space-y-4 pt-6">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <strong>
                {key.charAt(0).toUpperCase() +
                  key
                    .slice(1)
                    .replace(/([A-Z])/g, ' $1')
                    .trim()}
                :
              </strong>
              <span>
                {Array.isArray(value) ? value.filter((item) => item.trim() !== '').join(', ') : value || '--'}
              </span>
            </div>
          ))}
        </Card.Content>
        <Card.Footer className="mt-6 flex justify-between">
          <MultiForm.Button onClick={handleEdit}>Editar</MultiForm.Button>
          <MultiForm.Button onClick={confirmSubmit}>Confirmar e Enviar</MultiForm.Button>
        </Card.Footer>
      </MultiForm.Container>
    </Card.Container>
  )
}

export default SummaryCard
