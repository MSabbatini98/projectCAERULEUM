
import CoolTitle from "@/components/utils/coolTitle"
import calculatorStyles from './basic-calculator.module.scss'

export default function Calculator() {
  return (
    <main className="main_playground"  >
        <div className="main_content">

        <CoolTitle
            title="Calcolatrice classica"
            colorClass="blue_3"/>
        <p>This is a basic calculator built with HTML, CSS, and JavaScript. It performs simple arithmetic operations such as addition, subtraction, multiplication, and division.</p>

      <BasicCalculator />
        </div>
    </main>
  )
}

function BasicCalculator() {


  return (
    <div className={calculatorStyles.basic_calculator}> 
    </div>
  )
}
