import Button from '../components/Button'
import { Card } from '../components/Card'
import FormSelect from '../components/Form/FormSelect'

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-[48px] font-extrabold">Dashboard</h1>
      <div className="mt-4 flex w-[128px] flex-col gap-4">
        <h2>Buttons</h2>
        <Button variantStyle="primary">Click me</Button>
        <Button variantStyle="secondary">Click me</Button>
        <Button variantStyle="tertiary">Click me</Button>
      </div>
      <div className="mt-4">
        <h2>Cards</h2>
        <Card.Container className="w-full">Card</Card.Container>
      </div>
      <div className="mt-4 w-fit gap-4">
        <h2>Select</h2>
        <FormSelect id="select" value="1" color="primary" required>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </FormSelect>
        <FormSelect id="select" value="1" color="secondary" className="ml-4 p-0" required>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </FormSelect>
      </div>
    </div>
  )
}

export default DashboardPage
